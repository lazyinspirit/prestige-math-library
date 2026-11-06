---
id: thm-cft-virasoro-kac-determinant
kind: theorem
title: Kac determinant for Virasoro Verma modules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-cft-virasoro-verma-module
  - lem-cft-virasoro-verma-pbw-basis
  - def-virasoro-algebra
  - def-cft-feigin-fuchs-oscillator-data
  - lem-cft-feigin-fuchs-virasoro-screening
  - lem-cft-fock-oscillator-duality
dependency_roles:
  def-cft-virasoro-verma-module: mathematical-premise
  lem-cft-virasoro-verma-pbw-basis: mathematical-premise
  def-virasoro-algebra: mathematical-premise
  def-cft-feigin-fuchs-oscillator-data: mathematical-premise
  lem-cft-feigin-fuchs-virasoro-screening: mathematical-premise
  lem-cft-fock-oscillator-duality: mathematical-premise
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras
      url: https://arxiv.org/pdf/1004.1287v2
      locator: "Chapter IV §4, printed pp. 70–73, determinant statement and normalization. The proof here uses explicit oscillator screenings and polynomial interpolation, rather than the source's GKO route."
    - title: Paul Mnev and Nicolai Reshetikhin, Lecture Notes on Conformal Field Theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: "Chapter 7 §7.2, printed pp. 244–246: determinant statement, degenerate modules, and low-level examples."
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§4.2, printed pp. 55–60: Gram matrices, low-level checks, and determinant statement; the section does not give a full determinant proof."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $G_N(c,h)$ be the Gram matrix of the normalized bilinear
contravariant form on the PBW basis of
grade $h+N$ in $M(c,h)$. Write $p(k)$ for the
number of partitions of $k$, with $p(0)=1$ and $p(k)=0$ for $k<0$.
For $b\in\mathbb C^\times$, set
$$
c=1-6(b-b^{-1})^2,\qquad h_{r,s}(b)=\frac{(rb-sb^{-1})^2-(b-b^{-1})^2}{4}.
$$
For every $N\ge0$,
$$
\det G_N(c,h)=\alpha_N \prod_{\substack{r,s\ge1\\rs\le N}} \bigl(h-h_{r,s}(b)\bigr)^{p(N-rs)}, \qquad \alpha_N\in\mathbb C^\times.
$$
The constant $\alpha_N$ is independent of $b,c,h$. Replacing $b$ by
$b^{-1}$ exchanges $h_{r,s}$ and $h_{s,r}$, so the product is
single-valued and is a polynomial identity in $c,h$. The case $N=0$
is the empty product and has determinant $1$.

## Statement references

[[def-cft-virasoro-verma-module]]

[[lem-cft-virasoro-verma-pbw-basis]]

## Facts & Assumptions

**Given:** The stated Virasoro convention, its algebraic Verma module, partition basis and normalized contravariant form. Write $P(k)$ for the partition number denoted $p(k)$ in the Statement; the separate letter $p$ below is a nonzero oscillator parameter. Put $D_N=\sum_{\lambda\vdash N}\ell(\lambda)$ and $z_\lambda=\prod_m m^{m_m(\lambda)}m_m(\lambda)!$.

[F1] The generic oscillator formulas in [[def-cft-feigin-fuchs-oscillator-data]] and their verification in [[lem-cft-feigin-fuchs-virasoro-screening]] give, for each $p\ne0$, a Fock Virasoro action of central charge $c(p)=13-6(p+p^{-1})$, vacuum weight $h_p(t)=pt^2-(p-1)t$, and the commuting residue $Q$ between successive integral-power sectors when $p\ge2$ is an integer.

[F2] [[lem-cft-fock-oscillator-duality]] gives the degreewise nondegenerate pairing of $\mathcal F_t$ and $\mathcal F_{t^*}$, $t^*=(p-1)/p-t$, with $L_n^*=L_{-n}$ and monomial pairing $\delta_{\lambda,\mu}(-2p)^{\ell(\lambda)}z_\lambda$.

[F3] [[def-cft-virasoro-verma-module]] and [[lem-cft-virasoro-verma-pbw-basis]] give uniqueness of the normalized contravariant form, its radical and the partition basis of dimension $P(N)$.

[F4] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]] fixes the bracket convention $[L_m,L_n]=(m-n)L_{m+n}+(m^3-m)\delta_{m+n,0}C/12$.

## Proof

