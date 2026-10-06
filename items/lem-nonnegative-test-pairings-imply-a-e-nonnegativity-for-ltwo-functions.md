---
id: "lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions"
kind: "lemma"
title: "A function with nonnegative test pairings is nonnegative a.e."
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "def-countable-choice"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-mollifier-family-generated-by-a-unit-mass-smooth-bump"
  - "def-positive-and-negative-parts-of-a-function"
  - "def-test-function-space-d-of-an-open-set"
  - "lem-complex-translation-and-approximate-identity-interfaces"
  - "lem-null-sets-in-rn-closed-under-subsets-and-countable-unions"
  - "lem-relative-compact-closed-sets-have-a-positive-distance-gap"
  - "lem-schwartz-cutoffs-from-the-standard-smooth-step"
  - "lem-test-function-cutoffs-and-euclidean-localization"
  - "prop-mollifier-families-are-l-one-approximate-identities"
  - "prop-order-and-scalar-rules-for-the-nonnegative-integral"
  - "thm-heine-borel-rn"
  - "thm-holder-inequality-for-integrals"
  - "thm-nonnegative-integral-zero-iff-zero-almost-everywhere"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (the weak formulation of the constrained problem is tested against nonnegative test functions; the sign transfer used here is the standard mollification argument)"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $\Omega\subseteq\mathbb R^n$ be open and let $\zeta\in L^2(\Omega;\mathbb R)$ satisfy
$$\int_\Omega\zeta\varphi\,dx\ge0\qquad\text{for every }\varphi\in C_c^\infty(\Omega)\text{ with }\varphi\ge0 .$$
Then $\zeta\ge0$ almost everywhere on $\Omega$. Moreover, if $O\subseteq\Omega$ is open and $\int_\Omega\zeta\varphi\,dx=0$ for every $\varphi\in C_c^\infty(O)$, then $\zeta=0$ almost everywhere on $O$.

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb R^n$, a real $L^2$ class $\zeta$ on $\Omega$, the nonnegative-pairing hypothesis, and an open set $O\subseteq\Omega$ for the second claim.

[A1] [[def-countable-choice]]: Countable Choice selects one element from each member of a natural-number-indexed family of nonempty sets.

[F1] [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]: there is a nonnegative unit-mass bump $\rho\in C_c^\infty(\mathbb R^n)$, obtained by normalising the explicit nonnegative cutoff that equals $1$ on $|x|\le1$ and vanishes for $|x|\ge2$, and the rescalings $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$ satisfy $\rho_\varepsilon\ge0$, $\int\rho_\varepsilon=1$ and $\operatorname{supp}\rho_\varepsilon\subseteq\overline B_{2\varepsilon}(0)$.

[F2] [[lem-complex-translation-and-approximate-identity-interfaces]]: for real $g\in L^2(\Omega)$ with a representative vanishing outside a compact set $S\subseteq\mathbb R^n$ and for $0<\varepsilon$ small, the class $\rho_\varepsilon*g$ has a smooth representative $\varphi_\varepsilon$ with $\operatorname{supp}\varphi_\varepsilon\subseteq\overline{S+\operatorname{supp}\rho_\varepsilon}$, and $\rho_\varepsilon*g\to g$ in $L^2(\mathbb R^n)$ as $\varepsilon\downarrow0$; the assertions are choice-dependent only through the approximate-identity interface.

[F3] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone; in particular, the integral of a nonnegative measurable function is nonnegative.

[F4] [[thm-holder-inequality-for-integrals]]: for measurable real functions, $\int|fg|\le\|f\|_2\|g\|_2$ whenever $f,g\in L^2$.

[F5] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere.

[F6] [[lem-relative-compact-closed-sets-have-a-positive-distance-gap]]: a nonempty compact set and a disjoint nonempty closed set in a normed space have positive distance.

