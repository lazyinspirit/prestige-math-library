# Batch 31 final authoring evidence — Spatial BV

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Pair: spatial-bv-and-total-variation-regularization / spatial-bv-and-total-variation-regularization-examples  
Scheduling input: 69632ca90817955c25ab60d41e32cde58ca7d3d83e260e2e0e7ef6b68b8447ce

## Authority and active state

- Read the repository instructions and assigned evidence in the required order: CLAUDE.md, SCHEMA.md, WORKFLOW.md, the batch task, scaffold brief, owner authoring direction, the full IP-31 design section, plan-spec.json, the dependency-level map, and current run evidence. The owner direction controlled authoring conflicts.
- Recomputed the active run status from .autopilot/inverse-problems-knot-theory-all-109-2026-10-19; it remains running in 1-scaffold, with 16/108 batches covered and batch 31 present. The owner blocker file records a stage-stalemate for unit 58 (covered but artifact-incomplete and no longer running); it contains no batch-31 item. No engine state, shared plan, blocker, verdict, published carrier, or other pair was edited.
- Scope is exactly this A/B pair. Both pages are draft YAML-only frontmatter with empty bodies. The A page contains 19 item IDs and the B page contains 3 examples; no summary was authored. Both are below the 100-item cap. The cross-batch dependency input remains an empty array.

## Plan reconciliation and placement

- The complete prose design at research/plan-inverse-problems-track.md lines 733–755 names three page prerequisites: Radon/Riesz–Markov, Lp, and interval BV. The current research/plan-spec.json, generated assignment, and drift evidence name four, adding tempered-distributions-and-the-fourier-transform. Followed the controlling current plan/spec and dispatch interface; kept all four in the A-page requires. The local derivative sign agrees with the published distribution convention; no Fourier-transform claim is used as a proof premise.
- The design’s relative-isoperimetry order precedes compactness in its prose outline. The manifest instead orders proof prerequisites by the actual route: Sobolev and zero-gradient estimates, then bounded-domain compactness, then relative isoperimetry. This is a dependency-order reconciliation, not a change to the assigned claim.
- The page extends the design’s core claims with local A-page proof suppliers (finite vector-measure variation, test-field characterization, strict approximation, smooth coarea, Sobolev, and related lemmas). These fill explicit proof interfaces and fit the page cap.

## Supplier conventions and axiom audit

- Supplier definitions were checked for measure regularity, L1 equivalence classes, and distributional-derivative sign. def-radon-measure-on-an-lch-space uses finite-on-compacts and regularity; def-regular-complex-borel-measure-on-an-lch-space puts regularity on total variation; L1 elements are almost-everywhere classes; and def-distributional-derivative uses ⟨D_i u, φ⟩ = -∫u ∂_iφ.
- The published interval BV item only gives partition variation on an interval. It does not provide the vector Radon derivative or multidimensional spatial-TV interface; those are defined and proved locally.
- Countable Choice (CC) and Dependent Choice (DC) remain separate. CC is stated where Lebesgue/Fubini, approximation, coarea-related, and example arguments use it. The test-field BV formula and lower semicontinuity are stated choice-free; its optional arbitrary-L1 finite-test-supremum representation is separately identified as DC-dependent. The coarea and compactness claims keep their assigned CC strength and are escalated where the available route uses DC. No theorem was weakened or silently upgraded.

## Source reading and provenance

1. Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6, complete 291-page PDF: https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf. Chapter 7 §§7.3–7.6, printed pp. 229–277. Read the BV definition/variation characterization (§7.3, pp. 229–249), trace and extension (§7.4, pp. 249–268), compactness (§7.5, pp. 268–269), and finite-perimeter/relative-isoperimetry context (§7.6, pp. 269–277).
2. Piotr Rybka, The space in variational and evolution problems, Lecture Notes in Mathematical Sciences 15, complete 54-page PDF: https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf. §1.1, printed pp. 5–10. Read the vector Radon derivative, finite perimeter, test-field formula, lower semicontinuity, strict approximation, compactness, coarea statement, and trace context. Rybka’s coarea argument is a sketch and was not treated as a complete proof.
3. Oxford Mathematical Institute, BV Functions minicourse, Version 3.0, complete 95-page PDF: https://www.maths.ox.ac.uk/system/files/attachments/BV_minicourse_Slides_Version3_0.pdf. Strict approximation pp. 19–21, compactness outline pp. 27–32, and complete coarea proof pp. 39–43.
4. José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, “A note on convergence of solutions of total variation regularized linear inverse problems,” Inverse Problems 34 (2018), 055011, full text: https://arxiv.org/pdf/1711.06495. §1 and relevant §4/Appendix for Neumann variation in the open domain and full-space variation of a function or its zero extension.
- A browser parse attempt for Evans–Gariepy returned an internal parser error. An alternative complete Oxford lecture-notes coarea argument was found, opened, and inspected; no Evans–Gariepy quotation or fetch evidence was invented. No source was marked dropped. The seven source records in the coverage file have per-item dispositions and fetch stamps; source-fetch-check --stamp completed, and the final check verified 7/7.

