---
id: ex-em-causal-wave-kernel-prerequisites-explicit-checks
kind: example
title: "Explicit checks of the causal wave kernel, the gauge conventions and the static retarded limit"
status: draft
origin: pipeline
domain: mathematics
deps: [lem-em-point-retarded-potential-and-fields, lem-em-gauge-wave-reachability, lem-em-retarded-wave-kernel, def-em-potential-gauge-and-field-conventions, def-countable-choice, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-divergence-and-curl-of-a-c1-vector-field, def-laplacian-of-a-c2-function, def-euclidean-inner-product, thm-algebra-of-derivatives, thm-the-curl-of-a-gradient-vanishes, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-polar-coordinates-formula-for-lebesgue-measure, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, lem-euclidean-balls-have-positive-finite-lebesgue-measure, thm-heine-borel-rn, lem-test-function-cutoffs-and-euclidean-localization, lem-em-global-retarded-root, prop-order-and-scalar-rules-for-the-nonnegative-integral]
dependency_roles:
  lem-em-point-retarded-potential-and-fields: mathematical-premise
  lem-em-gauge-wave-reachability: mathematical-premise
  lem-em-retarded-wave-kernel: mathematical-premise
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-em-global-retarded-root: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing)"
      url: "https://www.damtp.cam.ac.uk/user/tong/em/electro.pdf"
      locator: "section 6.4.2, printed pp. 159-161, equations (6.37)-(6.38): the constant-velocity example and the explicit retarded root; section 6.4.3, printed pp. 161-164: the field computation, whose static limit v=0 is the Coulomb term"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "section 7.1, printed pp. 167-170, (7.11)-(7.12): the wave expression and Duhamel conventions checked by the explicit W chi = 1 computation"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The following are explicit mathematical checks of the conventions and hypotheses of the items on this page; no measurement, physical field identification or empirical claim is made.

(i) Static specialization. Take $z\equiv0$ (so $v_*=0$), $q\in\mathbb R$, $\varepsilon_0>0$ in the setting of [[lem-em-point-retarded-potential-and-fields]]. Then for $x\ne0$ the root is $s=t-|x|/c$, $r=|x|$, $n=x/|x|$, $\beta=0$, $\kappa=1$, $\dot\beta=0$, so the potentials and fields are $\varphi=C/|x|$, $A=0$, $E=C\,x/|x|^3$, $B=0$. Thus the retarded formulas reduce exactly to the Coulomb field with the convention $C=q/(4\pi\varepsilon_0)$, and the kernel's explicit retarded-history integral reproduces the time-independent Poisson kernel $1/(4\pi|x-y|)$: for a static spatial source $h\in C_c^\infty(\mathbb R^3)$ define $u(x,t):=\frac1{4\pi}\int_{\mathbb R^3}\frac{h(y)}{|x-y|}\,dy$. Indeed the retarded time is $t-|x-y|/c$ and evaluating the static source there leaves $h(y)$ unchanged. This finite integral is the extension of the compact spacetime-source formula by source-time cutoffs on each compact observation region; a time-independent nonzero source is not itself compactly supported in spacetime.

(ii) Explicit Lorenz-gauge transformation. On $\Omega=\mathbb R^3\times\mathbb R$ take $\varphi\equiv0$ and $A(x,t)=(x_1,0,0)$. Then $G(\varphi,A)=\operatorname{div}A=1$ and $E=-\partial_tA=0$, $B=\operatorname{curl}A=0$. The quadratic function $\chi(x,t):=-|x|^2/6$ satisfies $W\chi=G$: indeed $\partial_t^2\chi=0$ and $\Delta\chi=-1$, so $W\chi=c^{-2}\cdot0-(-1)=1=G$. Its gauge transform is $T_\chi(\varphi,A)=(0,\ ((2/3)x_1,-x_2/3,-x_3/3))$, which satisfies $G(T_\chi(\varphi,A))=\frac23-\frac13-\frac13=0$ and has the same fields: $E(T_\chi(\varphi,A))=0=E(\varphi,A)$ and $B(T_\chi(\varphi,A))=0=B(\varphi,A)$. This checks clauses (b) and (c) of [[lem-em-gauge-wave-reachability]] in an instance where $G$ is a nonzero constant and where the gauge function does not have the zero Cauchy data used in the existence construction of that lemma; by its clause (d), the difference of this $\chi$ and the zero-data solution of $W\chi=G$ solves the homogeneous wave equation, which is why both may be used.

(iii) Sharpness of the kernel support at the apex. For a nonnegative $\psi\in\mathcal D(\mathbb R^3\times\mathbb R)$ with $\psi(0,0)>0$ one has $\langle K,\psi\rangle=\frac{1}{4\pi}\int\psi(y,|y|/c)|y|^{-1}dy>0$, so $(0,0)\in\operatorname{supp}K$ and the apex is not an artefact of the definition; the same computation with a bump near $(y_0,|y_0|/c)$, $y_0\ne0$, shows that every point of the cone is in the support.

