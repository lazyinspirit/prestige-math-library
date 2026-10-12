---
id: ex-nrqm-bell-worked-angles-and-product-mixture
aliases: [ nrqm-bell-worked-angles-and-product-mixture ]
kind: example
domain: physics
title: "Worked Bell angles: the singlet against the EPR product mixture at the
  same directions"
status: draft
origin: session
dependency_level: 15
deps:
  [
    def-nrqm-bell-declared-spin-arrangement,
    def-nrqm-bell-binary-correlation-models,
    def-nrqm-bell-local-response-representation,
    lem-nrqm-bell-singlet-pairings,
    thm-nrqm-bell-local-representations-satisfy-chsh,
    texp-nrqm-bell-singlet-arrangement-contrast,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-composites-separable-partial-trace,
    pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations,
    pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-bell-declared-spin-arrangement: formulation-prerequisite
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  def-nrqm-bell-local-response-representation: mathematical-premise
  lem-nrqm-bell-singlet-pairings: mathematical-premise
  thm-nrqm-bell-local-representations-satisfy-chsh: mathematical-premise
  texp-nrqm-bell-singlet-arrangement-contrast: physical-result
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations: physical-result
  pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws: physical-result
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite conditional computation in the declared spin
  correlation arrangement of the framework at four specified directions: the
  singlet's four sign tables and CHSH value, the tables and CHSH value of the
  EPR-type product mixture of definite opposite spins, an explicit
  local-response representation of the mixture's tables, and the comparison of
  the two arrangements. The example asserts no measured correlation, no
  apparatus and no empirical fact; it makes no claim that any laboratory
  preparation realizes either arrangement."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8
        'Multiparticle States and Tensor Products', Section 5, chapter pages
        16-19: the singlet probabilities P(a,b) at orthogonal and 45-degree
        directions and the EPR-type ensemble of definite opposite spins, with
        P(z,-z)=1/2 and P(z,x)=1/4"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba\
        2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        6.1.4, printed pages 111-115 (PDF pages 119-123): the singlet
        correlation -a.b, the four-case expectation of the product, and the EPR
        discussion of an ensemble with definite opposite spins"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Adopt the declared spin correlation arrangement of
[[def-nrqm-bell-declared-spin-arrangement]] over the two declared spin-half
factors $V,V$ with basis $(e_{+},e_{-})$. Assume the Axiom of Countable Choice
and the Axiom of Choice, as required
by the cited singlet, spin-spectrum and arrangement suppliers
([[def-countable-choice]], [[def-axiom-of-choice]]). Fix the orthonormal vectors
$e_{1}:=(1,0,0)$, $e_{2}:=(0,1,0)$, $e_{3}:=(0,0,1)$ and the four unit
directions
$$a_{0}:=e_{3},\qquad a_{1}:=e_{1},\qquad b_{0}:=\frac{e_{3}+e_{1}}{\sqrt2},\qquad b_{1}:=\frac{e_{3}-e_{1}}{\sqrt2}.$$
Consider two arrangements over these same directions:

- the **singlet arrangement**, with the singlet preparation
  $\rho_{\Psi}=T_{\Psi,\Psi}$,
  $\Psi=\frac1{\sqrt2}(\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+}))$;
- the **product-mixture arrangement**, with the EPR-type mixture
  $$M:=\tfrac12\,T_{e_{+}\otimes e_{-},\,e_{+}\otimes e_{-}} +\tfrac12\,T_{e_{-}\otimes e_{+},\,e_{-}\otimes e_{+}} ,$$
  a convex combination of the two product preparations of definite opposite
  spins along $e_{3}$.

Then:

(a) for the singlet arrangement the four correlations are
$$E_{00}=E_{01}=E_{10}=-\frac{1}{\sqrt2},\qquad E_{11}=+\frac{1}{\sqrt2}, \qquad S(\nu^{\rho_{\Psi}})=-2\sqrt2 ;$$

(b) for the product-mixture arrangement the four sign tables are
$$\nu^{M}_{ij}(\varepsilon,\delta)=\tfrac14\bigl(1-\varepsilon\delta\, (a_{i})_{3}(b_{j})_{3}\bigr),$$
so its correlations are $E_{ij}=- (a_{i})_{3}(b_{j})_{3}$; at the displayed
directions $(a_{0})_{3}=1$, $(a_{1})_{3}=0$ and
$(b_{0})_{3}=(b_{1})_{3}=1/\sqrt2$, hence
$$E_{00}=E_{01}=-\frac{1}{\sqrt2},\qquad E_{10}=E_{11}=0,\qquad S(\nu^{M})=-\sqrt2 ;$$