## Item-by-item claims, dependencies, and decisions

The statement text below is synchronized with the complete uninterrupted statement/definition/example section in each carrier and with the manifest. Direct dependencies are listed exactly; dependency_level counts only in-run item suppliers. Proof step IDs point to complete arguments in the carriers and the strict contract file.


### lem-ip-distributional-radon-representation-unique

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 0; decision **ready**.
- Claim: Let $\Omega\subseteq\mathbb R^n$ be open. If two finite signed Radon measures on $\Omega$ have the same integrals against every function in $C_c^\infty(\Omega)$, then the measures are equal.
- Direct dependencies (7): def-regular-complex-borel-measure-on-an-lch-space, def-radon-measure-on-an-lch-space, lem-rat-embeds-dense, lem-smooth-bump-between-concentric-euclidean-balls, thm-product-of-countable, thm-heine-borel-rn, thm-rationals-countable.
- Argument: 2 numbered proof steps (1.1, 2.1) are in items/lem-ip-distributional-radon-representation-unique.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-vector-radon-variation-is-radon

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 0; decision **ready**.
- Claim: Let $\Omega\subseteq\mathbb R^n$ be open and let $\mu=(\mu_1,\ldots,\mu_m)$ have finite signed Radon coordinate measures. For Borel $A\subseteq\Omega$ define $$V(A):=\sup\left\{\sum_{j=1}^\infty |\mu(A_j)|:(A_j)_{j\ge1}\text{ is a Borel partition of }A\right\},$$ where the norm is Euclidean. Then $V$ is a finite positive Radon measure and $$V(\Omega)=\sup\left\{\int_\Omega f\cdot d\mu:f\in C_c(\Omega;\mathbb R^m),\ |f(x)|\le1\right\}.$$
- Direct dependencies (3): def-radon-measure-on-an-lch-space, def-regular-complex-borel-measure-on-an-lch-space, thm-total-variation-is-a-measure.
- Argument: 5 numbered proof steps (1.1, 2.1, 2.2, 3.1, 4.1) are in items/lem-ip-vector-radon-variation-is-radon.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-open-euclidean-locally-finite-smooth-partition

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 0; decision **ready**.
- Claim: If an open set $\Omega\subseteq\mathbb R^n$ is covered by a countable family of open sets $(V_\ell)_{\ell\in I}$, then there is a countable locally finite family of nonnegative functions $(\eta_j)\subset C_c^\infty(\Omega)$ summing to one, with each $\operatorname{supp}\eta_j$ contained in one member $V_\ell$ of the cover. Locally finite means that each point has a neighborhood meeting only finitely many supports.
- Direct dependencies (5): lem-rat-embeds-dense, lem-smooth-bump-between-concentric-euclidean-balls, thm-heine-borel-rn, thm-product-of-countable, thm-rationals-countable.
- Argument: 3 numbered proof steps (1.1, 2.1, 3.1) are in items/lem-ip-open-euclidean-locally-finite-smooth-partition.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-smooth-compact-support-dense-in-c0

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 0; decision **ready**.
- Claim: For every open set $\Omega\subseteq\mathbb R^n$, the space $C_c^\infty(\Omega)$ is dense in $C_0(\Omega)$ in the uniform norm.
- Direct dependencies (3): def-compact-support-c-c-and-c-zero-on-an-lch-space, lem-smooth-bump-between-concentric-euclidean-balls, thm-heine-borel-rn.
- Argument: 2 numbered proof steps (1.1, 2.1) are in items/lem-ip-smooth-compact-support-dense-in-c0.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-lw-integral-inequality

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 0; decision **ready**.
- Claim: Let $n\ge2$. For each $i\in\{1,\ldots,n\}$ let $g_i:\mathbb R^{n-1}\to[0,\infty)$ be Lebesgue-measurable and integrable, with its arguments identified with all coordinates except $x_i$. Then $$\int_{\mathbb R^n}\prod_{i=1}^n g_i(x_1,\ldots,\widehat{x_i},\ldots,x_n)^{1/(n-1)}\,dx\le\prod_{i=1}^n\left(\int_{\mathbb R^{n-1}}g_i\right)^{1/(n-1)}.$$
- Direct dependencies (2): thm-holder-inequality-for-integrals, thm-tonelli-theorem-for-sigma-finite-product-spaces.
- Argument: 3 numbered proof steps (1.1, 1.2, 2.1) are in items/lem-ip-lw-integral-inequality.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-bv-zero-gradient-constant-on-connected-domain

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 0; decision **ready**.
- Claim: Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open and connected. If $u\in L^1_{\mathrm{loc}}(\Omega)$ satisfies $\partial_i u=0$ as a distribution for every coordinate $i$, then there is a constant $c\in\mathbb R$ such that $u=c$ almost everywhere on $\Omega$.
- Direct dependencies (11): def-countable-choice, def-distributional-derivative, def-connected-space, def-l-one-approximate-identity-on-rn, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, lem-smooth-bump-between-concentric-euclidean-balls, lem-rat-embeds-dense, prop-mollifier-families-are-l-one-approximate-identities, thm-product-of-countable, thm-rationals-countable, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign.
- Argument: 3 numbered proof steps (1.1, 2.1, 3.1) are in items/lem-ip-bv-zero-gradient-constant-on-connected-domain.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### def-ip-spatial-bv-and-distributional-tv

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 1; decision **ready**.
- Claim: Let $\Omega\subseteq\mathbb R^n$ be open and let $u\in L^1(\Omega;\mathbb R)$, where elements of $L^1$ are almost-everywhere equivalence classes. For each $i\in\{1,\ldots,n\}$, its distributional derivative $D_i u$ acts on $\varphi\in C_c^\infty(\Omega)$ by
$$\langle D_i u,\varphi\rangle:=-\int_\Omega u\,\partial_i\varphi\,dx.$$
The function $u$ is in $BV(\Omega)$ when each $D_i u$ is represented by a finite signed Radon measure and the resulting vector-valued measure $Du=(D_1u,\ldots,D_nu)$ has finite total variation. Here a finite vector-valued Radon measure means that its partition variation is a finite Radon measure. For a Borel set $A\subseteq\Omega$, define
$$|Du|(A):=\sup\left\{\sum_{j=1}^\infty |Du(A_j)|:\ (A_j)_{j\ge1}\text{ is a Borel partition of }A\right\},$$
using the Euclidean norm on each vector value. Define the spatial total variation by $TV(u;\Omega):=|Du|(\Omega)$. A Lebesgue-measurable set $E\subseteq\Omega$ of finite measure has finite perimeter relative to $\Omega$ when $\chi_E\in BV(\Omega)$; its relative perimeter is $P(E;\Omega):=TV(\chi_E;\Omega)$.
- Direct dependencies (6): def-distributional-derivative, def-l-p-space-as-a-quotient-by-null-functions, def-radon-measure-on-an-lch-space, def-regular-complex-borel-measure-on-an-lch-space, lem-ip-distributional-radon-representation-unique, lem-ip-vector-radon-variation-is-radon.
- Argument: No proof steps are present; this is an authored definition or an explicitly escalated theorem statement.
- Readiness evidence: complete placement and prerequisites were inspected; no proof contract applies to this definition; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-unit-vector-density-has-scalar-variation

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 1; decision **ready**.
- Claim: Let $X$ be a locally compact second-countable metric space, let $\lambda$ be a finite positive Radon measure on $X$, and let $\nu:X\to\mathbb R^m$ be continuous with $|\nu(x)|=1$ for every $x$. Define the vector measure $\mu(A):=\int_A\nu\,d\lambda$ on Borel sets. Its partition variation satisfies $|\mu|=\lambda$.
- Direct dependencies (2): lem-ip-vector-radon-variation-is-radon, def-radon-measure-on-an-lch-space.
- Argument: 3 numbered proof steps (1.1, 2.1, 3.1) are in items/lem-ip-unit-vector-density-has-scalar-variation.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-bv-test-field-characterization-and-lsc

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 2; decision **ready**.
- Claim: For every open $\Omega\subseteq\mathbb R^n$ and real-valued $u\in BV(\Omega)$, $$TV(u;\Omega)=\sup\left\{\int_\Omega u\,\operatorname{div}\varphi\,dx:\varphi\in C_c^\infty(\Omega;\mathbb R^n),\ |\varphi(x)|\le1\right\}.$$ If $u_k,u\in BV(\Omega)$ are real-valued and $u_k\to u$ in $L^1(\Omega)$, then $TV(u;\Omega)\le\liminf_kTV(u_k;\Omega)$. In addition, assuming Dependent Choice, for any real-valued $u\in L^1(\Omega)$ the displayed supremum is finite if and only if $u\in BV(\Omega)$, with equality to $TV(u;\Omega)$; under the same assumption, an $L^1$ limit of real-valued BV functions with bounded liminf total variation belongs to $BV(\Omega)$ and satisfies the same lower-semicontinuity inequality.
- Direct dependencies (6): def-ip-spatial-bv-and-distributional-tv, def-compact-support-c-c-and-c-zero-on-an-lch-space, lem-ip-vector-radon-variation-is-radon, lem-ip-smooth-compact-support-dense-in-c0, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, def-dependent-choice.
- Argument: 4 numbered proof steps (1.1, 1.2, 2.1, 3.1) are in items/lem-ip-bv-test-field-characterization-and-lsc.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### def-ip-boundary-tv-conventions

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 2; decision **ready**.
- Claim: Let $\Omega\subset\mathbb R^n$ be a bounded Lipschitz domain, meaning a bounded open set whose boundary has a finite cover by coordinate neighborhoods in which it is the graph of a Lipschitz function and $\Omega$ lies on one side of that graph. For $u\in BV(\Omega)$ define the Neumann total variation by $TV_N(u;\Omega):=|Du|(\Omega)$. Define its zero extension $\widetilde u\in L^1(\mathbb R^n)$ by $\widetilde u=u$ almost everywhere on $\Omega$ and $\widetilde u=0$ almost everywhere on $\mathbb R^n\setminus\Omega$. Define the Dirichlet total variation by $TV_D(u;\Omega):=TV(\widetilde u;\mathbb R^n)$ when $\widetilde u\in BV(\mathbb R^n)$ and by $TV_D(u;\Omega):=+\infty$ otherwise. For $v\in BV(\mathbb R^n)$ define the full-space total variation by $TV_F(v):=TV(v;\mathbb R^n)$. Thus Neumann variation counts only the distributional derivative inside $\Omega$, while Dirichlet variation also counts any jump created by zero extension across $\partial\Omega$.
- Direct dependencies (1): def-ip-spatial-bv-and-distributional-tv.
- Argument: No proof steps are present; this is an authored definition or an explicitly escalated theorem statement.
- Readiness evidence: complete placement and prerequisites were inspected; no proof contract applies to this definition; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-bv-smooth-coarea

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 2; decision **ready**.
- Claim: Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open and let $u\in C^\infty(\Omega;\mathbb R)\cap L^1(\Omega)$ satisfy $\int_\Omega|\nabla u|\,dx<\infty$. For $t>0$ set $E_t^+:=\{x\in\Omega:u(x)>t\}$ and for $t<0$ set $E_t^-:=\{x\in\Omega:u(x)<t\}$. Then the level sets have finite perimeter relative to $\Omega$ for almost every applicable $t$, and
$$\int_\Omega|\nabla u|\,dx=\int_0^\infty P(E_t^+;\Omega)\,dt+\int_{-\infty}^0P(E_t^-;\Omega)\,dt.$$
- Direct dependencies (13): def-ip-spatial-bv-and-distributional-tv, def-countable-choice, lem-ip-open-euclidean-locally-finite-smooth-partition, lem-ip-unit-vector-density-has-scalar-variation, lem-rat-embeds-dense, thm-product-of-countable, thm-rationals-countable, thm-morse-sard-for-euclidean-maps, thm-euclidean-inverse-function-theorem, cor-change-of-variables-for-compactly-supported-functions, lem-local-graph-flux-from-fubini-and-the-fundamental-theorem, lem-surface-integral-is-independent-of-c-one-boundary-charts, thm-tonelli-theorem-for-sigma-finite-product-spaces.
- Argument: 3 numbered proof steps (1.1, 2.1, 3.1) are in items/lem-ip-bv-smooth-coarea.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-bv-strict-approximation

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 3; decision **ready**.
- Claim: Assume Countable Choice. For every open $\Omega\subseteq\mathbb R^n$ and $u\in BV(\Omega)$ there is a sequence $u_k\in C^\infty(\Omega)$ such that $u_k\to u$ in $L^1(\Omega)$ and $\int_\Omega |\nabla u_k|\,dx\to TV(u;\Omega)$. When $\Omega=\mathbb R^n$, the approximating functions may be chosen compactly supported.
- Direct dependencies (11): def-ip-spatial-bv-and-distributional-tv, lem-ip-bv-test-field-characterization-and-lsc, def-countable-choice, thm-lebesgue-measure-is-a-radon-measure-on-rn, def-l-one-approximate-identity-on-rn, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, lem-ip-open-euclidean-locally-finite-smooth-partition, lem-smooth-bump-between-concentric-euclidean-balls, prop-mollifier-families-are-l-one-approximate-identities, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-tonelli-theorem-for-sigma-finite-product-spaces.
- Argument: 4 numbered proof steps (1.1, 2.1, 3.1, 4.1) are in items/lem-ip-bv-strict-approximation.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-bv-lipschitz-trace-and-zero-extension

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 4; decision **escalated**.
- Claim: Assume Countable Choice. Let $n\ge2$ and let $\Omega\subset\mathbb R^n$ be a bounded Lipschitz domain, meaning a bounded open set whose boundary has a finite cover by coordinate neighborhoods in which it is the graph of a Lipschitz function and $\Omega$ lies on one side of the graph. There is a unique bounded linear trace operator $T:BV(\Omega)\to L^1(\partial\Omega,\mathcal H^{n-1})$ such that for every $u\in BV(\Omega)$ and $\phi\in C_c^1(\mathbb R^n;\mathbb R^n)$, $$\int_\Omega u\,\operatorname{div}\phi\,dx=-\int_\Omega\phi\cdot dDu+\int_{\partial\Omega}Tu\,\phi\cdot\nu\,d\mathcal H^{n-1},$$ where $\nu$ is the outward unit normal defined almost everywhere on $\partial\Omega$. The zero extension $\widetilde u$ belongs to $BV(\mathbb R^n)$ and satisfies $$TV(\widetilde u;\mathbb R^n)=TV(u;\Omega)+\|Tu\|_{L^1(\partial\Omega)}\le C_\Omega\bigl(\|u\|_{L^1(\Omega)}+TV(u;\Omega)\bigr)$$ for a finite constant $C_\Omega$ depending only on the domain.
- Direct dependencies (6): def-countable-choice, def-ip-spatial-bv-and-distributional-tv, lem-ip-bv-strict-approximation, lem-local-graph-flux-from-fubini-and-the-fundamental-theorem, lem-surface-integral-is-independent-of-c-one-boundary-charts, thm-tonelli-theorem-for-sigma-finite-product-spaces.
- Argument: No proof steps are present; this is an authored definition or an explicitly escalated theorem statement.
- Escalation: The statement asserts the one-sided BV trace, Gauss–Green, boundary gluing, and exact zero-extension variation formula, but the carrier has no proof. Terra §7.4 supplies theorem statements rather than a complete derivation of the trace construction and boundary limit. Escalate for local suppliers lem-ip-bv-one-sided-trace-on-lipschitz-graph, lem-ip-bv-gauss-green-for-lipschitz-domain, and lem-ip-bv-gluing-boundary-variation, each with matching Lipschitz-chart hypotheses and full proofs.

