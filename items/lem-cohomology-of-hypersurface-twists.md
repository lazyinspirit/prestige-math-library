---
id: "lem-cohomology-of-hypersurface-twists"
kind: "lemma"
title: "Cohomology of twists on a smooth hypersurface"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 0
justified_by: []
aliases: []
deps:
  - "thm-cohomology-projective-space-twisting-sheaves"
  - "cor-h0-projective-space-o-d-homogeneous-polynomials"
  - "def-relative-projective-space-standard-charts"
  - "def-twisting-sheaf-proj"
  - "thm-closed-subschemes-projective-space-homogeneous-ideals"
  - "def-section-zero-scheme-invertible-sheaf"
  - "lem-zero-scheme-of-line-bundle-section"
  - "def-invertible-sheaf"
  - "lem-invertible-sheaf-dual-tensor-inverse"
  - "lem-closed-immersion-cohomology-pushforward"
  - "thm-long-exact-sequence-sheaf-cohomology"
  - "thm-jacobian-criterion-smooth-morphism"
  - "def-polynomial-ring-on-a-family-of-indeterminates"
  - "def-graded-ring-and-graded-module"
  - "def-internal-hom-qc-sheaves"
  - "def-quasi-coherent-module-scheme"
  - "def-axiom-of-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, complete chapter (Chapter 30)"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
      locator: "Section 30.8 (tag 01XS) and Lemma 8.1 (tag 01XT) with its statement and notation: H^q(P^n_R, O(d)) is (R[T_0,...,T_n])_d for q=0, d>=0; the Laurent-monomial module for q=n, d<0; and zero otherwise (printed pages 15-16, read 2026-10-05)"
    - title: "Robin Hartshorne, Lectures on Deformation Theory (Berkeley Math 274 draft, 2004/2005)"
      url: "http://math.berkeley.edu/~robin/math274root.pdf"
      locator: "Chapter 1 Theorem 1.1(b),(c) and its discussion (printed pages 1-3): Hilbert tangent H^0(N) and vanishing H^1(N). Read 2026-10-06."
---

## Statement

Assume the Axiom of Choice, inherited from the projective-space cohomology
suppliers ([[def-axiom-of-choice]]). Let $k$ be a field, $n\ge2$, let
$f\in S=k[x_0,\dots,x_n]$ be homogeneous of degree $d\ge1$
([[def-polynomial-ring-on-a-family-of-indeterminates]]), and let
$X=Z(f)\subseteq\mathbb P^n_k$ be the associated hypersurface; assume $X$ is
smooth over $k$ of pure dimension $n-1$ ([[thm-jacobian-criterion-smooth-morphism]]).
Write $\mathcal I=\mathcal I_X$ for its ideal sheaf and $\mathcal O_X(d)$ for
the restriction of the twisting sheaf ([[def-twisting-sheaf-proj]]). Then:

1. multiplication by $f$ gives a short exact sequence
$$0\longrightarrow\mathcal O_{\mathbb P^n}\longrightarrow\mathcal O_{\mathbb P^n}(d)\longrightarrow i_*\mathcal O_X(d)\longrightarrow0$$
of quasi-coherent sheaves ([[def-section-zero-scheme-invertible-sheaf]],
[[lem-zero-scheme-of-line-bundle-section]], [[def-quasi-coherent-module-scheme]]);
in particular $\mathcal I\cong\mathcal O_{\mathbb P^n}(-d)$ and
$\mathcal I/\mathcal I^2\cong\mathcal O_X(-d)$;
2. $H^0(X,\mathcal O_X(d))\cong(S/(f))_d$, of dimension
$\binom{n+d}{d}-1=\binom{n+d}{n}-1$ ([[def-graded-ring-and-graded-module]]);
3. $H^q(X,\mathcal O_X(d))=0$ for every $q>0$;
4. the normal sheaf of $X$ in $\mathbb P^n$ is
$\mathcal N_{X/\mathbb P^n}=\mathcal Hom_{\mathcal O_X}(\mathcal I/\mathcal I^2,\mathcal O_X)\cong\mathcal O_X(d)$
([[def-invertible-sheaf]], [[lem-invertible-sheaf-dual-tensor-inverse]],
[[def-internal-hom-qc-sheaves]]).