## Facts & Assumptions

**Given:** The countable-choice hypothesis, the constants $c,q,\varepsilon_0,C$, the static trajectory $z\equiv0$, the pair $\varphi\equiv0$, $A(x,t)=(x_1,0,0)$, the gauge function $\chi=-|x|^2/6$, the kernel $K$ of the retarded-wave-kernel item, and a static source $h\in C_c^\infty(\mathbb R^3)$.

[F1] For $c>0$ and $C^1$ $z$ with $|z'|\le v_*<c$ there is exactly one retarded root $s$ of $t-s=|x-z(s)|/c$, with $s\le t$ and equality exactly on the worldline; a $C^k$ trajectory gives a $C^k$ root off the worldline ([[lem-em-global-retarded-root]]).

[F2] In the setting of that item, $\varphi=C/(\kappa r)$, $A=\beta\varphi/c$, and the fields $E=-\nabla\varphi-\partial_tA$, $B=\operatorname{curl}A$ obey the displayed Lienard-Wiechert formulas; the pairings against the kernel satisfy the exact retarded-convolution identities ([[lem-em-point-retarded-potential-and-fields]]).

[F3] For the kernel $K$ and $h\in C_c^\infty(\mathbb R^3\times\mathbb R)$, $(K*h)(x,t)=\int h(y,t-|x-y|/c)(4\pi|x-y|)^{-1}dy$ is well defined and for a nonnegative test $\psi$ the pairing $\langle K,\psi\rangle$ is the displayed integral; $\operatorname{supp}K=C$ ([[lem-em-retarded-wave-kernel]]).

[F4] For a potential pair, $E=-\nabla\varphi-\partial_tA$, $B=\operatorname{curl}A$, $G=\operatorname{div}A+c^{-2}\partial_t\varphi$, $W=c^{-2}\partial_t^2-\Delta$, and the gauge transform is $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,A+\nabla\chi)$ ([[def-em-potential-gauge-and-field-conventions]]).

[F5] Under $\mathrm{AC}_\omega$, if $(\varphi,A)$ is a $C^\infty$ potential pair on a slab, then there is a $C^\infty$ gauge function $\chi$ with zero Cauchy data and $W\chi=G(\varphi,A)$, the gauge transform preserves $E$ and $B$ and is in Lorenz gauge, and differences of functions with the same $W$-image satisfy $W(\chi_1-\chi_2)=0$ ([[lem-em-gauge-wave-reachability]]).