### lem-ip-bv-coarea-formula

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 4; decision **escalated**.
- Claim: Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, let $u\in BV(\Omega)$, and for $t>0$ set $E_t^+:=\{x\in\Omega:u(x)>t\}$ while for $t<0$ set $E_t^-:=\{x\in\Omega:u(x)<t\}$. Then for almost every applicable $t$ these sets have finite perimeter relative to $\Omega$, and $$TV(u;\Omega)=\int_0^\infty P(E_t^+;\Omega)\,dt+\int_{-\infty}^0P(E_t^-;\Omega)\,dt.$$
- Direct dependencies (8): def-countable-choice, def-dependent-choice, def-ip-spatial-bv-and-distributional-tv, lem-ip-bv-test-field-characterization-and-lsc, lem-ip-bv-strict-approximation, lem-ip-bv-smooth-coarea, thm-choice-implies-dependent-implies-countable-choice, thm-tonelli-theorem-for-sigma-finite-product-spaces.
- Argument: No proof steps are present; this is an authored definition or an explicitly escalated theorem statement.
- Escalation: The full coarea claim is retained, but its carrier has no proof. The inspected Oxford proof route needs finite-test-supremum representation for arbitrary L1 limits; the available Riesz–Markov supplier declares Dependent Choice, while this claim declares only Countable Choice. Keep the axiom branches distinct. Proposed local supplier: lem-ip-bv-finite-test-supremum-radon-representation-countable-choice, with a complete proof under exactly Countable Choice, or an owner-approved stronger axiom on the theorem statement.

