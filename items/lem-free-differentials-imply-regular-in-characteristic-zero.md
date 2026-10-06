---
id: lem-free-differentials-imply-regular-in-characteristic-zero
kind: lemma
title: "Free differentials imply regularity in characteristic zero"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: ["lem-differentials-generating-a-free-direct-summand-are-nonzerodivisors", "lem-ag-separable-residue-cotangent-sequence", "thm-nakayama-lemma", "thm-quotient-and-lifting-regularity-across-a-regular-element", "thm-conormal-exact-sequence-algebra", "def-embedding-dimension-and-regular-local-ring", "cor-minimal-generators-over-a-local-ring", "cor-noetherian-modules-are-hopfian", "def-finitely-generated-field-extension", "thm-ag-separating-transcendence-basis-perfect-field", "def-perfect-field", "def-kahler-differentials-algebra", "def-local-ring", "def-axiom-of-choice", "lem-differentials-localization", "cor-finite-type-algebra-over-noetherian-ring-is-noetherian", "lem-field-is-noetherian", "thm-noetherian-ring-quotients-and-localisations", "cor-fields-of-characteristic-zero-and-finite-fields-are-perfect", "thm-dimension-at-most-embedding-dimension", "thm-krull-intersection-theorem", "def-ag-separating-transcendence-basis"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Commutative Algebra chapter"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
      locator: "Lemma 10.140.7 [00TX] with Lemmas 10.140.4 [00TU] and 10.140.6 [00TW]: over a field of characteristic 0, smoothness, freeness of the differentials and regularity of the local ring are equivalent at a prime."
    - title: "The Stacks Project, Varieties chapter"
      url: "https://stacks.math.columbia.edu/download/varieties.pdf"
      locator: "Lemma 25.1 [04QN], printed p. 45: a scheme locally of finite type over a field of characteristic 0 with locally free differentials is smooth."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field of characteristic $0$, let $A$ be a finite-type $k$-algebra and let $\mathfrak q\in\operatorname{Spec}A$. If $\Omega_{A/k,\mathfrak q}$ is a free $A_{\mathfrak q}$-module, then $A_{\mathfrak q}$ is a regular local ring. No bound on the rank and no smoothness of $A$ is assumed. (The statement fails in characteristic $p>0$: $A=k[t]/(t^p)$ at the origin has free rank-one differentials but a nonregular local ring.)

## Facts & Assumptions

**Given:** A field $k$ of characteristic $0$, a finite-type $k$-algebra $A$, a prime $\mathfrak q\in\operatorname{Spec}A$, the local ring $R=A_{\mathfrak q}$ with maximal ideal $\mathfrak m=\mathfrak qA_{\mathfrak q}$, and the hypothesis that $\Omega_{A/k,\mathfrak q}$ is a free $R$-module.

[F1] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] and [[lem-field-is-noetherian]]: the field $k$ is Noetherian, and a finite-type algebra over a Noetherian ring is Noetherian; hence $A$ is Noetherian.

[F2] [[thm-noetherian-ring-quotients-and-localisations]]: every localization of a Noetherian ring is Noetherian; hence $R$ is a Noetherian local ring.

[F3] [[def-finitely-generated-field-extension]]: if $A$ is generated as a $k$-algebra by $x_1,\dots,x_n$, then the residue field $\kappa=R/\mathfrak m=\operatorname{Frac}(A/\mathfrak q)$ is generated as a field over $k$ by the images of the $x_i$, so $\kappa/k$ is a finitely generated field extension.

[F4] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]] and [[def-perfect-field]]: a field of characteristic $0$ is perfect.

[F5] [[thm-ag-separating-transcendence-basis-perfect-field]]: a finitely generated field extension of a perfect field has a separating transcendence basis ([[def-ag-separating-transcendence-basis]]), hence is separably generated.

[F6] [[lem-ag-separable-residue-cotangent-sequence]]: for a Noetherian local $k$-algebra $R$ whose residue field is finitely generated and separably generated over $k$, the sequence $0\to\mathfrak m/\mathfrak m^2\to\Omega_{R/k}\otimes_R\kappa\to\Omega_{\kappa/k}\to0$ is exact, the first map sending the class of $x$ to $\mathrm dx\otimes1$.

