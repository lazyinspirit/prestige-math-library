---
id: lem-disc-hardy-traces-and-szego-reproducing
kind: lemma
title: The disc trace space is the Hardy boundary space and the Szegő family reproduces $H^2$
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
deps:
  - cor-complex-differentiability-implies-continuity
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - cor-hardy-one-cauchy-representation
  - def-analytic-hardy-space-disc
  - def-complex-differentiability-holomorphic-and-entire
  - def-complex-metric-convergence-and-continuity
  - def-countable-choice
  - def-szego-kernel-smooth-bounded-domain
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - lem-complex-conjugation-and-modulus-laws
  - lem-hardy-radial-means-are-monotone
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-complex-plane-is-complete
  - thm-complex-polynomials-and-rational-functions-are-holomorphic
  - thm-extreme-value-metric
  - thm-fatou-boundary-theorem-analytic-hardy-spaces
  - thm-fatou-lemma
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - thm-riesz-representation-for-hilbert-space
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, Example 5.2.3, printed pp. 162–163: Cauchy's formula for functions continuous on the closed disc and its conversion to the Szegő integrand against arc length; §5.3, printed pp. 165–166: the boundary-trace closure, Riesz evaluation construction, and Example 5.3.1's arc-length kernel $1/(2\pi(1-z\bar\zeta))$. The source explicitly omits details; the $H^2$ trace-range, closedness, boundedness and regularity arguments are proved locally here. Since $dm=ds/(2\pi)$, the normalized-Haar kernel is $1/(1-z\bar w)$.
---

## Facts & Assumptions

[A1] The only choice principle is the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The Hardy boundary theorem, Hardy-space and torus conventions, $L^2$ Hilbert structure, and Riesz/Szegő construction below are used under this hypothesis; no full Axiom of Choice or arbitrary-index selection is used.

[F1] The unit circle is parametrized by $\zeta=e^{2\pi it}$, normalized Haar measure is $dm=dt$, and $m(\mathbb T)=1$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[F2] $H^p(\mathbb D)$ is defined by the supremum of the radial $L^p$ means; in particular $H^2(\mathbb D)$ is a normed complex vector space and $H^2(\mathbb D)\subseteq H^1(\mathbb D)$ ([[def-analytic-hardy-space-disc]], [[lem-hardy-radial-means-are-monotone]]).

[F3] For $f\in H^2(\mathbb D)$, the Fatou boundary theorem gives $f^*\in L^2(\mathbb T,m)$, $\|f_r-f^*\|_2\to0$ as $r\uparrow1$, and $\|f^*\|_2=\|f\|_{H^2}$ ([[thm-fatou-boundary-theorem-analytic-hardy-spaces]]).

[F4] For $f\in H^1(\mathbb D)$, its boundary function satisfies the Cauchy representation $$f(w)=\frac{1}{2\pi i}\oint_{\mathbb T}\frac{f^*(\zeta)}{\zeta-w}\,d\zeta=\int_{\mathbb T}\frac{f^*(\zeta)}{1-w\overline\zeta}\,dm(\zeta)$$ ([[cor-hardy-one-cauchy-representation]]).

[F5] $L^2(\mathbb T,m)$ with $\langle g,h\rangle=\int g\overline h\,dm$ is a complex Hilbert space, the pairing is linear in its first variable, and it satisfies Cauchy–Schwarz ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F6] The Hardy boundary space in the Szegő definition is the $L^2$ closure of traces from $\mathcal O(\mathbb D)\cap C(\overline{\mathbb D})$ ([[def-szego-kernel-smooth-bounded-domain]]).

[F7] Every bounded linear functional on a complex Hilbert space has a unique representing vector $y$ with $L(x)=\langle x,y\rangle$ under the first-variable-linear convention ([[thm-riesz-representation-for-hilbert-space]]).

[F8] A function on an open subset of $\mathbb C$ is holomorphic when it is complex differentiable at each point ([[def-complex-differentiability-holomorphic-and-entire]]).

[F9] Complex differentiability implies continuity ([[cor-complex-differentiability-implies-continuity]]).

[F10] Conjugation is involutive and $z\overline z=|z|^2$, so $|\overline z|=|z|$; modulus is multiplicative and subadditive, hence the reverse triangle inequality follows ([[lem-complex-conjugation-and-modulus-laws]]).