### lem-ip-bv-sobolev-inequality

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 4; decision **ready**.
- Claim: Assume Countable Choice and let $n\ge2$. Every $u\in BV(\mathbb R^n)$ satisfies $$\|u\|_{L^{n/(n-1)}(\mathbb R^n)}\le TV(u;\mathbb R^n).$$
- Direct dependencies (8): def-countable-choice, def-ip-spatial-bv-and-distributional-tv, def-l-p-space-as-a-quotient-by-null-functions, def-calligraphic-l-p-on-a-measure-space, lem-ip-bv-strict-approximation, lem-ip-lw-integral-inequality, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, thm-tonelli-theorem-for-sigma-finite-product-spaces.
- Argument: 3 numbered proof steps (1.1, 2.1, 3.1) are in items/lem-ip-bv-sobolev-inequality.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### lem-ip-bv-extension-and-translation

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 5; decision **escalated**.
- Claim: Assume Countable Choice. Let $\Omega\subset\mathbb R^n$ be a bounded Lipschitz domain, meaning a bounded open set whose boundary has a finite cover by Lipschitz graph neighborhoods with $\Omega$ on one side of each graph. The zero-extension map is bounded from $BV(\Omega)$ to $BV(\mathbb R^n)$, with support in $\overline\Omega$, and there is a finite $C_\Omega$ such that $$\|\widetilde u\|_{L^1(\mathbb R^n)}+TV(\widetilde u;\mathbb R^n)\le C_\Omega\bigl(\|u\|_{L^1(\Omega)}+TV(u;\Omega)\bigr)$$ for every $u\in BV(\Omega)$. For every $v\in BV(\mathbb R^n)$ and $h\in\mathbb R^n$, $$\|v(\cdot+h)-v\|_{L^1(\mathbb R^n)}\le |h|TV(v;\mathbb R^n).$$
- Direct dependencies (8): def-countable-choice, def-ip-spatial-bv-and-distributional-tv, def-translation-of-a-function-on-rn, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, lem-ip-bv-lipschitz-trace-and-zero-extension, lem-ip-bv-strict-approximation, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant.
- Argument: 3 numbered proof steps (1.1, 1.2, 2.1) are in items/lem-ip-bv-extension-and-translation.md; the available branch is conditional/incomplete as specified below.
- Escalation: The translation-continuity branch is proved in the carrier, but the stated zero-extension variation formula invokes lem-ip-bv-lipschitz-trace-and-zero-extension, whose trace/Gauss–Green/gluing argument is not supplied. Keep the full claim and escalate pending complete trace suppliers; the conditional branch alone does not close readiness.

