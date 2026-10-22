---
id: lem-choice-free-wall-chain-finiteness-from-explicit-domination
kind: lemma
title: Choice-free Wall chain finiteness from an explicit finite domination
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-chain-map
  - def-chain-homotopy
  - def-chain-homotopy-equivalence
  - def-projective-module
  - lem-finite-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Andrew Ranicki, The algebraic theory of finiteness obstruction, Math.
        Scand. 57 (1985), 105–126
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/finite.pdf
      locator: Section 3, Proposition 3.1, printed pp.118–121; all block and homotopy
        identities needed here are proved below with a fixed sign convention
    - title: Steve Ferry and Andrew Ranicki, A survey of Wall's finiteness obstruction
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/ferran.pdf
      locator: Sections 1–3; the distinction between finite domination, finite
        projective chains and finite CW type
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Appendix A, printed pp.525–529, especially A.8–A.11; topological
        context only
dependency_level: 0
---

## Statement

Work in ZF. Let $A$ be any associative unital ring and let $C$ be a chain complex of unital right $A$-modules with $C_n=0$ for $n<0$. Supply a chain complex $F$ with $F_n=0$ outside $0\le n\le m$, each $F_n$ supplied as a finite free right $A$-module, chain maps $f:C\to F$ and $g:F\to C$, and right $A$-linear maps $h_n:C_n\to C_{n+1}$ such that
$$1_C-gf=d_Ch+hd_C.$$
Then there is a chain complex $E$ of finitely generated projective right $A$-modules, zero outside $0\le n\le N$ for some finite $N$, together with explicitly constructed chain maps $a:C\to E$, $b:E\to C$ and chain homotopies
$$1_C-ba=dH+Hd,\qquad 1_E-ab=dL+Ld.$$
The modules of $E$ below its top degree can be taken finite free, and its top module is the image of an explicit idempotent on $\bigoplus_{j=0}^mF_j$.

Neither freeness nor projectivity nor finite generation of the modules of $C$ is required. Thus the result applies in particular to the nonnegative singular or cellular free chain complexes with specified bases. More generally it applies after reindexing whenever $C$ and $F$ have a common finite lower bound. It makes no assertion for inputs unbounded below and no assertion that $E$ is finite free or that any underlying space has finite CW type. No form of the Axiom of Choice is assumed.

## Facts & Assumptions

**Given:** The ring, nonnegative complexes and explicit domination data in the Statement. Maps are composed from right to left; $d=d_C$ and $\partial=d_F$. A composition containing a zero degree module is zero. A power $h^s$ denotes the specified successive degree-one maps, and $h^0=1$.

[F1] Chain maps commute with differentials. A degree-one homotopy has boundary $dH+Hd$; mutually inverse maps up to these boundaries are a chain homotopy equivalence. These conventions are [[def-chain-map]], [[def-chain-homotopy]] and [[def-chain-homotopy-equivalence]], applied to right module homomorphisms.

[F2] Projectivity means the lifting property for surjective module homomorphisms. The left-module convention of [[def-projective-module]] is applied to $A^{\mathrm{op}}$ for right modules. Only finite free modules and their explicit summands will be used; their lifting property is proved below.

[F3] A finite list of nonempty sets admits a simultaneous choice in ZF. [[lem-finite-choice]]

## Proof

1.1 Put $u=gf$ on $C$. Repeatedly substituting $dh=1-u-hd$ gives, for every integer $s\ge1$, $$dh^s=(-1)^sh^sd+\epsilon_s h^{s-1}-\sum_{\ell=0}^{s-1}(-1)^\ell h^\ell u h^{s-1-\ell},\qquad \epsilon_s=\begin{cases}1&s\text{ odd},\\0&s\text{ even}.\end{cases}$$ For $s=1$ this is the given equation. Multiplying the formula on the right by $h$ and substituting $dh$ in its first term proves the next case: the identity coefficient changes from $\epsilon_s$ to $\epsilon_s+(-1)^s=\epsilon_{s+1}$ and the last summand acquires index $s$. This is finite induction on a specified identity, with no choices. [given, algebra]

