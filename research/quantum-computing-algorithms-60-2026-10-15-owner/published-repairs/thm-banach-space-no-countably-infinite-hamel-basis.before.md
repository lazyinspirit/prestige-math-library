---
id: thm-banach-space-no-countably-infinite-hamel-basis
kind: theorem
title: "A Banach space has no countably infinite Hamel basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-banach-space, cor-finite-dimensional-normed-spaces-are-banach,
       def-linear-basis, def-countable, thm-rationals-countable,
       thm-n-cross-n-countable, lem-q-and-irrationals-dense-r,
       thm-recursion, thm-well-ordering-principle,
       cor-archimedean-reciprocal, lem-geometric-sequence-null,
       rem-real-and-complex-normed-space-convention,
       thm-complex-numbers-are-the-real-coordinate-plane]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: locally-repaired
    date: 2026-09-09
    scope: owner-authorized-local-ZF-proof-and-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Alan Sokal, Mathematics 3103, Handout 7 (2012–2013), Theorem 7.3 and footnote 4, pp. 3–5"
      url: "https://www.ucl.ac.uk/~ucahad0/3103_handout_7.pdf"
    - title: "Paul Howard and Eleftherios Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice"
      url: "https://commons.emich.edu/fac_sch2017/127/"
    - title: "Christopher Heil, A Basis Theory Primer"
      url: "https://heil.math.gatech.edu/papers/bases.pdf"
pipeline_run: frontier-29
---

## Statement

Let $X$ be a Banach space over $\mathbb K\in\{\mathbb R,\mathbb C\}$. Then $X$
has no countably infinite Hamel basis. Equivalently, there is no sequence
$(b_n)_{n\in\mathbb N}$ of pairwise distinct vectors whose image is a basis of
$X$ in the sense of [[def-linear-basis]].

This holds in ZF, without any choice axiom. Here countably infinite means
equinumerous with $\mathbb N$ ([[def-countable]]).

## Facts & Assumptions

**Given:** A Banach space $X$ and, for contradiction, a sequence $(b_n)_{n\in\mathbb N}$ of pairwise distinct vectors whose image is a Hamel basis of $X$.

[L1] A Banach space is complete for its norm metric ([[def-banach-space]]).

[L2] A normed space supplied with an ordered basis of finite length is complete ([[cor-finite-dimensional-normed-spaces-are-banach]]). We prove the needed closedness locally, rather than manufacture a sequence in an arbitrary subspace.

[L3] There is an enumeration $q:\mathbb N\to\mathbb Q$ ([[thm-rationals-countable]]), and rational numbers, identified with their real images, approximate every real number ([[lem-q-and-irrationals-dense-r]], clause 1).

[L4] There is a fixed bijection $p:\mathbb N\times\mathbb N\to\mathbb N$, explicitly $p(a,b)=2^a(2b+1)-1$ ([[thm-n-cross-n-countable]]).

[L5] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]). A supplied total function $f:S\to S$ and starting point determine a sequence by recursion ([[thm-recursion]]); stage-dependent rules are encoded on states containing the stage.

[L6] For every $\eta>0$ there is an integer $k\ge1$ with $1/k<\eta$ ([[cor-archimedean-reciprocal]]); also $(1/2)^n\to0$ ([[lem-geometric-sequence-null]], clause 1).

[L7] A complex normed space has the same complete metric on restriction to real scalars ([[rem-real-and-complex-normed-space-convention]]). Every complex scalar uniquely has the form $a+ib$ with $a,b\in\mathbb R$ ([[thm-complex-numbers-are-the-real-coordinate-plane]]).

## Proof

**Proof technique:** direct.