### lem-ip-bv-compactness-lower-semicontinuity

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 6; decision **escalated**.
- Claim: Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be a bounded Lipschitz domain, meaning a bounded open set whose boundary has a finite cover by Lipschitz graph neighborhoods with $\Omega$ on one side of each graph. Total variation is lower semicontinuous under $L^1(\Omega)$ convergence of BV functions. Every sequence $(u_k)\subset BV(\Omega)$ satisfying $$\sup_k\bigl(\|u_k\|_{L^1(\Omega)}+TV(u_k;\Omega)\bigr)<\infty$$ has a subsequence converging in $L^1(\Omega)$ to a function in $BV(\Omega)$.
- Direct dependencies (7): def-countable-choice, def-dependent-choice, def-ip-spatial-bv-and-distributional-tv, lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic, lem-ip-bv-extension-and-translation, lem-ip-bv-test-field-characterization-and-lsc, thm-frechet-kolmogorov-compactness-criterion-in-lp.
- Argument: No proof steps are present; this is an authored definition or an explicitly escalated theorem statement.
- Escalation: The full bounded-Lipschitz-domain compactness claim is retained, but no proof is supplied. The current route depends on unresolved zero-extension/trace and the available Frechet–Kolmogorov compactness supplier declares Dependent Choice, stronger than the claim’s Countable Choice. Proposed missing modules: lem-ip-bv-lipschitz-trace-and-zero-extension with complete local suppliers, and lem-ip-frechet-kolmogorov-l1-under-countable-choice; otherwise the statement’s axiom strength needs owner reconciliation.