1.2 Define $D_n=\bigoplus_{j=0}^nF_j$ for $n\ge0$, and $D_n=0$ for $n<0$. Define maps $\delta_n:D_n\to D_{n-1}$ by their finite blocks, with column $j$, row $k$, where $0\le j\le n$ and $0\le k\le n-1$: $$ (\delta_n)_{kj}=\begin{cases} 0&j\ge k+2,\\ (-1)^{n+k+1}\partial_j&j=k+1,\\ 1_{F_j}-f_jg_j&j=k,\ n+k\text{ odd},\\ f_jg_j&j=k,\ n+k\text{ even},\\ (-1)^{n+k}f_kh^{k-j}g_j&j<k. \end{cases}$$ All blocks have the displayed source and target, regardless of noncommutativity of $A$. Also define $\alpha_n:C_n\to D_n$ to have only its final component $f_n$, define $\beta_n:D_n\to C_n$ by the row $(h^ng_0,h^{n-1}g_1,\ldots,g_n)$, and let $s_n:D_n\to D_{n+1}$ be inclusion into the first $n+1$ summands. These are specified finite formulas in every degree. We next verify that $D$ is a chain complex and that the named maps have all claimed properties; these are not assumed from a matrix citation. [given, construct]

2.1 The final column of $\delta_n$ has only its final block $+\partial_n$. Therefore $\delta_n\alpha_n=\alpha_{n-1}d_n$, using $\partial f=fd$. To check $\beta_{n-1}\delta_n=d_n\beta_n$, consider column $j$. If $j=n$, the assertion is $g_{n-1}\partial_n=d_ng_n$. Otherwise put $t=n-j\ge1$. The superdiagonal contribution is $(-1)^t h^tdg_j$ (zero if $j=0$); the diagonal contribution is $\epsilon_t h^{t-1}g_j-(-1)^{t-1}h^{t-1}ug_j$. Reindexing the lower contributions by $\ell=n-1-k$ gives $-\sum_{\ell=0}^{t-2}(-1)^\ell h^\ell u h^{t-1-\ell}g_j$. The total is exactly $dh^tg_j$ by step 1.1. Thus both intertwining identities hold, without yet assuming $\delta^2=0$. [step 1.1, step 1.2, given, algebra]

2.2 Directly in the blocks, $$\delta_{n+1}s_n+s_{n-1}\delta_n=1_{D_n}-\alpha_n\beta_n.$$ Indeed for rows $k<n$ the off-diagonal blocks cancel when $n$ is replaced by $n+1$, and the two diagonal blocks sum to $1$. In row $n$ only the first term is present: its blocks are $-f_nh^{n-j}g_j$ for $j<n$ and $1-f_ng_n$ for $j=n$. They are exactly the final row of $1-\alpha\beta$. For $n=0$ this is simply $\delta_1s_0=1-f_0g_0$. Also $\beta_n\alpha_n=g_nf_n$. [step 1.2, algebra]

3.1 We prove $\delta_{n-1}\delta_n=0$ by induction on $n$. It holds at $n=1$ since $D_{-1}=0$. On the first $n$ summands of $D_n$, identified with $s_{n-1}D_{n-1}$, step 2.2 and the two intertwining identities give $$\begin{aligned} \delta_{n-1}\delta_ns_{n-1} &=\delta_{n-1}(1-\alpha\beta-s_{n-2}\delta_{n-1})\\ &=(1-\alpha\beta)\delta_{n-1}-\delta_{n-1}s_{n-2}\delta_{n-1}\\ &=s_{n-3}\delta_{n-2}\delta_{n-1}=0. \end{aligned}$$ The final equality uses the induction hypothesis, and negative-index terms mean zero. On the remaining summand $F_n$, the two final-column observations give $\partial_{n-1}\partial_n=0$. Thus the composite vanishes on every summand. This proves $\delta^2=0$. Now step 2.1 says that $\alpha,\beta$ are chain maps, and step 2.2 together with $1-\beta\alpha=dh+hd$ gives a chain homotopy equivalence $C\simeq D$. [step 2.1, step 2.2, F1, induction, algebra]

4.1 Set $T=\bigoplus_{j=0}^mF_j$. For all $n\ge m$, $D_n$ is canonically $T$, because all subsequent summands are zero. For $n\ge m+1$, the square matrix $\delta_n:T\to T$ depends only on the parity of $n$. Write $p$ for its value when $n$ is even. The formulas show that its value when $n$ is odd is $1-p$: the off-diagonal blocks change sign and the diagonal blocks are complementary. Taking two consecutive such degrees in $\delta^2=0$ gives $p(1-p)=0=(1-p)p$, hence $p^2=p$. No assertion that the homotopy idempotent $fg$ itself is strictly idempotent has been made. [step 1.2, step 3.1, algebra]