(c) the mixture's tables admit a local-response model
([[def-nrqm-bell-local-response-representation]]): on the two-point
specification space, the response laws
$$\alpha_{i}(1,\varepsilon)=\tfrac12(1+\varepsilon(a_{i})_{3}),\quad \alpha_{i}(2,\varepsilon)=\tfrac12(1-\varepsilon(a_{i})_{3}),\quad \beta_{j}(1,\delta)=\tfrac12(1-\delta(b_{j})_{3}),\quad \beta_{j}(2,\delta)=\tfrac12(1+\delta(b_{j})_{3})$$
with specification weights $\tfrac12,\tfrac12$ reproduce
$\nu^{M}$; consequently $\bigl|S(\nu^{M})\bigr|=\sqrt2\le2$, as the bound for
representable models requires
([[thm-nrqm-bell-local-representations-satisfy-chsh]]);

(d) both arrangements have the same marginal sign laws
$\nu^{A}(\pm)=\nu^{B}(\pm)=\tfrac12$ for every direction, and the same reduced
preparation $\operatorname{Tr}_{B}M=\tfrac12I=\operatorname{Tr}_{B}\rho_{\Psi}$
on each factor, although their joint tables and CHSH functionals differ:
$\bigl|S(\nu^{\rho_{\Psi}})\bigr|=2\sqrt2>2\ge\sqrt2=\bigl|S(\nu^{M})\bigr|$.

All clauses are conditional computations in the declared framework; no
measured correlation is asserted.

## Verification

**Given:** The declared arrangements with the singlet preparation $\rho_{\Psi}$ and the mixture $M$; the four directions $a_{0}=e_{3}$, $a_{1}=e_{1}$, $b_{0}=(e_{3}+e_{1})/\sqrt2$, $b_{1}=(e_{3}-e_{1})/\sqrt2$; the spin-half projections $P_{a,\varepsilon}=\tfrac12(I+\varepsilon a\cdot\sigma)$; the Axiom of Countable Choice and the Axiom of Choice.

[L1] The arrangement's outcome law is $\nu^{\rho}_{ij}(\varepsilon,\delta)=\operatorname{tr}(\rho(P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta}))$ and its correlations and CHSH functional are read from [[def-nrqm-bell-binary-correlation-models]] clause (d) ([[def-nrqm-bell-declared-spin-arrangement]] clauses (a), (d)).

[L2] The singlet pairings and their marginals and correlation are $\langle(P_{a,\varepsilon}\otimes P_{b,\delta})\Psi,\Psi\rangle=\tfrac14(1-\varepsilon\delta a\cdot b)$ with marginals $\tfrac12$ and correlation $-a\cdot b$ ([[lem-nrqm-bell-singlet-pairings]] clauses (b), (c), (d)); at the displayed directions the singlet's CHSH value is $-2\sqrt2$ ([[texp-nrqm-bell-singlet-arrangement-contrast]] clause (b)).