### lem-ip-bv-extension-translation-and-coarea

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 6; decision **escalated**.
- Claim: Assume Countable Choice. For every bounded Lipschitz domain $\Omega\subseteq\mathbb R^n$ (a bounded open set with a finite Lipschitz graph cover of its boundary, with the domain on one side of each graph), zero extension is a bounded map $BV(\Omega)\to BV(\mathbb R^n)$ with support in $\overline\Omega$ and satisfies $\|\widetilde v\|_{L^1(\mathbb R^n)}+TV(\widetilde v;\mathbb R^n)\le C_\Omega(\|v\|_{L^1(\Omega)}+TV(v;\Omega))$; translations satisfy $\|w(\cdot+h)-w\|_{L^1(\mathbb R^n)}\le|h|TV(w;\mathbb R^n)$ for $w\in BV(\mathbb R^n)$; and, for every open $U\subseteq\mathbb R^n$ and every $u\in BV(U)$, if $E_t^+:=\{x\in U:u(x)>t\}$ for $t>0$ and $E_t^-:=\{x\in U:u(x)<t\}$ for $t<0$, then these sets have finite perimeter for almost every applicable $t$ and $$TV(u;U)=\int_0^\infty P(E_t^+;U)\,dt+\int_{-\infty}^0P(E_t^-;U)\,dt.$$
- Direct dependencies (5): def-countable-choice, def-dependent-choice, def-ip-spatial-bv-and-distributional-tv, lem-ip-bv-coarea-formula, lem-ip-bv-extension-and-translation.
- Argument: No proof steps are present; this is an authored definition or an explicitly escalated theorem statement.
- Escalation: This combined statement has no complete proof and inherits both unresolved modules: zero-extension via lem-ip-bv-lipschitz-trace-and-zero-extension and coarea via lem-ip-bv-coarea-formula. Keep the full statement and escalate until those suppliers have complete proofs at compatible axiom strength.