1.1 Fix $p$ and $q$ from [L3, L4]. Encode a finite word $(a_0,\ldots,a_{\ell-1})$ of naturals by $p(\ell,c_\ell)$, where $c_0=0$ and $c_{j+1}=p(c_j,a_j)$. To decode any natural, invert its outer pair to obtain $(\ell,c)$, and invert the inner pair $\ell$ times, recovering the symbols in reverse order. If the final residue is not zero, return the empty word; otherwise return the recovered word. These are uniform finite recursions: one may retain the remaining length, current residue and recovered finite list as the state and stop changing the state when the remaining length is zero. Thus [L5] defines the decoder, and decoding an encoded word returns that word by induction and injectivity of $p$. We have a total surjection from $\mathbb N$ onto all finite words, without choosing separate enumerations for each length. [L3, L4, L5, construct]

1.2 In the real case let $e_j=b_j$. In the complex case let $e_{2j}=b_j$ and $e_{2j+1}=ib_j$, and regard $X$ as a real normed space. In either case $(e_j)$ is a real Hamel basis: in the complex case a finite real relation groups into a complex relation among the $b_j$, forcing both real coefficients for each $b_j$ to vanish, and spanning follows by splitting each complex coefficient into real and imaginary parts. Completeness is unchanged. [given, L7, algebra]

2.1 Interpret a decoded symbol $p(j,t)$ as the term $q(t)e_j$, and interpret a decoded word as the sum of its terms, the empty word giving zero. Step 1.1 now defines a total function $d:\mathbb N\to X$ whose image $D$ is exactly the finite rational span of $(e_j)$. In particular $0\in D$. For each fixed $N$, the same decoder, with symbols having $j>N$ contributing zero, defines $d_N:\mathbb N\to F_N$, where $F_N=\operatorname{span}_{\mathbb R}\{e_0,\ldots,e_N\}$; its image is exactly the rational span of this finite list. [step 1.1, step 1.2, L3, L4, construct]

3.1 For any finite expression $v=\sum_{j<\ell}\lambda_j e_{n_j}$ and $\varepsilon>0$, if $\ell=0$ then $v=0\in D$. Otherwise put $\delta=\varepsilon/(2\ell(1+\sum_{j<\ell}\|e_{n_j}\|))>0$ and let $t_j$ be the least natural with $|\lambda_j-q(t_j)|<\delta$. Such an index exists by [L3]; [L5] determines it. The triangle inequality gives $\left\|v-\sum_{j<\ell}q(t_j)e_{n_j}\right\|\le\delta\sum_{j<\ell}\|e_{n_j}\|<\varepsilon.$ Consequently $D$ is dense in $X$, and using only indices at most $N$ shows that $d_N[\mathbb N]$ is dense in $F_N$. Only the displayed finite representation of the fixed vector is used, not a selection of representations for a family of vectors. [step 1.2, step 2.1, L3, L5, algebra]

3.2 Each $F_N$ is proper since $e_{N+1}\notin F_N$ by real independence. Also $X=\bigcup_N F_N$, because every vector has a finite expression in the $e_j$ and a finite list of natural indices has an upper bound. [step 1.2, step 2.1, algebra]

4.1 Fix $N$ and a point $z$ in the ambient closure of $F_N$, meaning every ball around $z$ meets $F_N$. For each $k\in\mathbb N$, some $u\in F_N$ satisfies $\|z-u\|<1/(2(k+1))$, and density from step 3.1 gives some $d_N(j)$ with $\|u-d_N(j)\|<1/(2(k+1))$. Hence the set of $j$ with $\|z-d_N(j)\|<1/(k+1)$ is nonempty. Define $j(k)$ to be its least member and $u_k=d_N(j(k))$. This defines one sequence outright by [L5]; no countable choice is used. The reciprocal estimate [L6] and the triangle inequality give $u_k\to z$ in $X$ and show $(u_k)$ is Cauchy in $F_N$. [step 3.1, L5, L6, construct]

