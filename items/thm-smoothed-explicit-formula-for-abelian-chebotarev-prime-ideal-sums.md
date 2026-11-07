---
id: thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums
kind: theorem
title: "Smoothed explicit formula for an abelian Chebotarev prime-ideal sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-abelian-chebotarev-weighted-prime-ideal-sum
  - lem-ray-class-hecke-l-function-finite-euler-correction
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-finite-order-hecke-l-euler-product
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-abelian-artin-l-series-equals-hecke-l-series
  - thm-number-field-ray-class-field-artin-isomorphism
  - lem-character-orthogonality-for-finite-abelian-groups
  - lem-fourier-transform-of-a-gaussian
  - thm-riemann-fubini-on-product-rectangles
  - thm-residue-theorem-null-homologous-cycle
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: contour
verification:
  precheck: pass
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the ray-class field and
  primitive Hecke-L interpretation. Finite character orthogonality, Mellin
  inversion for the stated test, and the contour calculation introduce no
  further choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. C. Lagarias and A. M. Odlyzko, Effective Versions of the Chebotarev Density Theorem, §§6–7"
      url: "https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf"
      locator: "Printed pp.432–439: character expansion, Hecke L-functions, prime-power sums, and contour residues."
    - title: "Sourabhashis Das, MSc thesis, §3.5.1 Lemma 3.14 and §3.5.2 Proposition 3.16"
      url: "https://opus.uleth.ca/server/api/core/bitstreams/e36dbba6-c698-43cb-a9-aa5b32083c282b/content"
      locator: "Printed pp.89–96: smooth prime-ideal weights, the trivial pole contribution, primitive zeros, and contour remainders."
    - title: "Ben Green, The Prime Number Theorem, Chapter 7, Theorem 7.1 and §7.2"
      url: "https://people.maths.ox.ac.uk/greenbj/papers/primenumbers.pdf"
      locator: "Full 77-page lecture notes; Chapter 7 proves smooth Mellin inversion, logarithmic differentiation, and explicit-formula contour signs."
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §§8 and 10"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
      locator: "Printed pp.493–503 and 525–526: primitive Hecke continuation and abelian Artin–Hecke comparison; local primitive continuation has a locally authored unit-domain reconstruction awaiting independent review."
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $K$ be a number field,
and let $\mathfrak m=(\mathfrak m_0,S_\infty)$ be a modulus, where
$\mathfrak m_0$ is a nonzero integral ideal and $S_\infty$ is a finite set
of real embeddings of $K$. Let
$G=\operatorname{Cl}_{\mathfrak m}(K)$ be its finite abelian ray class group,
and let $C\in G$. Let $X>0$ and
$W\in C_c^\infty((0,\infty),\mathbb C)$, the space of smooth complex-valued
functions with compact support contained in $(0,\infty)$. Let
$\widetilde W(s)=\int_0^\infty W(u)u^{s-1}\,du$. All logarithms are natural;
for $x>0$, define $x^s=e^{s\log x}$. For each
$\chi\in\widehat G=\operatorname{Hom}(G,\mathbb C^\times)$, let
$L_{\mathfrak m}(s,\chi)$ be its ray-class Hecke L-function. Let
$\mathfrak f_\chi=(\mathfrak f_{\chi,0},S_{\chi,\infty})$ be its conductor,
let $\chi^*$ be the primitive character inducing $\chi$, and define
$$E_\chi(s)=\prod_{\substack{\mathfrak p\mid\mathfrak m_0\\ \mathfrak p\nmid\mathfrak f_{\chi,0}}} \left(1-\chi^*(\mathfrak p)(N\mathfrak p)^{-s}\right).$$
Assume the primitive analytic input: every primitive finite-order Hecke
L-function continues meromorphically to $\mathbb C$, is entire for nontrivial
character, and for the trivial character has exactly a simple pole at $s=1$
and no other pole; for each primitive character $\psi$, its completed
function, with the conductor and Gamma factors defined for ray-class Hecke
characters, satisfies
$$\Lambda(s,\psi)=\varepsilon_\psi\Lambda(1-s,\overline\psi),\qquad |\varepsilon_\psi|=1,$$
where $\overline\psi$ is obtained by complex-conjugating each character
value. This input remains an explicit hypothesis of this conditional identity.
A full local unit-domain Mellin proof has now been authored in the primitive
Hecke supplier and is awaiting independent review; no review acceptance is
inferred from its presence.