[F7] [[lem-differentials-localization]]: Kähler differentials commute with localization: for a multiplicative subset $U$ of a $k$-algebra $B$, $U^{-1}\Omega_{B/k}\cong\Omega_{U^{-1}B/k}$ compatibly with the universal derivations.

[F8] [[thm-dimension-at-most-embedding-dimension]] and [[def-embedding-dimension-and-regular-local-ring]]: a nonzero Noetherian local ring satisfies $\dim R\le\operatorname{edim}R<\infty$ and is regular when $\dim R=\operatorname{edim}R$.

[F9] [[lem-differentials-generating-a-free-direct-summand-are-nonzerodivisors]]: if $S$ is a nonzero $\mathbb Q$-algebra, $\theta:\Omega_{S/R'}\to S$ is $S$-linear and $\theta(\mathrm df)=1$, then $f$ is not nilpotent, and $f$ is a nonzerodivisor when $S$ is a Noetherian local ring.

[F10] [[thm-conormal-exact-sequence-algebra]]: for a ring map $A'\to P$, an ideal $I\subseteq P$ and $B=P/I$, the sequence $I/I^2\to B\otimes_P\Omega_{P/A'}\to\Omega_{B/A'}\to0$ is exact, the first map sending the class of $i$ to $1\otimes\mathrm di$.

[F11] [[thm-quotient-and-lifting-regularity-across-a-regular-element]]: if $(S,\mathfrak n)$ is nonzero Noetherian local and $x\in\mathfrak n$ is a nonzerodivisor, then $\dim(S/(x))=\dim S-1$, and $S$ is regular whenever $S/(x)$ is regular.

[F12] [[thm-krull-intersection-theorem]]: in a Noetherian ring $S$, for an ideal $I\subseteq J(S)$ and a finite module $M$ one has $\bigcap_nI^nM=0$.

## Proof

1.1 Setup. By [F1] and [F2], $R$ is a Noetherian local ring with residue field $\kappa$, and by [F3] the extension $\kappa/k$ is finitely generated. Since $k$ has characteristic $0$, it is perfect by [F4], so by [F5] $\kappa/k$ is separably generated; [F6] therefore gives the exact sequence $0\to\mathfrak m/\mathfrak m^2\xrightarrow{\ \delta\ }\Omega_{R/k}\otimes_R\kappa\to\Omega_{\kappa/k}\to0$ with $\delta([x])=\mathrm dx\otimes1$. Moreover $\dim R<\infty$ by [F8]. The identification $\Omega_{A/k,\mathfrak q}\cong\Omega_{R/k}$ of [F7] makes the hypothesis say that $\Omega:=\Omega_{R/k}$ is a free $R$-module; It is finitely generated: differentials of a finite list of $k$-algebra generators of $A$ generate $\Omega_{A/k}$ by the polynomial product rule, and localization preserves finite generation by [F7]. Thus its free rank is finite; fix a basis $e_1,\dots,e_r$ of $\Omega$. [F1, F2, F3, F4, F5, F6, F7, F8, given]

1.2 Induction claim. We prove by induction on the natural number $d=\dim R$ the assertion: for every finite-type $k$-algebra $A'$ and prime $\mathfrak q'$ with $A'_{\mathfrak q'}$ Noetherian local of dimension $d$ and $\Omega_{A'/k,\mathfrak q'}$ free over $A'_{\mathfrak q'}$, the ring $A'_{\mathfrak q'}$ is regular. The induction is over the two mutually exclusive cases for $\mathfrak m/\mathfrak m^2$ analysed below; in the nonvanishing case a nonzerodivisor $f\in\mathfrak m$ will be produced whose existence forces $d\ge1$ and permits descent to dimension $d-1$, and in the vanishing case regularity is obtained directly, so the case $d=0$ is covered as well. [F1, F2, F6, F7, F8, given]

2.1 The case $\mathfrak m/\mathfrak m^2=0$. Then $\mathfrak m=\mathfrak m^2$, and since $\mathfrak m\subseteq J(R)$ and $R$ is Noetherian with $M=R$ finite, the Krull intersection theorem [F12] gives $\mathfrak m\subseteq\bigcap_n\mathfrak m^n=0$. Hence $\mathfrak m=0$, so $R=\kappa$ is a field of dimension $0$ and embedding dimension $0$; by [F8] it is regular. [F8, F12, step 1.1, algebra]