1.1 The constant vector in $\mathcal F_t$ is highest weight for the Virasoro action of [F1]. Hence the balanced map $x\otimes v_{h_p(t)}\mapsto x e^{t\alpha}$ defines the Verma-to-Fock homomorphism. Let $A_N(p,t)$ be its degree-$N$ matrix, using the same ordering of partitions on the PBW and oscillator-monomial sides. The negative modes act by $L_{-m}=(t+(p-1)(m-1)/(2p))x_m+(4p)^{-1}\sum_{j=1}^{m-1}x_jx_{m-j}+\sum_{j\ge1}j x_{m+j}\partial_{x_j}$. Thus the column for $\lambda$ is polynomial in $t$ of degree at most $\ell(\lambda)$, with leading term $t^{\ell(\lambda)}x_\lambda$. Consequently $\det A_N$ is monic of degree $D_N$ in $t$, with coefficients in $\mathbb C[p,p^{-1}]$. The pairing pullback is normalized and contravariant, hence by [F3] its matrix is $G_N(c(p),h_p(t))=A_N(p,t)^{\mathsf T}H_N(p)A_N(p,t^*)$, where $H_N$ is diagonal with entries $(-2p)^{\ell(\lambda)}z_\lambda$. In particular invertibility of the two oscillator maps through a given level implies nondegeneracy of the Verma form through that level. [F1, F2, F3, F4, algebra]

2.1 We prove by induction on $N$ the stronger identity $\det A_N(p,t)=\prod_{r,s\ge1,\ rs\le N}(t-t_{r,s})^{P(N-rs)}$, where $t_{r,s}=(p-1-pr+s)/(2p)$, for all $p\ne0$. At $N=0$ the map is the identity. Assume this identity for all smaller levels. It suffices first to fix an integer $p>2N$ and prove the next identity for that $p$. [step 1.1, construct, base, IH]

3.1 For $r,s\ge1$ with $rs\le N$, set $u=(p-1-pr-s)/(2p)$ and $v=u+r$, so $v^*=t_{r,s}$ and $h_p(u)-h_p(v)=rs$. In composing two consecutive fields, commuting the annihilation exponential at $z_2$ through the creation exponential at $z_1$ contributes $\exp(-2p\sum_{m\ge1}(z_1/z_2)^m/m)=(1-z_1/z_2)^{2p}$. For the positive integer $p>2N$ this is a polynomial, and combining it with $z_2^{2p(t+1)}$ gives $z_2^{2pt}(z_2-z_1)^{2p}$. Induction on the number of screenings therefore gives $w=Q^r e^{u\alpha}=\operatorname {Res}_{z_1}\cdots\operatorname {Res}_{z_r}\Delta(z)^{2p}\prod_a z_a^{2pu}\exp(\sum_{m\ge1}x_m\sum_a z_a^m/m)e^{v\alpha}$, with $\Delta(z)=\prod_{a<b}(z_a-z_b)$. Each residue selects a finite homogeneous piece, and $2pu$ and all intermediate charge exponents are integers. The output degree is $rs$. Coefficients of the creation exponential in that degree span all symmetric degree-$rs$ polynomials in the $z_a$, because they are nonzero multiples of power-sum products and Newton's identities generate the symmetric polynomial ring. Apply a linear functional on oscillator degree $rs$ taking this exponential component to $(\prod_a z_a)^s$. Its value on $w$ is $\operatorname {CT}(\Delta(z)^{2p}\prod_a z_a^{-p(r-1)})$. Write $V(z)=\Delta(z)^p=\sum_\mu c_\mu z^\mu$. Reciprocal symmetry gives $V(z^{-1})=(-1)^{pr(r-1)/2}V(z)\prod_a z_a^{-p(r-1)}$, so the constant term equals $(-1)^{pr(r-1)/2}\sum_\mu c_\mu^2\ne0$, since the $c_\mu$ are real integers and $V\ne0$. Thus $w\ne0$ and, by screening commutation, it is singular. [F1, step 2.1, construct, algebra]