5.1 Choose the explicit even integer $N=2(m+1)$, and let $q=p:T\to T$. Define $E_n=D_n$ for $0\le n<N$, $E_N=qT\subseteq T=D_N$, and $E_n=0$ otherwise. Restrict $\delta_N$ to $qT$ at the top, and keep $\delta_n$ below it. The square-zero identities remain valid by step 3.1. The maps $J:E\to D$ are the evident inclusions. Define $I:D\to E$ to be identity below $N$, $q$ in degree $N$ and zero above $N$. At degree $N$, $\delta_Nq=\delta_N$ because $1-q=\delta_{N+1}$ and $\delta_N\delta_{N+1}=0$. At degree $N+1$, $q\delta_{N+1}=q(1-q)=0$. These are the only boundary degrees in checking that $I$ is a chain map; $J$ is a chain map by restriction, and $IJ=1_E$. [step 3.1, step 4.1, construct, algebra]

6.1 Define $t_n:D_n\to D_{n+1}$ to be zero for $n<N$ and the canonical identity $T\to T$ for $n\ge N$. Then $$1_D-JI=\delta t+t\delta.$$ Below $N$ both sides are zero. In degree $N$ the right side is $\delta_{N+1}=1-q$, which is the left side. Above $N$ it is the sum of the two complementary matrices $p$ and $1-p$, hence identity, as is the left side. Thus $I,J$ give a specified chain homotopy equivalence between $D$ and the bounded complex $E$. [step 4.1, step 5.1, F1, construct, algebra]

6.2 The modules $E_n$ below $N$ are finite direct sums of the supplied finite free modules, so their concatenated bases are finite. The module $qT$ is generated by the finitely many vectors $q(e_i)$, where $(e_i)$ is that concatenated basis of $T$, and $T=qT\oplus(1-q)T$: write $x=qx+(1-q)x$, and apply $q$ to an element in the intersection to show it is zero. For completeness its projectivity is choice-free. Given a surjection $v:U\to V$ and a right-linear $w:qT\to V$, take, for each of the finitely many $e_i$, a lift in $U$ of $w(qe_i)$. Their simultaneous existence is [F3]. Extend this finite assignment right-linearly to a map $\widetilde w:T\to U$. Then $v\widetilde w=wq$, and restriction to $qT$ is the requested lift. The same proof with $q=1$ gives projectivity of the lower finite free modules. This verifies the actual lifting property, not the general claim that arbitrary free modules are projective in ZF. [step 5.1, F2, F3, algebra]

7.1 Set $a=I\alpha$, $b=\beta J$. These are chain maps and $$1_C-ba=d(h+\beta t\alpha)+(h+\beta t\alpha)d,$$ since $1_C-\beta JI\alpha=(1_C-\beta\alpha)+\beta(1_D-JI)\alpha$. Similarly, using $IJ=1_E$ and step 2.2, $$1_E-ab=\delta_E(IsJ)+(IsJ)\delta_E.$$ Indeed $I(1_D-\alpha\beta)J=1_E-I\alpha\beta J$. These are the explicit required homotopies $H=h+\beta t\alpha$ and $L=IsJ$. [step 2.2, step 3.1, step 5.1, step 6.1, F1, algebra]

8.1 Every degree of $D$, every matrix product used to define its maps, and each component of the homotopies uses a finite sum and finitely many compositions of supplied maps. The single family indexed by all nonnegative degrees is defined by these formulas; it is not obtained by independently selecting a lift or basis in each degree. The only lifts selected in the entire projectivity verification are a finite list for one supplied lifting problem. If the two input complexes vanish below a common integer $b$, reindex $C'_n=C_{n+b}$, $F'_n=F_{n+b}$ with the same differentials and domination equations, apply the construction, and reindex the result back. No infinite recursion of choices and no unbounded-below input is involved. The proof therefore establishes exactly the stated ZF conclusion for the required bounded-below setting. [step 1.2, step 5.1, step 6.2, step 7.1, F3] ∎

## Source notes

The explicit algebraic strictification follows Ranicki's displayed matrices and Proposition 3.1, with all signs fixed and all needed identities verified locally above. In the scanned printed p.119, the piecewise expression and the displayed even/odd matrices have inconsistent signs/parities; the formulas here follow the displayed matrices and the verified final-column chain-map and homotopy identities. No unverified transcription is a premise.

Hatcher A.8–A.11 explains why a compact-manifold retraction onto a finite polyhedron supplies finite domination and why domination must not be silently promoted to finite CW type. For an application to local chains one must actually supply the right-linear chain maps and homotopy, for example by composing a proved finite-simplicial/singular chain comparison with the actual topological retraction. This lemma does not itself provide that comparison, local-system transport, a manifold retraction, duality, a rank calculation, or a Blanchfield conclusion.
