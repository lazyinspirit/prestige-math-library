---
id: "ex-ltwo-forcing-defines-an-h-minus-one-functional"
kind: "example"
title: "$L^2$ forcing defines an $H^{-1}$ functional"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 2
deps:
  - "thm-ftc-second-part"
  - "thm-tonelli-and-fubini-for-completed-product-measures"
  - "lem-smooth-bump-between-concentric-euclidean-balls"
  - "def-axiom-of-choice"
  - "def-countable-choice"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-integral-over-a-measurable-set"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-regular-distribution-from-a-locally-integrable-function"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-test-function-space-d-of-an-open-set"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-integral-elementary-bounds"
  - "lem-ltwo-and-divergence-data-embed-in-h-minus-one"
  - "lem-sharp-dirichlet-poincare-inequality-on-an-interval"
  - "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral"
  - "thm-holder-inequality-for-integrals"
  - "thm-locally-integrable-functions-embed-in-distributions"
  - "thm-nonnegative-integral-zero-iff-zero-almost-everywhere"
  - "thm-poincare-inequality-for-w-one-p-zero"
  - "thm-chain-rule"
  - "thm-algebra-of-derivatives"
  - "thm-sine-and-cosine-derivatives"
  - "thm-sine-and-cosine-addition-formulas"
  - "cor-trigonometric-parity-and-pythagorean-identity"
  - "def-the-standard-smooth-step-function"
  - "thm-extreme-value-r"
  - "thm-integration-by-parts"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.3–4.4, the estimate $\\|f\\|_{H^{-1}}\\le C\\|f\\|_{L^2}$ from Poincar'e, printed pp. 95–99"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, $L^2$ data are used through the pairing $(f,v)_{L^2}$ in the weak equation, printed p. 101"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.1, the weak problem with $L^2$ forcing, printed pp. 223–226"
---

## Example

Assume the Axiom of Choice inherited through the cited suppliers, together with Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, nonempty and bounded in one direction, with Poincar\'e constant $C_P$ for $W^{1,2}_0$ ([[thm-poincare-inequality-for-w-one-p-zero]]). For $f\in L^2(\Omega)$ define $F_f(v):=(f,v)_{L^2}$, $v\in H^1_0(\Omega)$. Then $F_f\in H^{-1}(\Omega)$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]]) with $$\|F_f\|_{H^{-1}}\le C_P\|f\|_{L^2}.$$ If moreover $f\in H^1_0(\Omega)$ and $f\ne0$, testing $v=f$ gives the data-dependent lower bound $$\|F_f\|_{H^{-1}}\ge\frac{\|f\|_{L^2}^2}{\|f\|_{H^1_0}};$$ no uniform positive lower bound by $\|f\|_{L^2}$ holds on all of $H^1_0$, as the interval sine sequence below shows. The map $f\mapsto F_f$ is injective: if $F_f=0$ then $(f,v)_{L^2}=0$ for all $v\in C_c^\infty(\Omega)$, hence $f=0$ a.e. Taking $f=\mathbf 1$ on a bounded interval $(0,L)$ shows that the upper bound $C_P\|f\|_{L^2}$ is at least $(L/\pi)\sqrt L$ there and grows with the domain diameter. This is the exact cheap estimate that the plan records as consumed by the weak Dirichlet problem ([[lem-ltwo-and-divergence-data-embed-in-h-minus-one]]); it is not surjectivity of the embedding, which fails for $n\ge1$ (an explicit datum outside its range is constructed in step 1.4; [[thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form]] supplies the general representation).

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; an open, nonempty $\Omega\subseteq\mathbb R^n$ bounded in one direction with Poincar\'e constant $C_P$ for $W^{1,2}_0$; a class $f\in L^2(\Omega)$; the functional $F_f(v)=(f,v)_{L^2}$ on $H^1_0(\Omega)$.

[F1] Upper estimate: the functional $v\mapsto(f,v)_{L^2}$ is conjugate-linear, well defined on classes, and $\|F_f\|_{H^{-1}}\le C_P\|f\|_{L^2}$; this is [[lem-ltwo-and-divergence-data-embed-in-h-minus-one]] with $f_0=f$ and $f_1=\dots=f_n=0$, using $\|v\|_{L^2}\le C_P\|Dv\|_{L^2}$ ([[thm-poincare-inequality-for-w-one-p-zero]]).