Let $c>1$, $\alpha<0$, and $T>0$. Suppose the boundary of
$$R_{\alpha,c,T}=\{s\in\mathbb C:\alpha\le\operatorname{Re}(s)\le c, |\operatorname{Im}(s)|\le T\}$$
contains no zero or pole of any $L_{\mathfrak m}(s,\chi)$. For each $\chi$,
let $\mathcal Z_\chi(\alpha,T)$ be the multiset of all zeros of
$L_{\mathfrak m}(s,\chi)$ in the open rectangle, counted with their
function-theoretic multiplicities $m_\chi(\rho)$. This includes the actual
zeros of the primitive L-function at poles of its archimedean gamma factors
(the trivial zeros), the finite-factor zeros of $E_\chi$, and coincidences
with their orders added. Put
$$G_{\chi,X,W}(s)=-\frac{L'_{\mathfrak m}}{L_{\mathfrak m}}(s,\chi) X^s\widetilde W(s).$$
Define the oriented remainder integrals
$$U_{\chi;c,T}=\frac1{2\pi i}\left( \int_{c-i\infty}^{c-iT}G_{\chi,X,W}(s)\,ds+ \int_{c+iT}^{c+i\infty}G_{\chi,X,W}(s)\,ds\right),$$
$$V_{\chi;\alpha,T}=\frac1{2\pi i}\int_{\alpha-iT}^{\alpha+iT} G_{\chi,X,W}(s)\,ds,$$
$$H_{\chi;T}=\frac1{2\pi i}\left( \int_{c+iT}^{\alpha+iT}G_{\chi,X,W}(s)\,ds+ \int_{\alpha-iT}^{c-iT}G_{\chi,X,W}(s)\,ds\right).$$
The rectangle is positively oriented: its right edge runs upward, its top edge
leftward, its left edge downward, and its bottom edge rightward. The diagram
records these directions; the proof obtains signs from the displayed
integrals and the residue theorem, not from the diagram.

```tikz
\begin{tikzpicture}[>=stealth]
  \draw (0,0) rectangle (4,3);
  \draw[->] (4,0.8) -- (4,1.6);
  \draw[->] (2.8,3) -- (2.0,3);
  \draw[->] (0,2.2) -- (0,1.4);
  \draw[->] (1.0,0) -- (1.8,0);
  \node[below left] at (0,0) {$\alpha-iT$};
  \node[below right] at (4,0) {$c-iT$};
  \node[above left] at (0,3) {$\alpha+iT$};
  \node[above right] at (4,3) {$c+iT$};
  \node[left] at (0,1.5) {$\operatorname{Re}s=\alpha$};
  \node[right] at (4,1.5) {$\operatorname{Re}s=c$};
  \node[above] at (2,3) {$\operatorname{Im}s=T$};
  \node[below] at (2,0) {$\operatorname{Im}s=-T$};
\end{tikzpicture}
```

For every ray class $C$, the smoothed prime-power sum satisfies the
finite-rectangle identity
$$\begin{aligned} \Psi_C(X;W) ={}&\frac{X\widetilde W(1)}{|G|} -\frac1{|G|}\sum_{\chi\in\widehat G}\overline{\chi(C)} \sum_{\rho\in\mathcal Z_\chi(\alpha,T)} m_\chi(\rho)X^\rho\widetilde W(\rho)\\ &+\frac1{|G|}\sum_{\chi\in\widehat G}\overline{\chi(C)} \bigl(U_{\chi;c,T}+V_{\chi;\alpha,T}-H_{\chi;T}\bigr). \end{aligned}$$
No limiting choice of heights or assertion that the remainder integrals vanish
is part of this identity.

## Statement references

[[def-abelian-chebotarev-weighted-prime-ideal-sum]]

[[lem-ray-class-hecke-l-function-finite-euler-correction]]

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[thm-finite-order-hecke-l-euler-product]]