[F11] The metric on $\mathbb C$ is the Euclidean metric on $\mathbb R^2$, so $\overline{\mathbb D}$ is a compact Euclidean closed ball ([[def-complex-metric-convergence-and-continuity]], [[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F12] A continuous real-valued function on a nonempty compact metric space is bounded and attains its maximum ([[thm-extreme-value-metric]]).

[F13] A rational function is holomorphic wherever its denominator is nonzero ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[F14] Every Cauchy sequence in $\mathbb C$ converges ([[thm-complex-plane-is-complete]]).

[F15] A locally uniform limit of holomorphic functions is holomorphic ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F16] For nonnegative measurable functions, $\int\liminf g_n\,dm\le\liminf\int g_n\,dm$ ([[thm-fatou-lemma]]).

[F17] Szegő regularity means that trace evaluation is well defined and bounded on the generating trace space, and its continuous extension is holomorphic in the interior variable ([[def-szego-kernel-smooth-bounded-domain]]).

[F18] For a Szegő-regular pair, the Szegő kernel is defined by $S_\sigma(z,w):=E_z(S_w)$, where $S_w$ is the Riesz representer of $E_w$ ([[def-szego-kernel-smooth-bounded-domain]], [[thm-riesz-representation-for-hilbert-space]]).

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $\mathbb D\subset\mathbb C$ be the unit disc and let $m$ be normalized Haar measure on $\mathbb T=\partial\mathbb D$. Write $H^2(\partial\mathbb D,m)$ for the boundary space in [[def-szego-kernel-smooth-bounded-domain]], with its first-variable-linear $L^2$ pairing.

- The traces of functions holomorphic on a neighbourhood of $\overline{\mathbb D}$ are dense in $H^2(\partial\mathbb D,m)$, and the boundary-value range $\{f^*:f\in H^2(\mathbb D)\}$ is closed in $L^2(\mathbb T,m)$. The map $f\mapsto f^*$ is an isometric isomorphism $H^2(\mathbb D)\to H^2(\partial\mathbb D,m)$.

- For every $w\in\mathbb D$, the evaluation $f\mapsto f(w)$ is bounded on $H^2(\mathbb D)$, and the function $S_w(\zeta):=1/(1-\overline w\zeta)$ belongs to $H^2(\partial\mathbb D,m)$. For all $f\in H^2(\mathbb D)$,
$$f(w)=\int_{\mathbb T}f^*(\zeta)\overline{S_w(\zeta)}\,dm(\zeta),\qquad |f(w)|\le\frac{\|f\|_{H^2}}{1-|w|}.$$
Consequently $(\mathbb D,m)$ is Szegő-regular and its two-variable Szegő kernel is $S(z,w)=1/(1-z\overline w)$.

## Proof

**Proof technique:** direct, using radial convergence, the $H^1$ Cauchy representation, and a local closed-range argument.

**Given:** $\mathrm{AC}_\omega$, $\mathbb D$, normalized Haar measure $m$, and the analytic and boundary Hardy spaces just defined.

1.1 For every $f\in H^2(\mathbb D)$, [F3] gives $f^*\in L^2$ and $\|f^*\|_2=\|f\|_{H^2}$; boundary limits are linear, so $f\mapsto f^*$ is a linear isometry. If $f^*=0$, then $f\in H^1$ by [F2] and [F4] gives $f(w)=0$ for every $w\in\mathbb D$, proving injectivity. [A1, F2, F3, F4, given]

1.2 Fix $f\in H^2(\mathbb D)$ and $0<r<1$. The dilate $g_r(z):=f(rz)$ is holomorphic on $\{|z|<1/r\}$: for $z$ there, its difference quotient tends to $r f'(rz)$ by [F8]. It is continuous on a neighbourhood of $\overline{\mathbb D}$ by [F9], and its boundary trace is $f(r\zeta)$. By [F3], these traces converge to $f^*$ in $L^2$ as $r\uparrow1$, so the neighbourhood-holomorphic traces are dense in the boundary-value range. [A1, F3, F8, F9, given]

1.3 Let $G\in\mathcal O(\mathbb D)\cap C(\overline{\mathbb D})$, the generating class in [F6]. By [F11] and [F12], $|G|$ is bounded on $\overline{\mathbb D}$, hence every radial $L^2$ mean of $G$ is bounded and $G\in H^2(\mathbb D)$ by [F2]. Continuity on $\overline{\mathbb D}$ makes its radial boundary limit equal to $G|_{\mathbb T}$ at every point, so [F3] identifies its trace with $G^*$ in $L^2$. Thus every generating trace in [F6] belongs to the boundary-value range. [A1, F2, F3, F6, F10, F11, F12, given]

2.1 Let $h_n=f_n^*$ be a sequence in the boundary-value range converging in $L^2$ to $h$. The preimage $f_n$ is unique by step 1.1, so this sequence is well defined; [F3] applied to differences shows $(f_n)$ is Cauchy in $H^2$. For fixed $z\in\mathbb D$, [F4] applies to $f_n-f_k\in H^1$. With $\eta_z(\zeta):=1/(1-z\overline\zeta)$, [F1] and [F10] give $|\eta_z(\zeta)|\le(1-|z|)^{-1}$ and $\|\eta_z\|_2\le(1-|z|)^{-1}$. Cauchy–Schwarz in [F5] therefore yields $$|f_n(z)-f_k(z)|\le\frac{\|f_n^*-f_k^*\|_2}{1-|z|}.$$ [A1, F1, F2, F3, F4, F5, F10, step 1.1, given]

3.1 By [F14], $f_n(z)$ has a limit $F(z)$ for each $z\in\mathbb D$. Given $z_0\in\mathbb D$, choose $\rho$ with $|z_0|<\rho<1$; the estimate of step 2.1, uniformly for $|z|<\rho$, makes $f_n$ uniformly Cauchy on that neighbourhood. Hence $f_n\to F$ locally uniformly, and [F15] makes $F$ holomorphic. [F14, F15, step 2.1, given]

4.1 The Cauchy sequence $(f_n)$ is bounded in $H^2$. For every $0\le r<1$, pointwise convergence on $r\mathbb T$ and [F16] give $$\int_{\mathbb T}|F(r\zeta)|^2\,dm(\zeta)\le\liminf_{n\to\infty}\int_{\mathbb T}|f_n(r\zeta)|^2\,dm(\zeta)\le\sup_n\|f_n\|_{H^2}^2,$$ so $F\in H^2$. Given $\varepsilon>0$, choose $N$ with $\|f_n-f_k\|_{H^2}<\varepsilon$ for $n,k\ge N$. For fixed $n\ge N$ and each $r$, another application of [F16] as $k\to\infty$ gives $\int_{\mathbb T}|f_n(r\zeta)-F(r\zeta)|^2\,dm(\zeta)\le\varepsilon^2$. Taking the supremum over $r$ proves $f_n\to F$ in $H^2$. [F2, F16, step 2.1, step 3.1, given]

5.1 By [F3] applied to $f_n-F$, its boundary traces converge in $L^2$ to $F^*$. Since $f_n^*\to h$ as well and $L^2$ limits are unique, $h=F^*$. This proves that the boundary-value range is closed. [F3, F5, step 4.1, given]

6.1 The neighbourhood-holomorphic traces in step 1.2 lie in the generating trace space of [F6], and step 1.3 shows every generator lies in the boundary-value range. Step 1.2 gives density of the smaller trace space in that range, and step 5.1 proves the range is closed. Therefore the closure defining $H^2(\partial\mathbb D,m)$ equals the boundary-value range; step 1.1 makes $f\mapsto f^*$ an isometric isomorphism onto it. [A1, F6, step 1.1, step 1.2, step 1.3, step 5.1]

7.1 Fix $w\in\mathbb D$. If $w=0$, $s_w(z)=1$; if $w\ne0$, choose $R=(1+1/|w|)/2$, so $1<R<1/|w|$ and $|\overline wz|<|w|R=(1+|w|)/2<1$ for $|z|<R$, hence $1-\overline wz\ne0$ by [F10]. Thus $s_w(z):=1/(1-\overline wz)$ is holomorphic on a neighbourhood of $\overline{\mathbb D}$ by [F13]. Step 1.3 identifies its trace $S_w(\zeta)=s_w(\zeta)$ with $s_w^*$ in the boundary-value range, and step 6.1 puts it in the boundary space. For $\zeta\in\mathbb T$, [F1] and [F10] give $|1-\overline w\zeta|\ge1-|w|$, so $|S_w(\zeta)|\le(1-|w|)^{-1}$, hence $\|S_w\|_2\le(1-|w|)^{-1}$. For $f\in H^2\subseteq H^1$, [F4] gives $f(w)=\langle f^*,S_w\rangle$; [F5] and [F3] then give the stated bounded-evaluation estimate and reproducing identity. [A1, F1, F2, F3, F4, F5, F10, F13, step 1.3, step 6.1]

8.1 For every generating trace $\operatorname{tr}G$ from [F6], step 1.3 gives $G\in H^2$ and $G^*=G|_{\mathbb T}$, so step 7.1 shows $G(w)=\langle\operatorname{tr}G,S_w\rangle$. Thus trace evaluation is well defined and bounded on the generating space, and $E_w(h):=\langle h,S_w\rangle$ is its continuous extension to the closure, as required by [F17]. By step 6.1 every $h$ in that closure is $f^*$ for a unique $f\in H^2$; step 7.1 gives $E_z(h)=f(z)$, which is holomorphic in $z$. In particular $S_w=s_w^*$, so $E_z(S_w)=s_w(z)$. The boundary range is closed by step 5.1 in the Hilbert space [F5], hence it is a Hilbert space; [F7] and [F18] identify $S_w$ as the unique representer used in the kernel definition. Therefore $$S(z,w)=E_z(S_w)=s_w(z)=\frac{1}{1-z\overline w},$$ proving Szegő regularity and the claimed normalization. [A1, F5, F6, F7, F17, F18, step 1.3, step 5.1, step 6.1, step 7.1, given] ∎