[F7] [[lem-test-function-cutoffs-and-euclidean-localization]]: for compact $K\subseteq O'\subseteq\mathbb R^n$ with $O'$ open there is $\chi\in C_c^\infty(O')$ with $0\le\chi\le1$ and $\chi=1$ on a neighbourhood of $K$; this construction is choice-free.

[F8] [[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]: every subset of a null set is null, and under Countable Choice every countable union of null sets is null.

[F9] [[thm-heine-borel-rn]]: a subset of $\mathbb R^n$ that is closed and bounded is compact.

[F10] [[def-positive-and-negative-parts-of-a-function]]: $\zeta=\zeta^+-\zeta^-$ with $\zeta^+,\zeta^-\ge0$ and $\zeta^+\zeta^-=0$ pointwise; hence $\zeta\ge0$ a.e. exactly when $\zeta^-=0$ a.e.

[F11] [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-test-function-space-d-of-an-open-set]]: elements of $L^2(\Omega)$ are a.e. classes of measurable functions, while elements of $C_c^\infty(\Omega)$ are actual smooth compactly supported functions, so the pairing $\varphi\mapsto\int_\Omega\zeta\varphi$ depends only on the class of $\zeta$ and on the function $\varphi$; for an open $O\subseteq\Omega$ the restriction of the class $\zeta$ is a class in $L^2(O)$ with $\int_O|\zeta|^2\le\int_\Omega|\zeta|^2$ by monotonicity of the nonnegative integral, and $\int_O\zeta\varphi=\int_\Omega\zeta\varphi$ for every $\varphi\in C_c^\infty(O)$.

## Proof

**Proof technique:** direct.

**Given:** An open set $\Omega\subseteq\mathbb R^n$, a real class $\zeta\in L^2(\Omega)$ with $\int_\Omega\zeta\varphi\ge0$ for every nonnegative $\varphi\in C_c^\infty(\Omega)$, and an open subset $O\subseteq\Omega$.

1.1 (Local vanishing, uniformly in the open set and the class) Let $\omega\subseteq\mathbb R^n$ be open, let $z\in L^2(\omega)$ satisfy $\int_\omega z\varphi\ge0$ for every nonnegative $\varphi\in C_c^\infty(\omega)$, let $O'\subseteq\omega$ be open, and let $\eta\in C_c^\infty(O')$ with $\eta\ge0$; we claim $\int_\omega(z^-)^2\eta=0$. If $\eta=0$ this is trivial, so assume $\eta\ne0$. Choose a real representative $f$ of the class $z$ and set $g:=z^-\eta$, the class of the measurable function $f^-\eta$; since $\eta$ is bounded with compact support and $f^-\le|f|$, this class lies in $L^2(\omega)$ and has a representative vanishing outside the compact set $S:=\operatorname{supp}\eta\subseteq O'$ [F10, F11]. If $O'=\mathbb R^n$, choose any $\varepsilon>0$; otherwise [F6] applies to $S$ and the nonempty closed set $\mathbb R^n\setminus O'$, giving $d:=\operatorname{dist}(S,\mathbb R^n\setminus O')>0$, and choose $0<\varepsilon<d/2$. Let $\varphi_\varepsilon$ be the smooth representative of $\rho_\varepsilon*g$ from [F2]. It is compactly supported; when $O'\ne\mathbb R^n$, its support lies in $\overline{S+\operatorname{supp}\rho_\varepsilon}\subseteq O'$ because $\operatorname{supp}\rho_\varepsilon\subseteq\overline B_{2\varepsilon}(0)$ and $2\varepsilon<d$ [F1]. Since $\rho_\varepsilon\ge0$ and $f^-\eta\ge0$, monotonicity of the integral gives $\varphi_\varepsilon\ge0$ throughout [F3], so $\varphi_\varepsilon\in C_c^\infty(\omega)$ is a nonnegative test function and the hypothesis yields $\int_\omega z\varphi_\varepsilon\ge0$; on the other hand $\bigl|\int_\omega z(\varphi_\varepsilon-g)\bigr|\le\|\varphi_\varepsilon-g\|_2\|z\|_2\to0$ as $\varepsilon\downarrow0$ by [F2] and [F4], so $\int_\omega zg\ge0$. Finally $zg=zz^-\eta=-z^+z^-\eta-(z^-)^2\eta=-(z^-)^2\eta$ because $z^+z^-=0$ pointwise [F10], so $\int_\omega(z^-)^2\eta\le0$; as the integrand is nonnegative this forces $\int_\omega(z^-)^2\eta=0$. The argument uses only the pairing hypothesis on the open set $\omega$. [given, F1, F2, F3, F4, F6, F10, F11, algebra]