[F6] $\Delta|x|^2=6$, $\partial_1x_1=1$ and $\operatorname{curl}\nabla f=0$ for $C^2$ $f$; divergence and curl are linear and computed from the first partial derivatives ([[def-laplacian-of-a-c2-function]], [[def-divergence-and-curl-of-a-c1-vector-field]], [[def-jacobian-matrix-and-gradient]], [[thm-algebra-of-derivatives]], [[thm-the-curl-of-a-gradient-vanishes]], [[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[F7] Under $\mathrm{AC}_\omega$ the polar formula holds for nonnegative Borel functions, a nonnegative measurable function has zero integral exactly when it vanishes almost everywhere, Euclidean balls have positive finite measure, and nonnegative integrals are monotone and scale ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F8] Compact subsets of $\mathbb R^n$ are bounded and closed ([[thm-heine-borel-rn]]), and for a compact set inside an open set there is a smooth compact cutoff equal to one near it ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F9] The Euclidean norm and inner product are those of [[def-euclidean-inner-product]], and $C^k$ regularity is componentwise ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 Static specialization (i). With $z\equiv0$ the root equation reads $t-s=|x|/c$, whose unique solution is $s=t-|x|/c$; then $R=x$, $r=|x|$, $n=x/|x|$, $\beta=0$, $N=0$, $\kappa=1$, $D=|x|$ and $\dot\beta=0$. By [F2] the potentials are $\varphi=C/|x|$ and $A=0$ (since $\beta=0$), and the field formulas give $E=C(1-0)(n-0)/(1\cdot|x|^2)=Cx/|x|^3$ and $B=n\times E/c=(C/c)(n\times n)/|x|^2=0$, using $n\times n=0$. [given, F1, F2, F4, F6, F9]

1.2 Static Poisson kernel (i). Let $h\in C_c^\infty(\mathbb R^3)$, fix a compact observation region $Q_0\subseteq\mathbb R^3\times\mathbb R$ and note that for $(x,t)\in Q_0$ and $y$ in the support of $h$ the retarded time $s=t-|x-y|/c$ stays in a bounded interval; choose a smooth nonnegative time cutoff $\sigma$ equal to one on that interval with compact support, and put $h_\#(x,t):=\sigma(t)h(x)\in C_c^\infty(\mathbb R^3\times\mathbb R)$, which agrees with the time-independent extension of $h$ on the contributing region. By [F3], $(K*h_\#)(x,t)=\int h_\#(y,t-|x-y|/c)(4\pi|x-y|)^{-1}dy=\frac{1}{4\pi}\int h(y)/|x-y|\,dy$ on $Q_0$, since $\sigma$ equals one at the retarded times and the static source does not depend on time; the remaining integral is finite: $h$ is bounded with compact support, the polar formula bounds its absolute integral on $B_1(x)$ by $\|h\|_\infty\int_{B_1(x)}|x-y|^{-1}dy<\infty$, and on the remaining compact support one has $|x-y|^{-1}\le1$, giving an upper bound $\|h\|_\infty$ times a finite ball volume. This is the stated extension of the compact spacetime-source formula by source-time cutoffs; the uncut static source is not compactly supported in spacetime. [given, F3, F7, F8, A1]

1.3 The gauge transformation (ii). For $\varphi\equiv0$ and $A=(x_1,0,0)$: $\operatorname{div}A=\partial_1x_1=1$, so $G=1$; $\operatorname{curl}A=0$; $E=-\partial_tA=0$. For $\chi=-|x|^2/6$: $\partial_t^2\chi=0$, and $\Delta\chi=-\frac16\Delta|x|^2=-1$ with $\Delta|x|^2=6$, so $W\chi=c^{-2}\cdot0-(-1)=1=G$. Since $\nabla\chi=(-x_1/3,-x_2/3,-x_3/3)$, the gauge transform is $T_\chi(\varphi,A)=(0-\partial_t\chi,\ A+\nabla\chi)=(0,((2/3)x_1,-x_2/3,-x_3/3))$, whose divergence is $\frac23-\frac13-\frac13=0$ and whose curl vanishes because it is the gradient of $\frac13x_1^2-\frac16x_2^2-\frac16x_3^2$ by the curl-of-gradient theorem; hence $E(T_\chi(\varphi,A))=-\nabla0-\partial_t(0,\ldots)=0=E(\varphi,A)$ and $B(T_\chi(\varphi,A))=0=B(\varphi,A)$, and the transformed pair is in Lorenz gauge. This instantiates clauses (b) and (c) of [F5] with a nonzero constant $G$ and a gauge function that does not have the zero Cauchy data of the existence construction; by clause (d) of [F5], $W(\chi-\chi_0)=1-1=0$ for the zero-data solution $\chi_0$ of $W\chi_0=1$, so the two are compatible. [given, F4, F5, F6, F9]

2.1 Sharpness at the apex (iii). Let $0\le\psi\in\mathcal D(\mathbb R^3\times\mathbb R)$ with $\psi(0,0)>0$. By continuity and $\psi(0,0)>0$ there are $a>0$ and $\delta>0$ with $\psi(y,|y|/c)\ge a$ whenever $|y|<\delta$. On that ball $y\mapsto\psi(y,|y|/c)/|y|$ is nonnegative and bounded below by $a/|y|$, so by the polar formula and the positivity of the integral of a nonnegative measurable function that is positive on a set of positive measure, $\langle K,\psi\rangle=\frac{1}{4\pi}\int\psi(y,|y|/c)|y|^{-1}dy\ge\frac{a}{4\pi}\int_{B_\delta}|y|^{-1}dy=\frac{a}{4\pi}\cdot\frac{\sigma(S^2)\delta^2}{2}>0$; [F8] supplies such nonnegative bumps supported in every prescribed neighbourhood of the origin, so this nonvanishing proves $(0,0)\in\operatorname{supp}K$. For $y_0\ne0$ and a nonnegative bump $\psi$ positive at $(y_0,|y_0|/c)$ with support in a small ball, continuity gives $\psi(y,|y|/c)\ge a>0$ on a neighbourhood of $y_0$, while $|y|^{-1}\ge 1/(2|y_0|)$ there, and the same computation gives $\langle K,\psi\rangle>0$, so every such cone point lies in the support in accordance with the support computation of [F3]. Both computations use only nonnegative tests, and no factorization of an arbitrary test into radial and time factors is assumed. [given, F3, F7, F8, A1] ∎

## Remarks

- **Consistency, not evidence.** These are internal consistency checks of conventions and hypotheses; they neither prove any physical field identification nor test any model against observation.

- **Choice accounting.** $\mathrm{AC}_\omega$ enters only through the polar formula and the positivity criteria of [F7] and through the kernel item [F3]; the algebraic computations are choice-free.