### lem-ip-finite-perimeter-relative-isoperimetry

- Placement: A page spatial-bv-and-total-variation-regularization; dependency level 7; decision **escalated**.
- Claim: Assume Countable Choice, let $n\ge2$, and let $\Omega\subseteq\mathbb R^n$ be a bounded connected Lipschitz domain (a bounded open set with a finite Lipschitz graph cover of its boundary, with the domain on one side of each graph, and not separable into two disjoint nonempty relatively open subsets). There is a constant $C_\Omega<\infty$ such that every measurable $E\subseteq\Omega$ with $\chi_E\in BV(\Omega)$ satisfies $$\min\{|E|,|\Omega\setminus E|\}^{(n-1)/n}\le C_\Omega P(E;\Omega).$$
- Direct dependencies (7): def-countable-choice, def-dependent-choice, def-ip-spatial-bv-and-distributional-tv, lem-ip-bv-compactness-lower-semicontinuity, lem-ip-bv-extension-and-translation, lem-ip-bv-sobolev-inequality, lem-ip-bv-zero-gradient-constant-on-connected-domain.
- Argument: No proof steps are present; this is an authored definition or an explicitly escalated theorem statement.
- Escalation: The full relative-isoperimetric claim is retained, but no proof is supplied. The planned route needs bounded-domain BV compactness/direct method, which is not complete at the stated Countable Choice strength, plus zero-gradient and Sobolev modules. Escalate pending lem-ip-bv-compactness-lower-semicontinuity with its trace and Countable-Choice compactness suppliers; no claim was weakened.

### ex-ip-bv-jump-across-smooth-curve

- Placement: B page spatial-bv-and-total-variation-regularization-examples; dependency level 3; decision **ready**.
- Claim: Assume Countable Choice. For the unit disk $B:=\{x\in\mathbb R^2:|x|<1\}$, its indicator belongs to $BV(\mathbb R^2)$, its distributional derivative is $D\chi_B=-\nu\,\mathcal H^1|_{\partial B}$ where $\nu(x)=x$ is the outward unit normal, and $TV(\chi_B;\mathbb R^2)=P(B;\mathbb R^2)=2\pi$.
- Direct dependencies (10): def-countable-choice, def-ip-spatial-bv-and-distributional-tv, lem-ip-bv-test-field-characterization-and-lsc, lem-surface-integral-is-independent-of-c-one-boundary-charts, lem-smooth-bump-between-concentric-euclidean-balls, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-continuous-implies-integrable, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-ftc-second-part, thm-lebesgue-measure-is-a-radon-measure-on-rn.
- Argument: 3 numbered proof steps (1.1, 2.1, 3.1) are in items/ex-ip-bv-jump-across-smooth-curve.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### cex-ip-oscillatory-sequence-unbounded-tv

- Placement: B page spatial-bv-and-total-variation-regularization-examples; dependency level 3; decision **ready**.
- Claim: Assume Countable Choice. The assertion that every sequence $(u_N)_{N\ge1}$ in $BV((0,1))$ with bounded $L^1(0,1)$ norms has uniformly bounded total variations is false. For $k\ge1$ let $I_k=(2^{-(k+1)},2^{-k})$ and define $u_N:=\sum_{k=1}^N(-1)^k\chi_{I_k}$. Then $\|u_N\|_{L^1(0,1)}=\sum_{k=1}^N|I_k|<1/2$, while the adjacent jumps have total magnitude $2N$.
- Direct dependencies (8): def-countable-choice, def-ip-spatial-bv-and-distributional-tv, lem-ip-bv-test-field-characterization-and-lsc, lem-smooth-bump-between-concentric-euclidean-balls, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-continuous-implies-integrable, thm-ftc-second-part, thm-lebesgue-measure-is-a-radon-measure-on-rn.
- Argument: 2 numbered proof steps (1.1, 2.1) are in items/cex-ip-oscillatory-sequence-unbounded-tv.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.