2.1 (From local test functions to a.e. vanishing) Let $\omega$ and $z$ be as in step 1.1. Let $O'\subseteq\omega$ be open and let $K\subseteq O'$ be compact; by [F7] there is $\chi\in C_c^\infty(O')$ with $0\le\chi\le1$ and $\chi=1$ on a neighbourhood $N$ of $K$, and step 1.1 with $\eta=\chi$ gives $\int_\omega(z^-)^2\chi=0$; as this integrand is nonnegative and measurable, [F5] gives $(z^-)^2\chi=0$ a.e. on $\omega$, hence $(z^-)^2=0$ a.e. on $K$. Now for arbitrary open $O'\subseteq\omega$ for $j\in\mathbb N$ take $K_j:=\{x:|x|\le j+1\}$ if $O'=\mathbb R^n$ and $K_j:=\{x\in O':|x|\le j+1\text{ and }\operatorname{dist}(x,\mathbb R^n\setminus O')\ge1/(j+1)\}$ otherwise; each $K_j$ is closed, bounded and contained in $O'$, hence compact by [F9], and the $K_j$ cover $O'$ (a point $x\in O'$ has a ball $B(x,r)\subseteq O'$, so $x\in K_j$ for every $j+1\ge\max\{|x|,1/r\}$). Since $(z^-)^2$ vanishes a.e. on each $K_j$, it vanishes a.e. on the union $O'$ by [F8]. Taking $O'=\omega$, $(z^-)^2=0$ a.e. on $\omega$, so $z^-=0$ a.e. on $\omega$ and $z\ge0$ a.e. on $\omega$ by [F10]. [step 1.1, F5, F7, F8, F9, F10]

3.1 (First assertion) Apply step 2.1 with $(\omega,z)=(\Omega,\zeta)$: the nonnegative-pairing hypothesis holds by assumption, so $(\zeta^-)^2=0$ a.e. on $\Omega$, hence $\zeta^-=0$ a.e. on $\Omega$ and $\zeta\ge0$ a.e. on $\Omega$ by [F10]. [step 2.1, F10]

3.2 (Second assertion) Assume additionally that $\int_\Omega\zeta\varphi=0$ for every $\varphi\in C_c^\infty(O)$, and put $\omega:=O$ and $z:=\zeta|_O$, the restriction of the class, which lies in $L^2(O)$ with $\int_O|\zeta|^2\le\int_\Omega|\zeta|^2$ and $\int_O\zeta\varphi=\int_\Omega\zeta\varphi$ for every $\varphi\in C_c^\infty(O)$ [F11]. For every nonnegative $\varphi\in C_c^\infty(O)$ one has $\int_O\zeta\varphi=0\ge0$ and also $\int_O(-\zeta)\varphi=0\ge0$, so step 2.1 applies with $(\omega,z)=(O,\zeta|_O)$ and with $(\omega,z)=(O,-\zeta|_O)$, whose negative parts are $\zeta^-$ and $\zeta^+$ respectively; hence $(\zeta^-)^2=0$ and $(\zeta^+)^2=0$ a.e. on $O$, so $\zeta^+=\zeta^-=0$ a.e. on $O$ and $\zeta=0$ a.e. on $O$ by [F10]. [step 2.1, F10, F11]

4.1 Step 3.1 proves the first assertion and step 3.2 the second for arbitrary open $\Omega$, class $\zeta$ and open $O\subseteq\Omega$; the argument of steps 1.1-2.1 is uniform in the pair $(\omega,z)$, so the second assertion needed no re-run of the estimates. Countable Choice was used in the approximate-identity interface of step 1.1 and in the countable-union step of step 2.1 [A1, F2, F8], while the localisation itself is choice-free. [step 3.1, step 3.2, A1, F2, F8] ∎