## Facts & Assumptions

**Given:** a field $k$, an integer $n\ge2$, a homogeneous form $f\in S=k[x_0,\dots,x_n]$ of degree $d\ge1$ with $X=Z(f)\subseteq\mathbb P^n_k$ smooth over $k$ of pure dimension $n-1$, the closed immersion $i:X\hookrightarrow\mathbb P^n_k$ and its ideal sheaf $\mathcal I=\mathcal I_X$; the Axiom of Choice is assumed as declared in the Statement.

[F1] For every $t\in\mathbb Z$, $H^q(\mathbb P^n_k,\mathcal O(t))=0$ unless $q=0$ or $q=n$; $H^0(\mathbb P^n_k,\mathcal O(t))\cong S_t$ for $t\ge0$ and $H^0(\mathbb P^n_k,\mathcal O(t))=0$ for $t<0$; and $H^n(\mathbb P^n_k,\mathcal O(t))=0$ for $t>-n-1$. In particular $H^q(\mathbb P^n_k,\mathcal O)=0$ for all $q\ge1$, and $H^q(\mathbb P^n_k,\mathcal O(d))=0$ for all $q\ge1$ because $d\ge1>-n-1$. ([[thm-cohomology-projective-space-twisting-sheaves]], [[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[def-relative-projective-space-standard-charts]], [[def-graded-ring-and-graded-module]])

[F2] The zero scheme $Z(f)$ of the global section $f\in\Gamma(\mathbb P^n,\mathcal O(d))$ has ideal sheaf $\mathcal I=\operatorname{Im}(c_f)$, where $c_f:\mathcal O(-d)\to\mathcal O$ is multiplication by $f$, and $\mathcal O_{\mathbb P^n}/\mathcal I\cong i_*\mathcal O_X$; on an affine chart trivializing $\mathcal O(d)$ the local equation is the dehomogenization of $f$. ([[def-section-zero-scheme-invertible-sheaf]], [[lem-zero-scheme-of-line-bundle-section]], [[thm-closed-subschemes-projective-space-homogeneous-ideals]], [[def-twisting-sheaf-proj]])

[F3] For every quasi-coherent $\mathcal O_X$-module $\mathcal F$ and every $q\ge0$, $H^q(X,\mathcal F)\cong H^q(\mathbb P^n_k,i_*\mathcal F)$. ([[lem-closed-immersion-cohomology-pushforward]])

[F4] A short exact sequence of sheaves of abelian groups on a topological space induces a long exact sequence in cohomology. ([[thm-long-exact-sequence-sheaf-cohomology]])

[F5] Twisting by the invertible sheaf $\mathcal O(t)$ is an exact functor on $\mathcal O_{\mathbb P^n}$-modules, $\mathcal O(-d)\otimes_{\mathcal O}\mathcal O(d)\cong\mathcal O$ and $\mathcal Hom_{\mathcal O}(\mathcal O(-d),\mathcal O)\cong\mathcal O(d)$; for an invertible $\mathcal O_X$-module $L$ one has $L^\vee\otimes_{\mathcal O_X}L\cong\mathcal O_X$ and $\mathcal Hom_{\mathcal O_X}(L,\mathcal O_X)\cong L^\vee$. ([[def-invertible-sheaf]], [[lem-invertible-sheaf-dual-tensor-inverse]], [[def-internal-hom-qc-sheaves]], [[def-twisting-sheaf-proj]])

[F6] $S=\bigoplus_{m\ge0}S_m$ has $S_0=k$ and is a domain: the leading monomials in a lexicographic order multiply with nonzero product coefficient. The degree-$d$ monomials form a basis; their exponent tuples sum to $d$ and are counted by placing $n$ separators among $n+d$ positions, giving $\dim_kS_d=\binom{n+d}{n}$. If $g\ne0$ is homogeneous and $gf\in S_d$, then $\deg g=0$, so $g\in k$; the zero multiplier is also in $k$. ([[def-graded-ring-and-graded-module]], [[def-polynomial-ring-on-a-family-of-indeterminates]])

## Proof

**Proof technique:** identify the ideal of the hypersurface with the image of the section $f$ of $\mathcal O(d)$, twist the resulting section sequence, and read off the cohomology from the projective-space computation.

1.1 Since $X=Z(f)$ has pure dimension $n-1<n$, the form $f$ is nonzero; fix an affine chart $D_+(x_i)$. In the chart ring the local equation of the section $f$ is the dehomogenization $f/x_i^{d}$, regarded as an element of the localization $S_{x_i}$; localization $S\hookrightarrow S_{x_i}$ is injective because $S$ is a domain, and $f/x_i^d\ne0$ because $f\ne0$, so the local equation is nonzero, hence a nonzerodivisor in the polynomial chart ring. By [F2] the ideal sheaf $\mathcal I$ equals $\operatorname{Im}(c_f)$ for the contraction $c_f:\mathcal O(-d)\to\mathcal O$ that is multiplication by $f$ on local trivializations, and $\mathcal O/\mathcal I\cong i_*\mathcal O_X$; thus $0\to\mathcal O_{\mathbb P^n}(-d)\xrightarrow{\cdot f}\mathcal O_{\mathbb P^n}\to i_*\mathcal O_X\to0$ is a short exact sequence of quasi-coherent sheaves, with $\mathcal I\cong\mathcal O(-d)$ because $c_f$ is injective. [F2, given]

2.1 Twist the sequence of step 1.1 by the invertible sheaf $\mathcal O(d)$ and use exactness of twisting ([F5]); this gives the sequence of claim (1), $0\to\mathcal O_{\mathbb P^n}\to\mathcal O_{\mathbb P^n}(d)\to i_*\mathcal O_X(d)\to0$. Because the ideal $\mathcal I\cong\mathcal O(-d)$ is invertible, its square $\mathcal I^2$ is as well and the quotient $\mathcal I/\mathcal I^2$ is the pullback $i^*\mathcal I\cong i^*\mathcal O(-d)=\mathcal O_X(-d)$; this proves the remaining assertions of (1). [F2, F5, step 1.1, algebra]

3.1 By [F1], $H^q(\mathbb P^n,\mathcal O)=0$ and $H^q(\mathbb P^n,\mathcal O(d))=0$ for every $q\ge1$. Apply [F4] to the sequence of step 2.1 and use the identification $H^q(X,\mathcal O_X(d))\cong H^q(\mathbb P^n,i_*\mathcal O_X(d))$ of [F3]: for every $q\ge1$ the group $H^q(X,\mathcal O_X(d))$ is sandwiched between $H^q(\mathbb P^n,\mathcal O(d))=0$ and $H^{q+1}(\mathbb P^n,\mathcal O)=0$, hence vanishes. This proves (3). [F1, F3, F4, step 2.1]

4.1 Still in the long exact sequence of step 3.1, the start reads $0\to H^0(\mathbb P^n,\mathcal O)\to H^0(\mathbb P^n,\mathcal O(d))\to H^0(X,\mathcal O_X(d))\to H^1(\mathbb P^n,\mathcal O)=0$, so $H^0(X,\mathcal O_X(d))$ is the cokernel of the multiplication map $k=S_0\to S_d$, $1\mapsto f$, namely $S_d/k\cdot f$. By [F6], a homogeneous multiple of $f$ lying in degree $d$ has multiplier of degree $0$, hence lies in $k\cdot f$; therefore $k\cdot f=(f)\cap S_d$ and $H^0(X,\mathcal O_X(d))\cong S_d/k\cdot f\cong(S/(f))_d$, of dimension $\dim_kS_d-1=\binom{n+d}{n}-1$ by [F6]. This proves (2). [F1, F3, F4, F6, step 2.1, algebra]

5.1 By step 2.1 the conormal sheaf $\mathcal I/\mathcal I^2\cong\mathcal O_X(-d)$ is invertible. Taking its dual and using [F5], $\mathcal N_{X/\mathbb P^n}=\mathcal Hom_{\mathcal O_X}(\mathcal I/\mathcal I^2,\mathcal O_X)\cong\mathcal Hom_{\mathcal O_X}(\mathcal O_X(-d),\mathcal O_X)\cong\mathcal O_X(d)$, which proves (4). Together with steps 1.1, 2.1, 3.1 and 4.1 this proves all four claims; the Axiom of Choice is inherited from the cited cohomology, zero-scheme and closed-immersion suppliers. [F5, step 2.1, algebra] ∎ 