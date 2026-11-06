---
id: lem-cft-boundary-fock-duality-completeness
kind: lemma
title: Complete boundary Fock submodules, quotients and screening chains
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-cft-feigin-fuchs-oscillator-data
  - lem-cft-feigin-fuchs-virasoro-screening
  - lem-cft-long-screening-string-lengths
  - lem-cft-fock-oscillator-duality
  - lem-cft-extremal-fock-cyclic-irreducibility
dependency_roles:
  def-cft-feigin-fuchs-oscillator-data: mathematical-premise
  lem-cft-feigin-fuchs-virasoro-screening: mathematical-premise
  lem-cft-long-screening-string-lengths: mathematical-premise
  lem-cft-fock-oscillator-duality: mathematical-premise
  lem-cft-extremal-fock-cyclic-irreducibility: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Adamović and Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: Theorems 1.1–1.2; chargewise decomposition reconstructed by oscillator duality
    - title: Adamović and Milas, Logarithmic intertwining operators and W(2,2p−1)-algebras
      url: https://arxiv.org/pdf/math/0702081v2
      locator: Section 4, Lemmas 4.1–4.3; screening-string conventions
    - title: Wolfram Boenkost, Vertex–Operatoren, Darstellungen der Virasoro–Algebra und konforme Quantenfeldtheorie
      url: https://arxiv.org/pdf/hep-th/9412231v1
      locator: Chapter 2 §§2.2.1–2.2.5, Verma factors used conditionally
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Fix integers $p\ge2$, $0\le i\le p-2$ and set
$d=p-1-i$, $\beta=i/(2p)$, $\delta=(2p-2-i)/(2p)$,
$c=1-6(p-1)^2/p$,
$$a_n=\frac{(2pn+d)^2-(p-1)^2}{4p},\qquad b_n=\frac{(2pn-d)^2-(p-1)^2}{4p}.$$
Let $L(c,h)$ denote the simple highest-weight Virasoro module of central
charge $c$ and highest weight $h$, and put
$B=\bigoplus_{k\in\mathbb Z}\mathcal F_{\beta+k}$,
$D=\bigoplus_{k\in\mathbb Z}\mathcal F_{\delta+k}$.
The Virasoro subspaces
$$S_B=\sum_{n\ge0}\sum_{j=0}^{2n}U(\mathrm{Vir})Q^je^{(\beta-n)\alpha},\qquad S_D=\sum_{n\ge1}\sum_{j=0}^{2n-1}U(\mathrm{Vir})Q^je^{(\delta-n)\alpha}$$
are actual direct sums of their displayed simple cyclic factors, and
$$S_B\cong\bigoplus_{n\ge0}(2n+1)L(c,a_n),\qquad B/S_B\cong\bigoplus_{n\ge1}(2n)L(c,b_n),$$
$$S_D\cong\bigoplus_{n\ge1}(2n)L(c,b_n),\qquad D/S_D\cong\bigoplus_{n\ge0}(2n+1)L(c,a_n).$$
All decompositions respect charge. The $b_n$ highest multiplicity space
in $B/S_B$ is one $Q$ chain of length $2n$, with charges
$\beta-n+1,\ldots,\beta+n$ and terminal class of $e^{(\beta+n)\alpha}$. The $a_n$ highest multiplicity space
in $D/S_D$ is one $Q$ chain of length $2n+1$, with charges
$\delta-n,\ldots,\delta+n$ and terminal class of $e^{(\delta+n)\alpha}$.

There are homogeneous lifts $w_B(j,n)$ of these quotient highest vectors,
for $n\ge1$, $0\le j\le2n-1$, of charge $\beta+n-j$ and weight $b_n$, satisfying
$Q^jw_B(j,n)=e^{(\beta+n)\alpha}$.
Similarly there are lifts $w_D(j,n)$, for $n\ge0$,
$0\le j\le2n$, of charge $\delta+n-j$ and weight $a_n$,
satisfying $Q^jw_D(j,n)=e^{(\delta+n)\alpha}$.
The socle generators and these cosingular lifts generate $B$ and $D$
as Virasoro modules. No assertion of triplet stability or triplet endpoint
simplicity is part of this statement.

## Statement references

[[def-cft-feigin-fuchs-oscillator-data]]

[[lem-cft-feigin-fuchs-virasoro-screening]]

[[lem-cft-long-screening-string-lengths]]

[[lem-cft-fock-oscillator-duality]]

[[lem-cft-extremal-fock-cyclic-irreducibility]]