4.1 The source charges $u$ and $u^*=(p-1+pr+s)/(2p)$ avoid every root $t_{a,b}$ with $ab<N$. Indeed $u=t_{a,b}$ would require $p(a-r)=s+b$, impossible because a positive left side is at least $p>2N$ while $s+b\le2N$; if $a\le r$ its sign is already impossible. Likewise $u^*=t_{a,b}$ would require $p(r+a)=b-s$, impossible by the same bounds. The induction hypothesis therefore makes both source Fock maps invertible at all levels at most $N-rs<N$. By step 1.1 the source Verma form is nondegenerate in that range. The homomorphism $Q^r\circ A(p,u)$ sends the source top to $w\ne0$ and is injective through relative level $N-rs$: a nonzero homogeneous kernel vector of least degree would be singular, since every positive mode enters a lower kernel degree. A positive-level singular vector in a Verma module pairs to zero with every PBW word of the same level by transposing its nonempty negative-mode word; it lies in the radical, contradicting the established nondegeneracy. Thus the descendants of $w$ at target degree $N$ have dimension exactly $P(N-rs)$. [F1, F3, step 1.1, step 2.1, step 3.1, algebra, IH]

5.1 These descendants annihilate the image of $A_N(p,t_{r,s})$ under the nondegenerate pairing of $\mathcal F_{t_{r,s}}$ and $\mathcal F_v$. Indeed the submodule generated by $w$ has degrees at least $rs>0$, whereas transposing a degree-$N$ negative PBW word applies positive modes of total degree $N$ to a degree-$N$ vector in that submodule, landing in its zero degree-zero space. The corank of $A_N(p,t_{r,s})$ is therefore at least $P(N-rs)$. For a square polynomial matrix of corank at least $k$ at $t=t_0$, constant column operations place $k$ independent kernel vectors in columns which vanish at $t_0$. Those columns are divisible by $t-t_0$, so its determinant is divisible by $(t-t_0)^k$. This proves the required multiplicity for the root $t_{r,s}$. [F2, step 3.1, step 4.1, algebra]

6.1 At $p>2N$ all roots $t_{r,s}$, $rs\le N$, are distinct: equality implies $p(r-r')=s-s'$, and the right side has absolute value less than $N$ while a nonzero left side has absolute value at least $p$. Their multiplicities sum to $D_N$, since $P(N-rs)$ counts partitions with at least $s$ parts equal to $r$, and summing first over $s$ then over $r$ counts all partition lengths. Thus the product of all factors supplied by step 5.1 has the same degree and leading coefficient as the monic determinant in step 1.1, proving equality for this fixed integer $p>2N$. Each coefficient of the difference of the two sides is a Laurent polynomial in $p$ vanishing at infinitely many such integers. After multiplication by a power of $p$ it is a polynomial with infinitely many roots, hence zero. This proves the oscillator determinant identity for every $p\ne0$ and completes the induction, including at collided roots. [step 1.1, step 2.1, step 5.1, algebra]

7.1 Taking determinants in the pairing identity of step 1.1 and using step 6.1 gives the claimed Gram determinant. Explicitly, $\det H_N=(-2p)^{D_N}\prod_\lambda z_\lambda$, $t^*-t_{r,s}=-(t-t_{r,s}^*)$, and $p(t-t_{r,s})(t-t_{r,s}^*)=h_p(t)-((pr-s)^2-(p-1)^2)/(4p)$. The reflection sign cancels the sign in $\det H_N$, and the powers of $p$ cancel, leaving $\alpha_N=2^{D_N}\prod_\lambda z_\lambda$. For fixed $p\ne0$, the quadratic $h_p(t)$ ranges over all complex $h$, so the identity holds for every $h$. Put $p=b^2$ to obtain the statement. Conversely every $c$ has a nonzero solution of $c=13-6(p+p^{-1})$; swapping $p$ with $p^{-1}$ exchanges $r,s$ in the ordered product. Since the Gram entries are polynomials in $c,h$ by their commutator definition, this is the asserted polynomial identity at all parameters. [F3, step 1.1, step 6.1, algebra, discharge-induction: step 2.1] ∎

## Remarks

The proof establishes the stronger normalization $\alpha_N=2^{D_N}\prod_{\lambda\vdash N}z_\lambda$; in particular $\alpha_0=1$, $\alpha_1=2$ and $\alpha_2=32$. The proof uses finite polynomial residues, a sum of squares of integer coefficients, and polynomial interpolation. It requires no affine branching character, GKO theorem, analytic screening contour, Dyson evaluation or Virasoro irreducibility assumption.

In the triplet convention $H_{r,s}(p)=((r-ps)^2-(p-1)^2)/(4p)$, a screening with count $r$ and degree parameter $s$ produces $H_{s,r}$. The ordered determinant product is invariant under this index exchange. The determinant identity does not by itself classify maximal submodules at collided roots or prove extremal Fock irreducibility.