### ex-ip-neumann-constants-and-dirichlet-boundary-cost

- Placement: B page spatial-bv-and-total-variation-regularization-examples; dependency level 4; decision **ready**.
- Claim: Assume Countable Choice. On every bounded Lipschitz domain $\Omega\subset\mathbb R^n$ (a bounded open set with a finite Lipschitz graph cover of its boundary, with the domain on one side of each graph), a constant function $u\equiv c$ has $TV_N(u;\Omega)=0$. On the unit disk $B\subset\mathbb R^2$, if $c\ne0$ then $TV_D(c;B)=2\pi|c|$.
- Direct dependencies (9): def-countable-choice, def-ip-boundary-tv-conventions, def-ip-spatial-bv-and-distributional-tv, ex-ip-bv-jump-across-smooth-curve, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-continuous-implies-integrable, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-ftc-second-part, thm-lebesgue-measure-is-a-radon-measure-on-rn.
- Argument: 2 numbered proof steps (1.1, 2.1) are in items/ex-ip-neumann-constants-and-dirichlet-boundary-cost.md; the complete local argument passed precheck and proof-layout.
- Readiness evidence: complete placement and prerequisites were inspected; facts, inputs, boundary dispositions, and exact supplier excerpts are recorded in the batch-31 proof-contract file, whose strict validation passes; source locators and item dispositions are in the batch-31 coverage file.
## Final scoped validation

- node tools/tsx-run.mjs tools/precheck.mts on the 15 proof-bearing carriers: 15 checked, 0 failing.
- node tools/proof-layout.mjs on the 15 proof-bearing carriers: 15 items, 45 numbered steps, 0 defects.
- node tools/rendercheck.mjs on 22 carriers and 2 pages: all 24 files parsed; math and frontmatter checks passed.
- Direct inspectStatement audit over the exact 22 assigned carriers: 0 statement/reference-placement defects. Wikilink labels containing inline math were converted to plain-text labels so each reference remains one source line; the dyadic witness was joined to the complete refuted statement before its references. No logical dependency was deleted.
- node tools/content-policy.mjs on the batch-31 manifest: 22 items, 0 errors, 0 warnings. node tools/manifest-deps.mjs: 22 items, 0 normalized, 0 errors. The cex manifest statement was synchronized to its complete carrier statement.
- Scoped depcheck, fwdcheck, and extcheck on the 22 item IDs passed. The focused graph covers selected items plus their actual prerequisite closure.
- Scoped dependencyLevels on this manifest: 22 items, maximum dependency level 7, no cycles or label errors. Per-item levels are recorded above. The run-wide checker is not a batch-only check and encounters other active batches’ empty scaffold inventories; no other batch was edited.
- node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-31.proof-contracts.json --strict: 15/15 proof-bearing entries checked, 0 errors, 0 warnings.
- node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-31.coverage.json: 7/7 source records fetch-verified.
- node tools/proof-contract-coverage.mjs --run inverse-problems-knot-theory-all-109-2026-10-19 --contracts research/inverse-problems-knot-theory-all-109-2026-10-19-batch-31.proof-contracts.json is blocked before local coverage: Empty or invalid frontier page inventory minimax-testing-and-detection-rates. This is a run-global empty-manifest blocker owned outside batch 31; no unrelated manifest was modified.
- All 22 Step-1 records were written through `node tools/step1-decisions.mjs record` without `--owner`, using each item's direct dependency IDs. The filtered final check finds no missing batch-31 receipts: 16 ready and the six exact escalations above. The run-wide check reports 222 items, 137 ready, and 251 open-work rows; it remains open across other batches/pages and includes these six author escalations. Autopilot separately reports its owner-held stage-stalemate for unit 58 in research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json. These records are item-scoped and do not constitute independent review or publication.

## Handoff

The 16 ready items have complete local arguments/definitions, verified placement, current dependency levels, and applicable strict proof contracts. The six escalations preserve their complete assigned claims and record exact missing proof modules and axiom mismatches. Reconciliation requires owner action on the proposed trace/gluing modules and Countable-Choice-level representation/compactness interfaces; all dependent claims remain present.