[F2] $H^{-1}$ norm and the lower bound: $\|F\|_{H^{-1}}=\sup_{\|v\|_{H^1_0}\le1}|F(v)|$, so for $f\ne0$ testing with $v=f\in H^1_0$ gives $\|F_f\|_{H^{-1}}\ge|(f,f)_{L^2}|/\|f\|_{H^1_0}=\|f\|_{L^2}^2/\|f\|_{H^1_0}$. Poincar\'e controls $\|f\|_{L^2}$ by $\|Df\|_{L^2}$ and supplies no upper bound of $\|f\|_{H^1_0}$ by $\|f\|_{L^2}$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]], [[def-sobolev-space-wkp-and-its-norm]], [[thm-poincare-inequality-for-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] Injectivity input: the map $f\mapsto u_f$, $u_f(\varphi)=\int_\Omega f\varphi$, is an injection from $L^1_{\mathrm{loc}}(\Omega)$ modulo almost-everywhere equality into the distributions $\mathcal D'(\Omega)$, $\mathcal D^{\prime}(\Omega)$ being the continuous linear functionals on the test-function space $\mathcal D(\Omega)=C_c^\infty(\Omega)$; hence $u_f=0$ forces $f=0$ a.e. ([[thm-locally-integrable-functions-embed-in-distributions]], [[def-regular-distribution-from-a-locally-integrable-function]], [[def-test-function-space-d-of-an-open-set]]). Every $L^2$ class on $\Omega$ lies in $L^1_{\mathrm{loc}}(\Omega)$, because $\int_K|f|\le|K|^{1/2}\|f\|_{L^2(K)}$ on each compact $K\subseteq\Omega$ ([[thm-holder-inequality-for-integrals]]).

[F4] Sharp interval inequality: on $\Omega=(0,L)$ the function $\phi(x)=\sin(\pi x/L)$ lies in $H^1_0(0,L)$, is nonzero, and satisfies $\|\phi\|_{L^2}=(L/\pi)\|\phi'\|_{L^2}$, so every constant $C$ admissible in $\|v\|_{L^2}\le C\|\nabla v\|_{L^2}$ on $H^1_0(0,L)$ satisfies $C\ge L/\pi$ ([[lem-sharp-dirichlet-poincare-inequality-on-an-interval]]).

[F5] The constant function $1$ on $(0,L)$ has $\|1\|_{L^2(0,L)}=\sqrt L$: the constant $1$ is bounded and Riemann integrable on $[0,L]$ with Riemann integral $L$, and a bounded Riemann integrable function on a closed bounded interval has the same Lebesgue integral ([[lem-integral-elementary-bounds]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-integral-over-a-measurable-set]]).

[F6] For integers $k\ge1$, $f_k(x)=\sin(k\pi x)$ on $(0,1)$ satisfies $\|f_k\|_{L^2}^2=1/2$, $\|f_k'\|_{L^2}^2=(k\pi)^2/2$, and $f_k''=-(k\pi)^2f_k$ by the trigonometric identities and derivative rules ([[thm-sine-and-cosine-derivatives]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule]]).

[F7] The standard smooth step $\sigma$ takes values in $[0,1]$, equals $0$ on $(-\infty,0]$ and $1$ on $[1,\infty)$, and has bounded derivative $C_\sigma:=\sup|\sigma'|<\infty$ because $\sigma'$ is continuous and vanishes outside the compact interval $[0,1]$ ([[def-the-standard-smooth-step-function]], [[thm-extreme-value-r]]).

[F8] Integration by parts applies to smooth compactly supported test functions on $I$, and $C_c^\infty(I)$ is dense in $H^1_0(I)$ by its definition as a Sobolev closure; the pairings in the identity are continuous in the $H^1_0$ norm ([[thm-integration-by-parts]], [[def-wkp-zero-as-a-sobolev-closure]], [[thm-holder-inequality-for-integrals]]).







[F9] Arbitrary $L^2$ data $f_0,\ldots,f_n$ define a bounded functional $F(v)=(f_0,v)+\sum_i(f_i,D_iv)$ by [[lem-ltwo-and-divergence-data-embed-in-h-minus-one]]. Smooth compactly supported bumps exist inside every ball, by [[lem-smooth-bump-between-concentric-euclidean-balls]] and translation; their products give bumps inside boxes. Fubini factors integrals of products on boxes ([[thm-tonelli-and-fubini-for-completed-product-measures]]), and the fundamental theorem evaluates the smooth one-variable derivative integrals ([[thm-ftc-second-part]]).

## Proof

1.1 Upper bound: [F1] applied with $f_0=f$ and all $f_i=0$ gives $\|F_f\|_{H^{-1}}\le C_P\|f\|_{L^2}$, so $F_f\in H^{-1}(\Omega)$. [F1]

1.2 Exact lower bound on the Sobolev space: if $f\in H^1_0(\Omega)$ is nonzero, then $f$ is an admissible test function and $$\frac{|F_f(f)|}{\|f\|_{H^1_0}}=\frac{\|f\|_{L^2}^2}{\|f\|_{H^1_0}}$$ is a lower bound for $\|F_f\|_{H^{-1}}$, because that norm is the supremum of $|F_f(v)|/\|v\|_{H^1_0}$ over nonzero $v$. [F2]