2.2 The case $\mathfrak m/\mathfrak m^2\neq0$. Choose $f\in\mathfrak m$ with nonzero class in $\mathfrak m/\mathfrak m^2$; then $\delta([f])=\mathrm df\otimes1\neq0$ in $\Omega/\mathfrak m\Omega$ by the injectivity of $\delta$ in step 1.1. Writing $\mathrm df=\sum_ia_ie_i$ in the basis of step 1.1, some coefficient $a_i$ lies outside $\mathfrak m$ and is therefore a unit of $R$; replacing $e_i$ by $\mathrm df$ and keeping the other $e_j$ gives a second basis $\mathrm df,e_j\ (j\neq i)$ of $\Omega$, since $e_i=a_i^{-1}\bigl(\mathrm df-\sum_{j\neq i}a_je_j\bigr)$ and the $r$ elements are linearly independent by the unit coefficient. Define the $R$-linear map $\theta:\Omega\to R$ by $\theta(\mathrm df)=1$ and $\theta(e_j)=0$ for $j\neq i$; the ring $R$ is a $\mathbb Q$-algebra because $k$ has characteristic $0$, so [F9] applies and shows that $f$ is a nonzerodivisor in $R$. Since $f\in\mathfrak m$, [F11] then gives $\dim(R/fR)=\dim R-1$, so this case forces $\dim R\ge1$. [F6, F9, F11, step 1.1, algebra]

3.1 The quotient $R/fR$. Since $f$ is a nonzerodivisor in $\mathfrak m$, [F11] gives $\dim(R/fR)=\dim R-1$, and $R/fR\neq0$. By [F10] applied to the ring map $k\to R$, the ideal $I=(f)$ and $B=R/fR$, the sequence $(f)/(f^2)\to(R/fR)\otimes_R\Omega\to\Omega_{(R/fR)/k}\to0$ is exact, the first map sending the class of $f$ to $1\otimes\mathrm df$; the first term is generated by the class of $f$ and its image is the cyclic submodule $(R/fR)(\mathrm df\otimes1)$. Under the basis $\mathrm df,e_j$ of step 2.2, the free module $(R/fR)\otimes_R\Omega$ splits as $(R/fR)(\mathrm df\otimes1)\oplus\bigoplus_{j\neq i}(R/fR)(e_j\otimes1)$, so the cokernel is free of rank $r-1$; that is, $\Omega_{(R/fR)/k}\cong(R/fR)^{r-1}$ and $(R/fR,\mathfrak m/fR)$ is a Noetherian local ring of dimension $d-1$ whose module of differentials at its maximal ideal is free. [F10, F11, step 2.2, algebra]

4.1 Regularity is lifted and the induction closes. Write $f=a/s$ with $a\in\mathfrak q$ and $s\in A\smallsetminus\mathfrak q$, so $fR=aR$. Put $A'=A/aA$ and let $\mathfrak q'\in\operatorname{Spec}A'$ be the prime with $A'_{\mathfrak q'}\cong R/fR$; by [F7] the localization of $\Omega_{A'/k}$ at $\mathfrak q'$ is $\Omega_{(R/fR)/k}$, which step 3.1 shows is free of rank $r-1$. By step 1.2, whose induction hypothesis applies in dimension $d-1$, the ring $R/fR$ is regular; then [F11] applied to the nonzerodivisor $f\in\mathfrak m$ makes $R$ regular. Steps 2.1 and 2.2 exhaust the two possibilities for $\mathfrak m/\mathfrak m^2$, and the induction runs down from the finite value $\dim R$ of step 1.1, so every case is covered by steps 2.1, 3.1 and 4.1. [F7, F11, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎

## Remarks

The characteristic-zero hypothesis enters exactly twice: in the perfectness of $k$, which supplies the separating transcendence basis used by [F6], and in the unit-invertibility step in [F9] on the $\mathbb Q$-algebra $R$. The statement fails for $A=k[t]/(t^p)$ in characteristic $p$, where $\Omega_{A/k}$ is free of rank one on $\mathrm dt$ while the local ring at the origin is nonregular.