[[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[[thm-abelian-artin-l-series-equals-hecke-l-series]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[[lem-character-orthogonality-for-finite-abelian-groups]]

[[lem-fourier-transform-of-a-gaussian]]

[[thm-riemann-fubini-on-product-rectangles]]

[[thm-residue-theorem-null-homologous-cycle]]

## Facts & Assumptions

**Given:** AC, Countable Choice, and DC; a number field $K$, modulus $\mathfrak m$,
ray class group $G$, class $C\in G$, $X>0$, a smooth compactly supported
$W$, and admissible $c,\alpha,T$ as in the Statement.

[F1] The prime-power sum, its character-twisted form, and their finite-group
character expansion are as defined in the preceding A-page definition.
[[def-abelian-chebotarev-weighted-prime-ideal-sum]]

[F2] For $\operatorname{Re}(s)>1$, $L_{\mathfrak m}(s,\chi)$ has an
absolutely convergent Euler product over prime ideals not dividing
$\mathfrak m_0$.
[[thm-finite-order-hecke-l-euler-product]]

[F3] The ray-class L-function factors as the primitive Hecke L-function times
the finite Euler correction; the correction is entire, and zero orders add.
[[lem-ray-class-hecke-l-function-finite-euler-correction]]

[A1] The primitive analytic input in the Statement is required for the
contour shift, with nontrivial primitive functions entire and the trivial
primitive function having its sole simple pole at $s=1$. The carrier is
now supplied by a locally authored unit-domain Mellin reconstruction awaiting
independent review. This item retains the explicit primitive analytic
hypothesis in its Statement; neither its presence nor this conditional
contour deduction asserts independent acceptance of that reconstruction.
[[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[A2] AC, Countable Choice, and DC are assumed by the ray-class Artin and
primitive analytic interfaces. The Gaussian inversion, Euler-product
differentiation, finite orthogonality, and contour calculation use no further
choice.
[[def-axiom-of-choice]]
[[def-countable-choice]]
[[def-dependent-choice]]

[F4] Character orthogonality in the finite abelian group gives the indicator
of the ray class $C$ after averaging $\overline{\chi(C)}\chi(g)$ over
$\widehat G$.
[[lem-character-orthogonality-for-finite-abelian-groups]]

[F5] At primes away from the modulus, the ray-class Artin character value
equals the Hecke character value on the prime ideal; the only difference in
the full Artin and Hecke Euler products is a finite ramified-prime correction.
[[thm-abelian-artin-l-series-equals-hecke-l-series]]

[F6] The ray-class Artin map identifies the ray class group with the finite
abelian Galois group, with the stated arithmetic Frobenius convention. Its
current proof is conditional on escalated global existence and reciprocity
suppliers.
[[thm-number-field-ray-class-field-artin-isomorphism]]

[F7] For $t>0$ and Fourier transform
$\widehat f(\xi)=\int_{\mathbb R}f(x)e^{-2\pi i x\xi}\,dx$,
$\widehat{e^{-\pi t x^2}}(\xi)=t^{-1/2}e^{-\pi\xi^2/t}$.
[[lem-fourier-transform-of-a-gaussian]]

[F8] On a product of nondegenerate closed rectangles, Riemann-integrable
functions satisfy the iterated-integral equality; this applies to the real
and imaginary parts of the truncated Gaussian integrals below.
[[thm-riemann-fubini-on-product-rectangles]]

[F9] The contour integral of a meromorphic function over an admissible
positively oriented cycle equals $2\pi i$ times the sum of enclosed residues,
with each residue weighted by its winding number.
[[thm-residue-theorem-null-homologous-cycle]]

[F10] For primitive $\chi$, the completed Hecke L-function includes the
conductor factor and real/complex Gamma factors specified by the number-field
signature and the finite residue and real-sign components of $\chi$.
[[def-finite-order-ray-class-hecke-character-and-l-function]]

[F11] A finite-order ray-class character takes roots of unity on ideals prime
to the modulus, so its prime-ideal values have modulus $1$; the extended
character is zero on excluded ideals.
[[def-finite-order-ray-class-hecke-character-and-l-function]]

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Put $F(t)=e^{ct}W(e^t)$ for $t\in\mathbb R$. Then $F$ is smooth and compactly supported, and with the Fourier convention in [F7], $\widetilde W(c+2\pi i\xi)=\widehat F(-\xi)$. For $\varepsilon>0$, insert $e^{-\varepsilon\xi^2}$ in the inverse integral. Truncating to a bounded rectangle, [F8] permits reversing the $t$ and $\xi$ integrations; absolute integrability of $F(t)e^{-\varepsilon\xi^2}$ lets the rectangle expand to $\mathbb R^2$. The Gaussian transform [F7] gives $$\int_{\mathbb R}\widehat F(-\xi)e^{-2\pi i\xi y}e^{-\varepsilon\xi^2}\,d\xi =\int_{\mathbb R}F(t)\sqrt{\frac\pi\varepsilon} e^{-\pi^2(t-y)^2/\varepsilon}\,dt.$$ The kernel on the right has integral $1$ and its mass outside every fixed neighborhood of $y$ tends to $0$, so uniform continuity of $F$ makes the right side tend to $F(y)$. Repeated integration by parts makes $\widehat F$ rapidly decreasing, so dominated convergence removes the Gaussian factor on the left. Therefore $F(y)=\int_{\mathbb R}\widetilde W(c+2\pi i\xi) e^{-2\pi i\xi y}\,d\xi$. With $y=\log z$ this is the Mellin inversion $$W(z)=\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty} \widetilde W(s)z^{-s}\,ds\qquad(z>0).$$ This proves the required Mellin inversion. Because $W$ has compact support in a closed interval $[a,b]\subset(0,\infty)$, differentiating its finite-interval Mellin integral under the integral sign shows that $\widetilde W$ is entire. Repeated integration by parts gives, for every integer $N\ge1$ and $|\operatorname{Im}(s)|\ge1$, $$\widetilde W(s)=\frac{(-1)^N}{s(s+1)\cdots(s+N-1)} \int_a^b W^{(N)}(u)u^{s+N-1}\,du.$$ The boundary terms vanish because $W$ is smooth and zero off $[a,b]$. The numerator is uniformly bounded when $\operatorname{Re}(s)$ stays in a fixed compact interval, while the denominator grows like $|\operatorname{Im}(s)|^N$. Thus $\widetilde W$ has rapid decay on every fixed vertical strip. [F7, F8, given, algebra]

1.2 On any compact subset of $\operatorname{Re}(s)>1$, choose $1<\sigma_0$ below its minimum real part. The Hecke Euler product in [F2] has logarithm $$\sum_{\mathfrak p\nmid\mathfrak m_0}\sum_{k\ge1} \frac{\chi([\mathfrak p])^k}{k(N\mathfrak p)^{ks}},$$ which converges locally uniformly for $\operatorname{Re}(s)>1$. Indeed, $|\chi([\mathfrak p])|=1$ by [F11] and $N\mathfrak p\ge2$, so its absolute sum is bounded by the absolutely convergent Hecke ideal series in [F2]. Its termwise derivative also converges locally uniformly: for $y\ge2$, $\log(y)y^{-k(\sigma_1-\sigma_0)}\le \sup_{u\ge2}\log(u)u^{-(\sigma_1-\sigma_0)}<\infty$, where $\sigma_1$ is the minimum real part on the compact subset, and the resulting sum $\sum_{\mathfrak p,k}(N\mathfrak p)^{-k\sigma_0}$ is bounded by the absolutely convergent Hecke ideal series in [F2], since the ideals $\mathfrak p^k$ are distinct members of that series. The exponential of the logarithmic series is the Euler product, so it is nonzero. Differentiating the locally uniform logarithmic series gives $$-\frac{L'_{\mathfrak m}}{L_{\mathfrak m}}(s,\chi)= \sum_{\mathfrak p\nmid\mathfrak m_0}\sum_{k\ge1} \chi([\mathfrak p])^k(\log N\mathfrak p)(N\mathfrak p)^{-ks} \quad(\operatorname{Re}(s)>1).$$ The same bound shows that this series is absolutely and uniformly convergent on $\operatorname{Re}(s)=c$. [F2, F11, given, algebra]

2.1 The compact support of $W$ makes $\Psi_\chi(X;W)$ a finite sum by [F1]. Apply step 1.1 to every prime power, including those with zero weight. The sum of absolute vertical integrals is bounded by $X^c\int_{\mathbb R}|\widetilde W(c+it)|\,dt$ times $\sum_{\mathfrak p,k}(\log N\mathfrak p)(N\mathfrak p)^{-kc}$, which is finite by the rapid decay in step 1.1 and the majorant in step 1.2. Hence absolute convergence permits exchanging the full prime-power sum and the integral; the zero-weight terms sum to zero by Mellin inversion. Step 1.2 then gives $$\Psi_\chi(X;W)=\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty} -\frac{L'_{\mathfrak m}}{L_{\mathfrak m}}(s,\chi) X^s\widetilde W(s)\,ds.$$ This identifies the character sum with the right-line integral. [F1, F2, step 1.1, step 1.2, algebra]

3.1 By [A1] and [F3], the integrand in step 2.1 is meromorphic on a neighborhood of the rectangle. The nonzero Euler product in [F2] and step 1.2 show that $L_{\mathfrak m}(s,\chi)$ is not identically zero, so its logarithmic derivative is meromorphic. The boundary hypothesis excludes poles on the edges. Applying [F9] to the positively oriented boundary gives the sum of the residues at the enclosed pole at $s=1$, when $\chi$ is trivial, and at the zeros in $\mathcal Z_\chi(\alpha,T)$. The residue theorem gives a finite sum because the rectangle is compact and the poles are isolated. [A1, A2, F2, F3, F9, step 1.2, step 2.1, given]

4.1 If $\chi$ is trivial, [A1] and [F3] show that $L_{\mathfrak m}(s,\chi)$ has a simple pole at $s=1$ with nonzero leading coefficient; hence $-L'_{\mathfrak m}/L_{\mathfrak m}$ has residue $+1$ there, and the residue of $G_{\chi,X,W}$ is $X\widetilde W(1)$. At a zero $\rho$ of multiplicity $m_\chi(\rho)$, the logarithmic derivative has residue $-m_\chi(\rho)$, so the residue of $G_{\chi,X,W}$ is $-m_\chi(\rho)X^\rho\widetilde W(\rho)$. By [F3], coincidences between primitive and finite-correction zeros already have the summed multiplicity used here. The positive rectangle integral consists of the right middle edge, the top and bottom integrals $H_{\chi;T}$, and the downward left edge $-V_{\chi;\alpha,T}$. The full upward integral on the right is its middle edge plus the tails $U_{\chi;c,T}$. Rearranging the residue identity therefore yields the individual-character formula with remainder $U_{\chi;c,T}+V_{\chi;\alpha,T}-H_{\chi;T}$. [A1, A2, F3, F9, step 3.1, algebra]

5.1 The sum in [F1] is defined directly by ray classes, so no Frobenius or class-field identification is needed for this identity. Average the individual-character formula from step 4.1 against $\overline{\chi(C)}/|G|$. The orthogonality identity [F4] recovers $\Psi_C(X;W)$ from step 2.1; exactly the trivial character contributes the pole term, with coefficient $\overline{1(C)}/|G|=1/|G|$ for every $C$, including nonidentity classes. The zero and remainder terms average as displayed in the Statement. [A2, F1, F4, step 2.1, step 4.1, algebra] ∎