5.1 The displayed list $(e_0,\ldots,e_N)$ is an ordered real basis of $F_N$ by step 1.2, so [L2] supplies a limit $y\in F_N$ of this already constructed Cauchy sequence. Then $\|z-y\|\le\|z-u_k\|+\|u_k-y\|\to0$, whence $z=y\in F_N$. Therefore $F_N$ is closed: if a point outside it had no disjoint ball, it would belong to its closure, contrary to what we just proved. This argument uses completeness only on the specific sequence from step 4.1. [step 1.2, step 4.1, L2, algebra]

6.1 Every proper real linear subspace has empty interior. Indeed, if it contains $B(v,r)$ then $v$ belongs to it, and subtraction gives $B(0,r)$ inside it. For any nonzero $w\in X$, the vector $rw/(2\|w\|)$ belongs to that ball, and real scalar multiplication then puts $w$ in the subspace too; zero already belongs to it. Thus the subspace would be $X$. In particular each $F_N$ is closed with empty interior. [step 5.1, step 3.2, algebra]

7.1 Write $B(v,r)=\{w:\|w-v\|<r\}$ and $\overline B(v,r)=\{w:\|w-v\|\le r\}$, and put $U_0=B(0,1)$. Balls are open by the triangle inequality. By step 6.1, $U_0\setminus F_0$ is nonempty and open. Let $m_0$ be the least index with $d(m_0)\in U_0\setminus F_0$. Openness gives a radius $\rho>0$ about this point inside that set; [L6] gives an integer $k$ with $1/k<\rho$. Therefore there is a least positive integer $k_0$ with $\overline B(d(m_0),1/k_0)\subseteq U_0\setminus F_0$. [step 3.1, step 6.1, L5, L6, construct]

8.1 Let $S$ be the set of triples $(n,m,k)\in\mathbb N^3$ with $k\ge1$ and $\overline B(d(m),1/k)\subseteq U_0\setminus F_n$. For any such triple the set $O=B(d(m),1/(2k))\setminus F_{n+1}$ is nonempty and open. Let $m'$ be the least index with $d(m')\in O$, and $k'$ the least positive integer with $1/k'<1/(2k)$ and $\overline B(d(m'),1/k')\subseteq O$. Density, openness and [L6] prove these sets of indices nonempty. The resulting triple $(n+1,m',k')$ belongs to $S$, so these formulas define a total function $S\to S$. Apply [L5] with initial state $(0,m_0,k_0)$ to obtain states $(n,m_n,k_n)$ for every $n$. Put $x_n=d(m_n)$ and $r_n=1/k_n$. Then $\overline B(x_{n+1},r_{n+1})\subseteq B(x_n,r_n/2)\setminus F_{n+1}\subseteq\overline B(x_n,r_n),\qquad r_{n+1}<r_n/2.$ Thus $r_n\le r_0(1/2)^n\to0$. Every recurring selection was the minimum of a specified subset of $\mathbb N$. [step 3.1, step 6.1, step 7.1, L5, L6, construct]

9.1 For $m>n$, nesting gives $x_m\in B(x_n,r_n/2)$, so $(x_n)$ is Cauchy. By [L1] it converges to some $x\in X$. For fixed $n$ and all $m>n$, $\|x-x_n\|\le\|x-x_m\|+\|x_m-x_n\|\le\|x-x_m\|+r_n.$ Letting $m\to\infty$ gives $\|x-x_n\|\le r_n$. Therefore $x\in\overline B(x_n,r_n)\subseteq X\setminus F_n$ for every $n$. We used only the already constructed centers, not a choice of points from arbitrary closed sets. [L1, step 7.1, step 8.1, algebra]

10.1 Step 9.1 contradicts $X=\bigcup_N F_N$ from step 3.2. Therefore the supposed countably infinite Hamel basis cannot exist. All sequences used above were defined by uniform coding, least indices, or recursion on a supplied function, so the proof requires no choice axiom. [step 3.2, step 9.1, discharge-contradiction] ∎

## Remarks

- The proof is written over the underlying real normed space in the complex case, so no separate complex Baire argument is needed.