[Adamović–Milas, Theorems 1.1–1.2](https://arxiv.org/pdf/0707.1857v2)

## Facts & Assumptions

**Given:** The parameters, oscillator spaces, subspaces and screening maps in the Statement.

[F1] [[lem-cft-feigin-fuchs-virasoro-screening]] proves the Virasoro action, highest-weight vacuum formula and commutation of $Q$ with Virasoro on all the integral-charge sectors used here.

[F2] [[lem-cft-extremal-fock-cyclic-irreducibility]] gives the actual simple extremal cyclic factors and their all-grade characters $(q^{a_n}-q^{b_{n+1}})R(q)$ and $(q^{b_n}-q^{a_n})R(q)$, where $R(q)=\prod_{m\ge1}(1-q^m)^{-1}$.

[F3] [[lem-cft-long-screening-string-lengths]] proves the exact nonzero powers and the vanishing next powers in the two boundary families.

[F4] [[lem-cft-fock-oscillator-duality]] proves the degreewise nondegenerate reflected-charge pairing, the Virasoro adjoint and the exact transpose of $Q$ between its appropriate charge spaces.

[F5] [[def-cft-feigin-fuchs-oscillator-data]] gives the monomial polynomial spaces, vacuum weight $h(t)=pt^2-(p-1)t$, and hence their partition characters by weighted monomial counting.

## Proof

For a Virasoro module $V=\bigoplus_{N\ge0}V[N]$ with finite-dimensional $L_0$-eigenspaces of weights $h+N$, define its restricted graded dual by $V^\vee=\bigoplus_{N\ge0}V[N]^*$. For $\varphi\in V[N]^*$, extended by zero on the other grades, set $(L_m\varphi)(v)=\varphi(L_{-m}v)$ and $(C\varphi)(v)=\varphi(Cv)$. The map $L_m\mapsto L_{-m}$, $C\mapsto C$ is the Virasoro anti-involution, so these formulas define a representation. This action sends $V[N]^*$ to $V[N-m]^*$, interpreted as zero for negative grades. If $V$ is simple, so is $V^\vee$: any submodule $W\subset V^\vee$ is graded by polynomial interpolation in $L_0$; if $W$ were nonzero and proper, its grade-wise annihilator in $V$ would be nonzero by finite-dimensional duality on a grade where $W[N]\ne V[N]^*$, proper on a grade where $W[N]\ne0$, and Virasoro-stable by the displayed contragredient action. This contradicts simplicity of $V$.

1.1 Write $B_k=\mathcal F_{\beta+k}$ and $D_k=\mathcal F_{\delta+k}$. For a fixed $B_k$, the allowed terms in $S_B$ have $n\ge|k|$ and are generated by $Q^{n+k}e^{(\beta-n)\alpha}$. For a fixed $D_k$, the allowed terms in $S_D$ have $n\ge\max(-k,k+1)$ and are generated by $Q^{n+k}e^{(\delta-n)\alpha}$. For fixed $n$, the B terms have charges $k=-n,-n+1,\ldots,n$, giving $2n+1$ factors; the D terms have $k=-n,-n+1,\ldots,n-1$, giving $2n$ factors. Their screening powers are nonzero by [F3]. By [F1], each map $Q^j$ commutes with the Virasoro action, and by [F2] its source cyclic module is simple; since $Q^j$ sends the vacuum to a nonzero vector by [F3], its kernel is zero. Its image is exactly the cyclic module generated by $Q^je^{(\beta-n)\alpha}$ or $Q^je^{(\delta-n)\alpha}$, so each displayed copy is simple. In a fixed charge, distinct $n$ have distinct highest weights $a_n$ (respectively $b_n$), so those factors are nonisomorphic; copies at different charges lie in different direct summands of the charge decomposition. A sum of pairwise nonisomorphic simple submodules in a fixed charge is direct: for a finite sum this follows by projecting a simple intersection to its direct summands; every vector belongs to a finite sum, so the infinite sum is direct. Counting the allowed charges gives multiplicities $2n+1$ and $2n$. [F1, F2, F3, algebra]

2.1 The pairing [F4] identifies each $B_k$ with the restricted graded dual of $D_{-k}$, because the reflected charge of $\beta+k$ is $\delta-k$. Every submodule of a restricted graded dual is graded: each vector has finite grade support, and polynomial interpolation in $L_0$ projects onto each grade. A restricted graded dual of a simple highest-weight module with finite-dimensional graded pieces is simple: a nonzero proper dual submodule has a nonzero proper gradewise annihilator in the original module, by finite-dimensional nondegenerate duality, contradicting simplicity. The functional on the original lowest grade is the dual top: the adjoint identity makes every positive mode annihilate it, and its $L_0$ weight is unchanged. The weight sets $\{a_n:n\ge0\}$ and $\{b_m:m\ge1\}$ are disjoint: equality would imply $p(m-n)=d$ or $m+n=0$, impossible for $1\le d<p$. A nonzero restricted pairing would define a Virasoro homomorphism from one simple factor to the restricted dual of the other. Such a homomorphism between simple modules is zero unless they are isomorphic, which is impossible for distinct highest weights. Thus every simple summand of $S_B\cap B_k$ is orthogonal to every simple summand of $S_D\cap D_{-k}$. [F4, step 1.1, algebra]

3.1 A monomial $\prod_m x_m^{k_m}e^{t\alpha}$ has oscillator degree $\sum_m m k_m$, and these monomials are in bijection with partitions of that degree. Thus [F5] gives $\operatorname{ch}\mathcal F_t=q^{h(t)}R(q)$, where $R(q)=\prod_{m\ge1}(1-q^m)^{-1}$. For $k\ge1$, both paired socles have indices $n\ge k$, and [F2] gives their combined character
$$\prod_{m\ge1}(1-q^m)^{-1}\sum_{n\ge k}(q^{a_n}-q^{b_{n+1}}+q^{b_n}-q^{a_n})=q^{b_k}\prod_{m\ge1}(1-q^m)^{-1}=\operatorname{ch}B_k.$$
For $k\le0$, the two ranges are $n\ge-k$ and $n\ge1-k$, respectively, so their character sum is $R(q)\sum_{n\ge-k}(q^{a_n}-q^{b_{n+1}})+R(q)\sum_{n\ge1-k}(q^{b_n}-q^{a_n})=q^{a_{-k}}R(q)=\operatorname{ch}B_k$. These are coefficientwise finite sums because $a_n,b_n$ grow quadratically. The orthogonality in step 2.1 gives $S_B\cap B_k\subseteq\operatorname{ann}_{B_k}(S_D\cap D_{-k})$. The character equality and finite-dimensional nondegenerate pairing in every grade give equality; interchanging $B,D$ gives the other annihilator equality. Thus
$$B_k/(S_B\cap B_k)\cong(S_D\cap D_{-k})^\vee,\qquad D_{-k}/(S_D\cap D_{-k})\cong(S_B\cap B_k)^\vee.$$
The restricted duals preserve the direct-sum decompositions because only finitely many highest weights occur in each fixed grade. This proves both quotient decompositions with the stated multiplicities. [F2, F4, F5, step 1.1, step 2.1, algebra]

4.1 Under transposition of $Q$ in [F4], each dual of a screening string in $S_D\cap D_{-k}$ becomes the reverse chain of highest vectors in $B/S_B$. For fixed $n\ge1$, these occur at charges $\beta+n-j$ for $0\le j\le2n-1$, so there are $2n$ entries; the terminal bare exponential $e^{(\beta+n)\alpha}$ has weight $b_n$ and cannot lie in $S_B$, whose summands in that charge begin at weights $a_m$ for $m\ge n$. Direct subtraction gives $a_{m+1}-a_m=2pm+d+p>0$ and $a_n-b_n=2nd>0$, so all these weights exceed $b_n$. Hence its quotient class is nonzero and is the terminal vector. Interchanging the two paired spaces gives the $2n+1$-entry chain in $D/S_D$, including $n=0$. [F2, F3, F4, step 3.1, algebra]

5.1 For each quotient highest vector, choose the dual functional on the corresponding simple summand of the opposite socle to take a nonzero value on the specified screening string vector, and zero on the other summands in that grade; lift it homogeneously through the annihilator quotient. This gives lifts $w_B(j,n)$ and $w_D(j,n)$ of the charges and weights in the Statement. Transposing $Q^j$ shows that $Q^jw_B(j,n)$ pairs nontrivially with $e^{(\delta-n)\alpha}$. It has charge $\beta+n$; degreewise nondegeneracy and its nonzero pairing with the grade-zero vector $e^{(\delta-n)\alpha}$ force it to have oscillator grade zero. Its weight is therefore the vacuum weight $b_n$ at that charge, so it lies in the one-dimensional line $\mathbb C e^{(\beta+n)\alpha}$. Rescale to obtain the stated equality. The same argument gives $Q^jw_D(j,n)=e^{(\delta+n)\alpha}$. Their classes generate each simple quotient summand; together with the socle they generate the whole Fock direct sums. [F2, F3, F4, step 3.1, step 4.1, algebra] ∎

## Remarks

The printed cosingular upper bound in Adamović–Milas, Theorem 1.1(i), is $2n+1$; the chargewise quotient here uses $0\le j\le2n-1$, i.e. upper exponent $2n-1$. This correction is forced by the explicit weights and the multiplicity $2n$ in Theorem 1.1(ii), and is verified by the dual charge count in steps 1.1 and 3.1.