1.3 Interval scaling: take $\Omega=(0,L)$ and $f=\mathbf 1$. By the sharp interval inequality every admissible Poincar\'e constant $C$ for $(0,L)$ satisfies $C\ge L/\pi$, and $\|f\|_{L^2(0,L)}=\sqrt L$; hence the displayed bound $C_P\|f\|_{L^2}$ is at least $(L/\pi)\sqrt L$ and grows with the diameter $L$ of the domain. [F4, F5, algebra]

1.4 The embedding is not onto. Choose a box $Q=(s-r,s+r)\times Q'$ compactly contained in the nonempty open set $\Omega$, a real $\psi\in C_c^\infty(-1,1)$ with $\psi(0)=1$, and a nonzero real $\eta\in C_c^\infty(Q')$ using [F9]. For $n=1$, omit the transverse factor and set $C=1$; otherwise put $C:=\int_{Q'}\eta^2>0$. Set $f_1(x)=\mathbf1_{(s,s+r)}(x_1)\eta(x')$ on $Q$ and zero outside, with $f_0=f_2=\cdots=f_n=0$. These are $L^2$ data, so $F(v):=\int f_1\overline{D_1v}$ belongs to $H^{-1}$ by [F9]. For $0<\varepsilon<r$, take $v_\varepsilon(x)=\psi((x_1-s)/\varepsilon)\eta(x')\in C_c^\infty(Q)$. Fubini and the fundamental theorem give $F(v_\varepsilon)=C(\psi(r/\varepsilon)-\psi(0))=-C$, whereas $\|v_\varepsilon\|_2^2=\varepsilon C\int_{-1}^{1}\psi^2\to0$. If $F=F_h$ for some $h\in L^2(\Omega)$, H\"older would imply $|F(v_\varepsilon)|\le\|h\|_2\|v_\varepsilon\|_2\to0$, contradicting $C>0$. Thus a datum outside the $L^2$ embedding exists on every such nonempty $\Omega$. [F1, F9, algebra]

2.1 No uniform $L^2$ lower bound: on $I=(0,1)$, let $f_k(x)=\sin(k\pi x)$. To see $f_k\in H^1_0(I)$, for each fixed $k$ use $\eta_m(x)=\sigma(mx-1)\sigma(m(1-x)-1)$ and set $g_{k,m}=\eta_m f_k$. Then $g_{k,m}\in C_c^\infty(I)$, $\eta_m=1$ on $[2/m,1-2/m]$, $|\eta_m'|\le2mC_\sigma$, and on the two boundary strips $|f_k|\le2k\pi/m$ and $|f_k'|\le k\pi$. Thus $\|g_{k,m}-f_k\|_{L^2}^2\le16(k\pi)^2/m^3$ and $\|(g_{k,m}-f_k)'\|_{L^2}^2\le4(k\pi)^2(1+4C_\sigma)^2/m$, so $g_{k,m}\to f_k$ in $H^1$ and $f_k\in H^1_0(I)$. By [F8], first for $v\in C_c^\infty(I)$ and then by density for every $v\in H^1_0(I)$, $$F_{f_k}(v)=\int_0^1f_k\overline v\,dx=\frac1{(k\pi)^2}\int_0^1f_k'\overline{v'}\,dx.$$ Cauchy--Schwarz and [F6] give $\|F_{f_k}\|_{H^{-1}}\le\|f_k\|_{L^2}/(k\pi)$, so $\|F_{f_k}\|_{H^{-1}}/\|f_k\|_{L^2}\to0$. Therefore no uniform positive lower bound by $\|f\|_{L^2}$ holds on all of $H^1_0(I)$. [F2, F6, F7, F8, step 1.1, algebra]

3.1 Injectivity: if $F_f=0$, then $(f,v)_{L^2}=0$ for every $v\in C_c^\infty(\Omega)\subseteq H^1_0(\Omega)$. Given $\varphi\in C_c^\infty(\Omega)$, applying this to $v=\overline\varphi$ gives $u_f(\varphi)=\int_\Omega f\varphi=0$, so $u_f$ is the zero distribution; the injectivity in [F3] then gives $f=0$ a.e., that is, $f$ is the zero class. Hence $f\mapsto F_f$ is injective. When $f\in H^1_0(\Omega)$, steps 1.1 and 1.2 give an upper bound and the valid data-dependent lower bound; step 2.1 shows that this lower bound cannot be replaced by a uniform positive multiple of $\|f\|_{L^2}$. [F3, step 1.1, step 1.2, step 2.1]

4.1 Conclusion: $L^2$ forcing defines an element of $H^{-1}$ with the quantitative upper bound of step 1.1, the valid data-dependent lower bound of step 1.2 for $f\in H^1_0$, injectivity by step 3.1, and diameter growth of the upper bound by step 1.3. Step 2.1 shows why there is no uniform lower estimate in the $L^2$ norm; this example is not surjectivity of $L^2(\Omega)\hookrightarrow H^{-1}(\Omega)$, as the explicit datum of step 1.4 is outside its range. [F1, step 2.1, step 3.1, step 1.4, step 1.3, step 1.2] ∎