[L3] For a product preparation $T_{u\otimes v,u\otimes v}$ the joint law of the local sign measurements factorizes: $\operatorname{tr}(T_{u\otimes v,u\otimes v}(P_{a,\varepsilon}\otimes P_{b,\delta}))=\|P_{a,\varepsilon}u\|^{2}\|P_{b,\delta}v\|^{2}$ ([[pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations]] clause (a), [[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b), (d)); and for the spin-half basis states $\langle(n\cdot\sigma)e_{+},e_{+}\rangle=n_{3}$, $\langle(n\cdot\sigma)e_{-},e_{-}\rangle=-n_{3}$, so $\|P_{n,\varepsilon}e_{+}\|^{2}=\tfrac12(1+\varepsilon n_{3})$ and $\|P_{n,\varepsilon}e_{-}\|^{2}=\tfrac12(1-\varepsilon n_{3})$ ([[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] clause (c), [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e)).

[L4] The partial trace of a rank-one product operator is $\operatorname{Tr}_{B}T_{u\otimes v,u'\otimes v'}=\langle v,v'\rangle T_{u,u'}$, and $\operatorname{tr}$ is linear on the trace class ([[lem-nrqm-composites-separable-partial-trace]] clause (c), [[lem-nrqm-composites-rank-one-operator-calculus]] clause (b)).

[L5] Every binary correlation model admitting a local-response representation satisfies $|S|\le2$ ([[thm-nrqm-bell-local-representations-satisfy-chsh]]).

**Proof technique:** direct; evaluate the singlet numbers from the singlet pairings, compute the mixture's tables as the average of the two product tables, exhibit the two-specification representation and check its identity, and compare the marginals.

**Given:** The data of the statement and [L1]-[L5].

1.1 [Directions and singlet values] The four directions are unit vectors with $a_{0}\cdot b_{0}=a_{0}\cdot b_{1}=a_{1}\cdot b_{0}=1/\sqrt2$ and $a_{1}\cdot b_{1}=-1/\sqrt2$. By [L1] and [L2], $E_{ij}(\nu^{\rho_{\Psi}})=-a_{i}\cdot b_{j}$, so $E_{00}=E_{01}=E_{10}=-1/\sqrt2$, $E_{11}=+1/\sqrt2$ and $S(\nu^{\rho_{\Psi}})=-2\sqrt2$; this is (a). [given, L1, L2, algebra]

1.2 [Product-state tables] Write $u_{+}:=e_{+}$, $u_{-}:=e_{-}$. By [L3], for the product preparation $T_{u_{\tau}\otimes u_{-\tau},u_{\tau}\otimes u_{-\tau}}$ (with $\tau=+$ or $-$) the joint sign law at $(i,j)$ is $\tfrac12(1+\varepsilon\tau(a_{i})_{3})\cdot\tfrac12(1-\delta\tau(b_{j})_{3})$. [given, L3, algebra]

2.1 [Mixture tables] By [L1] the outcome law of a convex mixture is the corresponding convex combination of the laws, so the two product tables of step 1.2 average to $\nu^{M}_{ij}(\varepsilon,\delta)=\tfrac14\bigl[\tfrac12(1+\varepsilon(a_{i})_{3})(1-\delta(b_{j})_{3})+\tfrac12(1-\varepsilon(a_{i})_{3})(1+\delta(b_{j})_{3})\bigr]=\tfrac14(1-\varepsilon\delta(a_{i})_{3}(b_{j})_{3})$; this is the table formula of (b). [step 1.2, L1, algebra]

3.1 [Mixture correlations and CHSH value] Summing the table of step 2.1 with the product signs gives $E_{ij}(\nu^{M})=-(a_{i})_{3}(b_{j})_{3}$; substituting $(a_{0})_{3}=1$, $(a_{1})_{3}=0$, $(b_{0})_{3}=(b_{1})_{3}=1/\sqrt2$ gives $E_{00}=E_{01}=-1/\sqrt2$ and $E_{10}=E_{11}=0$, hence $S(\nu^{M})=-1/\sqrt2-1/\sqrt2-0+0=-\sqrt2$; this completes (b). [step 2.1, algebra]

3.2 [Explicit representation] Choose a two-point specification space $\Lambda=\{1,2\}$ with weights $\mathbb P(\{1\})=\mathbb P(\{2\})=\tfrac12$ and define the response laws by the display of (c). Then for each $(i,j,\varepsilon,\delta)$ one has $\int_{\Lambda}\alpha_{i}(\lambda,\varepsilon)\beta_{j}(\lambda,\delta)\,d\mathbb P(\lambda)=\tfrac12\cdot\tfrac12(1+\varepsilon(a_{i})_{3})\cdot\tfrac12(1-\delta(b_{j})_{3})+\tfrac12\cdot\tfrac12(1-\varepsilon(a_{i})_{3})\cdot\tfrac12(1+\delta(b_{j})_{3})=\tfrac14\bigl(1-\varepsilon\delta(a_{i})_{3}(b_{j})_{3}\bigr)=\nu^{M}_{ij}(\varepsilon,\delta)$ by step 2.1, so $(\alpha,\beta,\mathbb P)$ is a local-response representation of $\nu^{M}$; the bound $|S(\nu^{M})|\le2$ then follows from [L5] and is consistent with the value $-\sqrt2$ of (b), since $\sqrt2\le2$. This is (c). [step 2.1, L5, algebra]

4.1 [Common marginals and comparison] Summing the mixture table of step 2.1 over the distant label gives $\tfrac12$ for each local label, and the singlet's marginals are $\tfrac12$ by [L2]; the reduced preparations are $\operatorname{Tr}_{B}M=\tfrac12T_{e_{+},e_{+}}+\tfrac12T_{e_{-},e_{-}}=\tfrac12I$ and, expanding $T_{\Psi,\Psi}$ in the product basis and applying [L4] linearly, $\operatorname{Tr}_{B}\rho_{\Psi}=\tfrac12(T_{e_{+},e_{+}}+T_{e_{-},e_{-}})=\tfrac12I$, so both arrangements share every single-station statistic while their CHSH functionals are $2\sqrt2$ and $\sqrt2$ in absolute value. This is (d). [step 1.1, step 2.1, step 3.1, L2, L4, algebra]

5.1 [Assembly and scope] Steps 1.1, 2.1, 3.1, 3.2 and 4.1 prove (a)-(d); only the declared arrangements, the singlet pairings, the product-factorization theorem, the spin-half outcome laws, the partial trace and the CHSH bound for representable models were used, and no measured correlation is asserted. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **Why the mixture does not distinguish the two routes.** The mixture's
  tables are represented by a probabilistic local-response model with two
  specifications, not by a deterministic response function of a single
  specification; this is why clause (a) of
  [[def-nrqm-bell-local-response-representation]] is stated for response laws
  rather than for response functions. The singlet's tables at the displayed
  directions admit no representation of either form.
- **The lesson of the comparison.** Identical marginals and identical reduced
  preparations on both factors do not determine the joint tables: the
  contrast between $2\sqrt2$ and $\sqrt2$ is invisible to every single-station
  statistic and is a property of the correlations alone.
