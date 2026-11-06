---
id: lem-cft-boundary-virasoro-verma-chain
kind: lemma
title: Single-chain maximal submodules at boundary Virasoro central charges
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-cft-virasoro-verma-module
  - lem-cft-virasoro-verma-pbw-basis
  - thm-cft-virasoro-kac-determinant
dependency_roles:
  def-cft-virasoro-verma-module: mathematical-premise
  lem-cft-virasoro-verma-pbw-basis: mathematical-premise
  thm-cft-virasoro-kac-determinant: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Astashkevich, On the structure of Verma modules over Virasoro and Neveu–Schwarz algebras"
      url: "https://arxiv.org/pdf/hep-th/9511032v1"
      locator: "Theorem 3.1, Corollary 3.2, §§4–6, especially case III0-minus"
    - title: "Wolfram Boenkost, Vertex–Operatoren, Darstellungen der Virasoro–Algebra und konforme Quantenfeldtheorie"
      url: "https://arxiv.org/pdf/hep-th/9412231v1"
      locator: "Chapter 2 §§2.2.1–2.2.5, especially Satz 2.2.5 and its III0-minus case"
    - title: "Antony Wassermann, Kac–Moody and Virasoro Algebras"
      url: "https://arxiv.org/pdf/1004.1287v2"
      locator: "Chapter IV §4, printed pp. 71–73; determinant normalization and source proof route"
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Fix integers $p\ge2$ and $1\le d\le p-1$. Put
$$c=1-\frac{6(p-1)^2}{p},\qquad a_n=\frac{(2pn+d)^2-(p-1)^2}{4p}\ (n\ge0),\qquad b_n=\frac{(2pn-d)^2-(p-1)^2}{4p}\ (n\ge1).$$
The indices are $n\ge0$ for $a_n$ and $n\ge1$ for $b_n$. Let
$x_0<x_1<x_2<\cdots$ be any tail of the ordered sequence
$a_0<b_1<a_1<b_2<a_2<\cdots$.
In the Verma module $M(c,x_j)$, the maximal proper submodule is generated
by its unique normalized singular vector of weight $x_{j+1}$ and is
isomorphic to $M(c,x_{j+1})$. Therefore its simple highest-weight quotient has
$$\operatorname{ch}L(c,x_j)=\frac{q^{x_j}-q^{x_{j+1}}}{\prod_{m\ge1}(1-q^m)}.$$
Characters record $L_0$ weights and omit a common $q^{-c/24}$ factor. Order PBW partitions lexicographically by their nondecreasing part lists, with the empty list first; normalize a nonzero singular vector by making its first nonzero coefficient in that order equal to $1$.

## Statement references

[[def-cft-virasoro-verma-module]]

[[lem-cft-virasoro-verma-pbw-basis]]

[[thm-cft-virasoro-kac-determinant]]

[Astashkevich, Theorem 3.1 and Corollary 3.2](https://arxiv.org/pdf/hep-th/9511032v1)

[Boenkost, Chapter 2](https://arxiv.org/pdf/hep-th/9412231v1)

[Wassermann, Chapter IV §4](https://arxiv.org/pdf/1004.1287v2)

## Facts & Assumptions

**Given:** Integers $p\ge2$, $1\le d<p$, the weights in the Statement and the ordinary algebraic Verma modules. Throughout this proof use the single deformation parameter $q\ne0$ with
$$c(q)=13-6(q+q^{-1}),\qquad H_{r,s}(q)=\frac{(r-qs)^2-(q-1)^2}{4q}.$$
The fixed boundary point is $q=p$. All germs below are formal power series, with finite PBW coordinates in any fixed grade.

[F1] [[def-cft-virasoro-verma-module]] gives the normalized symmetric contravariant form, its polynomial Gram matrices and its radical as the unique maximal proper submodule.

[F2] [[lem-cft-virasoro-verma-pbw-basis]] gives the negative-mode partition basis, dimension $P(N)$ and $M(c,h)\cong U(\mathfrak n_-)$ as a module for the negative modes. We may use either order on the negative basis. For the normalization argument write a partition as $1\le\lambda_1\le\cdots\le\lambda_\ell$ and its PBW monomial as $L_{-\lambda_\ell}\cdots L_{-\lambda_1}$; compare the increasing lists lexicographically.

[F3] [[thm-cft-virasoro-kac-determinant]] gives, in this $q$ convention, the exact grade-$N$ determinant
$$\alpha_N\prod_{r,s\ge1,\,rs\le N}(h-H_{r,s}(q))^{P(N-rs)},\qquad \alpha_N\ne0.$$
Indeed its stated parameter $b$ can be set to $q^{-1/2}$ locally: $c(b)=c(q)$ and $h_{r,s}(b)=H_{r,s}(q)$. The product is invariant under the two square-root choices, so this interface is single-valued. Equivalently the identity follows from the determinant theorem's explicit $q$-polynomial formula and interchange of $r,s$. No independent boundary-submodule theorem is assumed.

## Proof

For this proof, a singular vector at positive level $N$ in $M(c,h)$ means a nonzero vector $w$ with $L_0w=(h+N)w$ and $L_mw=0$ for every $m>0$.

1.1 First establish uniqueness and regular normalization of singular vectors at any fixed positive level $N$. Write a putative singular vector in the ordered PBW basis of [F2]. For a partition $\lambda$ other than $(1^N)$, let its first non-one entry be $r>1$, and let $s$ be the number of preceding ones. In $L_{r-1}$ applied to the vector, inspect the coefficient indexed by the list obtained from $\lambda$ by removing one $r$ and inserting an additional $1$. The coefficient multiplying the unknown $\lambda$ coefficient is the positive integer counting its equal $r$ entries times $2r-1$. Every other contributing source partition precedes $\lambda$: commuting $L_{r-1}$ to the right either replaces an $r$ by a $1$ through $[L_{r-1},L_{-r}]=(2r-1)L_{-1}$, or, if an earlier source is not used, leaves the first differing part larger; restoring PBW order only merges negative parts and cannot reverse that first difference. Terms that reach $L_0$ or the central element have coefficients polynomial in $h,c$. Thus the vanishing of this positive-mode coefficient expresses the $\lambda$ coefficient polynomially in preceding coefficients, dividing only by a nonzero numerical integer. Induction on the finite partition order expresses every coefficient as a fixed polynomial in $c,h$ times the $(1^N)$ coefficient. In particular any singular vector whose $(1^N)$ coefficient is zero is zero, and any nonzero singular vector is uniquely normalized by setting that coefficient to $1$. For generic $q$ on $h=H_{r,s}(q)$, [F3] first vanishes at grade $rs$, since distinct positive pairs give distinct Laurent functions and there are only finitely many lower factors. The first radical grade contains a singular vector, normalized as above. Its coefficients equal the universal coefficient polynomials at those generic parameters. The positive-mode residuals are Laurent polynomials in $q$, vanish generically, and hence vanish identically. We obtain a nonzero normalized singular family on the entire root curve, including every intersection, without dividing by a parameter-dependent coefficient. [given, F1, F2, F3, algebra]

2.1 At $q=p$, solving $H_{r,s}(p)=a_n$ for positive integers gives exactly
$$(r,s)=(pj-d,2n+j)\ (j\ge1),\qquad (r,s)=(p(2n+j)+d,j)\ (j\ge1).$$
Their relative levels are $b_{n+j}-a_n$ and $a_{n+j}-a_n$. Solving $H_{r,s}(p)=b_n$ gives exactly
$$(r,s)=(pj+d,2n+j)\ (j\ge0),\qquad (r,s)=(p(2n+j)-d,j)\ (j\ge1),$$
with relative levels $a_{n+j}-b_n$ and $b_{n+j}-b_n$. These lists follow by solving $r-ps=\pm(2pn\pm d)$ and using $1\le d<p$. The positive gaps are $b_{n+1}-a_n=(p-d)(2n+1)$ and $a_n-b_n=2nd$. Hence every later tail node occurs exactly once as a root level. The families in step 1.1 give singular vectors at all these levels. A nonzero singular polynomial $P$ induces a Verma embedding by right multiplication by $P$ on $U(\mathfrak n_-)$. PBW's word-length filtration has polynomial associated graded algebra, a domain, so the map is injective. Let $M_k$ denote the embedded tail Verma module of weight $x_k$ in $M_0=M(c(p),x_0)$. Its composed highest vector agrees with the normalized direct-root vector: the product of two normalized singular polynomials has coefficient $1$ at the all-one partition, and step 1.1 gives uniqueness. The relevant root curves are pairwise transverse. Indeed
$$4H'_{r,s}(p)=(s^2-1)-(r^2-1)/p^2.$$
At fixed positive absolute Kac momentum $X$, write $r=ps+\epsilon X$, $\epsilon\in\{1,-1\}$. The root-dependent part of this derivative is $-2\epsilon sX/p$. Equal signs give equal slopes only for equal $s$, hence the same root; opposite signs would require $s+s'=0$, impossible. Finally $c'(p)=-6(1-p^{-2})\ne0$, so these distinct slopes give distinct tangent lines in the $(c,h)$ plane. [F1, F2, F3, step 1.1, algebra]

3.1 At each fixed grade identify Verma spaces by their PBW bases. For the formal one-parameter form $B(\eta)$ at $(c(p),x_0+\eta)$ define $J_k$ to be the set of constant values of lifts $f(\eta)$ with $B(\eta)f(\eta)$ divisible by $\eta^k$ as a dual vector. Then $J_0=M_0$, $J_1$ is its original radical, and contravariance makes each $J_k$ a submodule. The required finite-grade facts follow directly by diagonalizing the symmetric matrix over $\mathbb C\lbrack\lbrack\eta\rbrack\rbrack$ by congruence. Such a diagonalization uses a nonzero entry of minimum valuation as pivot; if a pivot is off the diagonal, a linear combination of its two coordinate vectors has diagonal entry of that same valuation, since $2$ is invertible. Eliminate that coordinate and repeat finitely many times. The diagonal entries have the form $\eta^{e_i}u_i(\eta)$ with $u_i(0)\ne0$. Thus $(J_k)_N$ has basis given by those diagonal coordinates with $e_i\ge k$, and
$$\sum_{k\ge1}\dim(J_k)_N=\operatorname{ord}_{\eta=0}\det B_N(\eta).$$
The coefficient of $\eta^k$ of the pairing on admissible lifts induces a symmetric form on $J_k/J_{k+1}$, nondegenerate because precisely coordinates with $e_i=k$ remain. Changing an admissible lift by one with zero constant term does not change this form: in diagonal coordinates every possible difference pairs to order greater than $k$. The form is contravariant because the mode operators are formal in $\eta$; their higher-order corrections contribute only above order $k$. We also need one two-variable fact. If two transverse curves carry radical germs with the same value $v$, then $v\in J_2$ for the $h$-line deformation. In local coordinates where the curves are $x=0$ and $y=0$, write $B=B_0+xB_x+yB_y+O((x,y)^2)$. The two radical germs imply $B_0v=0$ and $B_xv,B_yv\in\operatorname{im}B_0$. Solve $B_0v_x=-B_xv$ and $B_0v_y=-B_yv$. Then $B(v+xv_x+yv_y)=O((x,y)^2)$; restricting to the $h$-line gives a lift of order at least two. This fact requires only radical germs, not singular germs along both curves. All this reasoning takes place in finite matrices or finite Taylor jets at each grade. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Induct simultaneously over the relative grade $N$ for every tail module to prove $J_k=M_k$ through grade $N$, for all $k\ge1$. As part of the induction keep the following consequence: through that grade, the quotient by the first embedded Verma has nondegenerate induced contravariant form and therefore no positive-grade singular vector. Indeed $J_1=M_1$ through the grade means that this quotient form has zero radical there; a singular vector of positive grade pairs to zero against each same-grade negative PBW word by transposing it, so cannot survive. For the inductive step, let $G_k$ be generated by the levels below $N$ of $J_k$. The earlier-grade assertion identifies $G_k$, through grade $N$, with $M_k$ if $x_k-x_0<N$, and with zero otherwise. Each $G_k\subset J_k$. The determinant valuation in [F3] and step 2.1 gives
$$\sum_{k\ge1}\dim(J_k)_N=\sum_{j\ge1}P(N-(x_j-x_0)).$$
If $N$ is not a root level, the dimensions of the $G_k$ exhaust this sum, proving the assertion. At $N=x_\ell-x_0$, there is precisely one extra dimension, hence exactly one index $j$ where $J_j$ differs from $G_j$ at that grade. Nestedness forces $j\le\ell$. Suppose $2\le j<\ell$. Then $J_{j-1}=M_{j-1}$ through grade $N$, so the extra vector $v\in(J_j)_N$ lies in $M_{j-1}$ but not $M_j$. Every positive mode sends $v$ to a smaller grade of $J_j$, which agrees there with $M_j$. Thus its nonzero image in $M_{j-1}/M_j$ is singular, of relative grade $N-(x_{j-1}-x_0)<N$. The shifted-tail induction assertion says the quotient form is nondegenerate at this grade. Transposing every negative PBW word against this singular image makes all its pairings zero, a contradiction. This excludes every intermediate $j$. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 It remains to exclude $j=1$ for $\ell\ge2$. If $\ell=2$, let $v_2$ be the normalized singular vector at $x_2$. On its own root curve, step 1.1 supplies a normalized singular, hence radical, family specializing to $v_2$. On the first root curve use the normalized first singular family $v_1(q)$ and the fixed PBW polynomial $P$ which, at $q=p$, represents the first singular vector inside the embedded $M_1$ at weight $x_2$. The family $Pv_1(q)$ is radical along this whole first root curve: $v_1(q)$ is a positive-grade singular vector and so belongs to the radical of its Verma form, and that radical is a submodule by contravariance. We do not claim $Pv_1(q)$ remains singular away from $p$, nor need it to do so. At $q=p$ its all-one coefficient is $1$, it is singular, and uniqueness in step 1.1 identifies its value with $v_2$. Transversality and the final fact of step 3.1 therefore put $v_2\in J_2$. Since there is only one extra dimension at this grade, it must occur at $j=2$. If $\ell\ge3$ and $j=1$, then through grade $N$ the layer $J_{\ell-1}/J_\ell$ is exactly $M_{\ell-1}$: its lower-grade generated part equals that Verma module, while $J_\ell$ is zero through $N$ and its only possible extra dimension was assumed to occur in $J_1$. The layer form of step 3.1 is nondegenerate. But its nonzero singular vector at weight $x_\ell$ pairs to zero with every same-weight vector: each is a nonempty negative PBW word on the highest vector of $M_{\ell-1}$, and transposition kills the singular vector. This contradicts nondegeneracy. Thus $j=1$ is impossible. The only remaining index is $j=\ell$. Its new line is killed by every positive mode because $J_\ell$ is zero below $N$; uniqueness in step 1.1 identifies it with the line of the already embedded $M_\ell$. This completes the subspace identities $J_k=M_k$ through grade $N$, not just their dimension count. The induction begins trivially in grade zero and below each tail's first gap, and applies to every finite grade. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 Hence $J_1=M_1$ in every grade. By [F1], $J_1$ is exactly the maximal proper submodule of $M_0$; by step 2.1 the embedded $M_1$ is isomorphic to the ordinary Verma module of weight $x_1$. The same simultaneous argument applies to every tail, proving the stated maximal-submodule assertion and its normalized uniqueness. PBW gives the Verma characters $q^{x_0}\prod_{m\ge1}(1-q^m)^{-1}$ and $q^{x_1}\prod_{m\ge1}(1-q^m)^{-1}$; their difference is the claimed simple quotient character. The use of $q$ for the formal character variable in this last formula is independent of the deformation parameter, which has already been fixed to $p$. No nondegenerate contravariant module was asserted to be simple without proving its radical equals the first embedded Verma module. [F1, F2, step 2.1, step 4.1, step 5.1, algebra] ∎

## Remarks

The embedding direction is from each later Verma module into its predecessor.
