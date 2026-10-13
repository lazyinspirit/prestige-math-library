---
id: ex-nrqm-interference-ideal-flat-two-path-screen-distribution
aliases: [nrqm-interference-ideal-flat-two-path-screen-distribution]
kind: example
domain: physics
title: "An ideal flat two-path distribution: exact coherent and which-path bin laws"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-interference-two-path-preparation-and-detection-model, pthm-nrqm-interference-coherent-and-mixture-detection-laws, post-nrqm-framework-observable-and-probability, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-lebesgue-measure-of-a-box-of-every-kind, def-integral-of-a-nonnegative-simple-function, cor-additivity-of-the-nonnegative-lebesgue-integral, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn, thm-measure-uniqueness-on-a-sigma-finite-pi-system, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]
dependency_roles:
  def-nrqm-interference-two-path-preparation-and-detection-model: formulation-prerequisite
  pthm-nrqm-interference-coherent-and-mixture-detection-laws: physical-result
  post-nrqm-framework-observable-and-probability: physical-assumption
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  cor-additivity-of-the-nonnegative-lebesgue-integral: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn: mathematical-premise
  thm-measure-uniqueness-on-a-sigma-finite-pi-system: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact computation in the declared two-path preparation model of the pair for a declared product-form, flat (indicator) pair of path amplitudes in the spin-zero reading: the normalized coherent and which-path probabilities of the overlap region and of the two outer regions of the declared detection coordinate, the dark overlap region at relative phase pi, and the positivity of partially overlapping bins. The example is a conditional computation in the declared model; it asserts no detector response, no sampling model, no measured counts and no claim that a laboratory apparatus realizes flat amplitudes."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.3, printed pages 14-18 (PDF pages 17-21): the two-slit interference probability density and the dark fringes"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.2 printed pages 5-6: amplitudes for the two routes and the interference cross term"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Adopt the declared two-path preparation and detection model
[[def-nrqm-interference-two-path-preparation-and-detection-model]] in its
spin-zero reading $r=1$, and the coherent and which-path detection laws
[[pthm-nrqm-interference-coherent-and-mixture-detection-laws]]. Assume the
Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]), as required by the preparation and detection-law
suppliers. Fix lengths
$0<d<L<\infty$, measured in metres, and declare the two intervals
$$I_{1}:=\Bigl[-\frac d2-\frac L2,\ -\frac d2+\frac L2\Bigr],\qquad I_{2}:=\Bigl[\frac d2-\frac L2,\ \frac d2+\frac L2\Bigr]$$
on the first spatial coordinate, measured in metres, whose **overlap region**
$O:=I_{1}\cap I_{2}=[\frac d2-\frac L2,\ -\frac d2+\frac L2]$ has length
$L-d>0$; let $g\in L^{2}(\mathbb R^{2};\mathbb C)$ satisfy $\|g\|_{2}=1$ and
choose a Borel representative, which exists by completion of Borel Lebesgue measure
([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]).
Its amplitude unit is $\mathrm m^{-1}$ in the two-dimensional position measure;
declare the
**flat path amplitudes**
$$f_{1}:=L^{-1/2}\mathbf 1_{I_{1}},\qquad f_{2}:=L^{-1/2}\mathbf 1_{I_{2}}.$$
Define the declared path components by
$$\psi_{j}(x_{1},x_{2},x_{3}):=f_{j}(x_{1})\,g(x_{2},x_{3})\qquad(j=1,2).$$
In these SI conventions each $f_j$ has unit $\mathrm m^{-1/2}$ and each
$\psi_j$ has unit $\mathrm m^{-3/2}$, as required for a normalized position
wave function on $\mathbb R^3$; the probabilities below are dimensionless.
A **slab bin** is a set $B_{1}\times\mathbb R^{2}$ with $B_{1}\subseteq\mathbb R$
Borel. Then:

(a) $\psi_{1},\psi_{2}\in H_{0}=L^{2}(\mathbb R^{3};\mathbb C)$ with
$\|\psi_{1}\|=\|\psi_{2}\|=1$, so the declared data are admissible, and the
model is admissible at every phase: on $I_{1}\setminus I_{2}$ the combination $f_{1}+e^{i\varphi}f_{2}$ equals $L^{-1/2}$ independently of $\varphi$, and that region has length $d>0$. Since $\|g\|=1$, $\|\psi_1+e^{i\varphi}\psi_2\|^2=\|f_1+e^{i\varphi}f_2\|^2\ge d/L>0$.

(b) For every slab bin, with $N_{\varphi}:=\|f_{1}+e^{i\varphi}f_{2}\|^{2}=2+\frac{2(L-d)}{L}\cos\varphi$,
$$\mu^{G}_{\rho_{\mathrm{coh}}(\varphi)}(B_{1}\times\mathbb R^{2})=\frac{1}{N_{\varphi}}\int_{B_{1}}|f_{1}+e^{i\varphi}f_{2}|^{2}dx,\qquad \mu^{G}_{\rho_{\mathrm{mix}}(w)}(B_{1}\times\mathbb R^{2})=\frac{w\,|B_{1}\cap I_{1}|+(1-w)\,|B_{1}\cap I_{2}|}{L}.$$

(c) The coherent density $|f_{1}+e^{i\varphi}f_{2}|^{2}$ equals
$\frac{2(1+\cos\varphi)}{L}$ on $O$, equals $\frac1L$ on the symmetric
difference $I_{1}\triangle I_{2}$, and vanishes outside $I_{1}\cup I_{2}$;
consequently
$$\mu^{G}_{\rho_{\mathrm{coh}}(\varphi)}(O\times\mathbb R^{2})=\frac{(L-d)(1+\cos\varphi)}{L+(L-d)\cos\varphi},\qquad \mu^{G}_{\rho_{\mathrm{coh}}(\varphi)}\bigl((I_{j}\setminus I_{3-j})\times\mathbb R^{2}\bigr)=\frac{d}{2L+2(L-d)\cos\varphi}$$
for $j=1,2$, and for the balanced which-path preparation $w=\frac12$
$$\mu^{G}_{\rho_{\mathrm{mix}}(1/2)}(O\times\mathbb R^{2})=\frac{L-d}{L},\qquad \mu^{G}_{\rho_{\mathrm{mix}}(1/2)}\bigl((I_{j}\setminus I_{3-j})\times\mathbb R^{2}\bigr)=\frac{d}{2L}.$$

(d) At $\varphi=\pi$ the coherent law assigns probability zero to the whole
overlap region $O$ of positive length, while the balanced which-path law
assigns it probability $(L-d)/L>0$; every slab bin contained in $O$ has
coherent probability zero, every slab bin meeting $I_{1}\setminus I_{2}$ or
$I_{2}\setminus I_{1}$ in a set of positive length has positive coherent
probability, and every slab bin meeting $O$ in a set of positive length has
positive which-path probability.

The computation is exact in the declared model; it asserts no detector
response, no sampling model, no measured count and no laboratory realization.

## Verification

**Given:** The lengths $0<d<L<\infty$ and the intervals $I_{1},I_{2}$; the unit class $g$; the amplitudes $f_{1},f_{2}$ and components $\psi_{1},\psi_{2}$; a Borel set $B_{1}\subseteq\mathbb R$; phases $\varphi\in\mathbb R$ and weights $w\in[0,1]$; the Axiom of Countable Choice and the Axiom of Choice.

**Proof technique:** direct; compute the product-form norms by Tonelli, read the piecewise-constant densities and their integrals from the interval lengths, apply the declared laws to slab bins, and evaluate the overlap, outer and dark cases.

[L1] The model's coherent and which-path laws are $\mu^{G}_{\rho_{\mathrm{coh}}}(B)=\|\psi_{1}+e^{i\varphi}\psi_{2}\|^{-2}\int_{B}|\psi_{1}+e^{i\varphi}\psi_{2}|^{2}dx$ and $\mu^{G}_{\rho_{\mathrm{mix}}(w)}(B)=w\int_{B}|\psi_{1}|^{2}dx+(1-w)\int_{B}|\psi_{2}|^{2}dx$ for unit components ([[pthm-nrqm-interference-coherent-and-mixture-detection-laws]] clauses (a) and (b), [[def-nrqm-interference-two-path-preparation-and-detection-model]] clauses (c)-(e), [[post-nrqm-framework-observable-and-probability]] clause (ii)); the position density and the squared component norm agree almost everywhere ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[L2] Tonelli's theorem iterates integrals of nonnegative product-measurable functions over $\sigma$-finite products ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[L3] A box in $\mathbb R^{n}$ is Lebesgue measurable of measure the product of its side lengths, for every choice of included faces ([[thm-lebesgue-measure-of-a-box-of-every-kind]]); the integral of a nonnegative simple function is the finite sum of value times measure of its level set ([[def-integral-of-a-nonnegative-simple-function]]), and the integral is additive over disjoint measurable sets ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[L4] Under the Cartesian identification $\mathbb R^3=\mathbb R\times\mathbb R^2$, write $\beta_n:=\lambda_n|_{\mathcal B(\mathbb R^n)}$. The Borel restrictions $\beta_1$ and $\beta_2$ are sigma-finite by exhaustion with bounded boxes. The Borel product theorem identifies $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R^2)$ with $\mathcal B(\mathbb R^3)$ ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]), and the sigma-finite product theorem gives $\beta_1\times\beta_2$ with its rectangle formula ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]). The measures $\beta_3$ and $\beta_1\times\beta_2$ agree on rational half-open boxes by that formula and [L3]. The family of rational half-open boxes together with $\varnothing$ is a $\pi$-system and generates $\mathcal B(\mathbb R^3)$ ([[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]]); the rational cubes $(-n,n]^3$ are an increasing finite-measure exhaustion. Sigma-finite measure uniqueness therefore gives $\beta_3=\beta_1\times\beta_2$ ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]). Finally, each Lebesgue-measurable real and imaginary part of $g$ has a Borel representative: apply completion of Borel measure to its rational superlevel sets; outside their countable union of null exceptions, the rational cuts determine the function ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]). If two representatives differ on a null set $N\subseteq\mathbb R^2$, choose a Borel null cover $Z$; the lifted exceptional set is contained in $\mathbb R\times Z$, which is null by the product rectangle formula. Thus the corresponding product amplitudes define the same $L^2(\mathbb R^3)$ class, and Tonelli's product integral is the Lebesgue integral used for the model's state space.

1.1 [Product-form norms] By [L4], the Lebesgue integral on $\mathbb R^3$ of these product functions is the product-measure integral. Thus, for $j=1,2$, Tonelli and $\|g\|=1$, $\|f_{j}\|^{2}=|I_{j}|/L=1$ give $\|\psi_{j}\|^{2}=\int_{\mathbb R}\int_{\mathbb R^{2}}|f_{j}(x_{1})|^{2}|g(x_{2},x_{3})|^{2}d(x_{2},x_{3})dx_{1}=\|f_{j}\|^{2}\|g\|^{2}=1\cdot1=1$, so $\psi_{1},\psi_{2}$ are nonzero unit classes. Since $f_{1}=L^{-1/2}$ on $I_{1}\setminus I_{2}$, a set of length $d>0$, one has $f_{1}+e^{i\varphi}f_{2}\ne0$ for every $\varphi$. [given, L2, L3, L4, algebra]

2.1 [Densities] On $O$ both indicators equal one, so $|f_{1}+e^{i\varphi}f_{2}|^{2}=\frac{|1+e^{i\varphi}|^{2}}{L}=\frac{2(1+\cos\varphi)}{L}$; on $I_{1}\setminus I_{2}$ only $f_{1}$ contributes, giving $\frac1L$, and symmetrically on $I_{2}\setminus I_{1}$; outside $I_{1}\cup I_{2}$ both vanish. Integrating over $\mathbb R$ gives $\|f_{1}+e^{i\varphi}f_{2}\|^{2}=\frac{2(1+\cos\varphi)(L-d)}{L}+\frac{2d}{L}=2+\frac{2(L-d)\cos\varphi}{L}=N_{\varphi}$, so the model is admissible at every phase. [step 1.1, L3, algebra]

3.1 [Slab laws] Write $\psi_{1}+e^{i\varphi}\psi_{2}=(f_{1}+e^{i\varphi}f_{2})g$ and $|\psi_{1}+e^{i\varphi}\psi_{2}|^{2}=|f_{1}+e^{i\varphi}f_{2}|^{2}|g|^{2}$; by [L4] and Tonelli over $B_{1}\times\mathbb R^{2}$, $\int_{B_{1}\times\mathbb R^{2}}|\psi_{1}+e^{i\varphi}\psi_{2}|^{2}d(x_{1},x_{2},x_{3})=\bigl(\int_{B_{1}}|f_{1}+e^{i\varphi}f_{2}|^{2}dx\bigr)\|g\|^{2}=\int_{B_{1}}|f_{1}+e^{i\varphi}f_{2}|^{2}dx$, and likewise $\int_{B_{1}\times\mathbb R^{2}}|\psi_{j}|^{2}=\int_{B_{1}}|f_{j}|^{2}dx=|B_{1}\cap I_{j}|/L$; substituting into [L1] gives the two displayed laws of (b). [step 1.1, step 2.1, L1, L2, L3, L4, algebra]

4.1 [Overlap, outer and dark values] Using the density values of step 2.1 and additivity of the integral, $\int_{O}|f_{1}+e^{i\varphi}f_{2}|^{2}dx=\frac{2(1+\cos\varphi)(L-d)}{L}$ and $\int_{I_{j}\setminus I_{3-j}}|f_{1}+e^{i\varphi}f_{2}|^{2}dx=\frac dL$, so the coherent values of (c) follow after dividing by $N_{\varphi}=2+\frac{2(L-d)\cos\varphi}{L}$: for the overlap, $\frac{2(1+\cos\varphi)(L-d)/L}{2(L+(L-d)\cos\varphi)/L}=\frac{(L-d)(1+\cos\varphi)}{L+(L-d)\cos\varphi}$, and for each outer region $\frac{d/L}{2(L+(L-d)\cos\varphi)/L}=\frac{d}{2L+2(L-d)\cos\varphi}$; the two outer values and the overlap value sum to one. The which-path values follow from $|B_{1}\cap I_{j}|/L$ with $w=\frac12$ and $|O|=L-d$, $|I_{j}\setminus I_{3-j}|=d$. At $\varphi=\pi$ the coherent overlap value is zero, the outer values are $d/(2L-2(L-d))=\frac12$ each, and the which-path overlap value is $\frac{L-d}{L}>0$ because $L>d$; a bin contained in $O$ has $|B_{1}\cap I_{1}|=|B_{1}\cap I_{2}|=|B_{1}|$ and coherent density zero there, while a bin meeting an outer region in a set of positive length meets $\{f_{1}+e^{i\varphi}f_{2}\ne0\}$ in a set of positive length, so its coherent probability is positive; the which-path positivity for bins meeting $O$ follows from $\frac12|B_{1}\cap I_{1}|/L>0$. This proves (c) and (d). [step 3.1, L3, algebra] ∎

## Remarks

- **The dark region is a feature of the declared flat model.** The vanishing of
  the coherent density on all of $O$ at $\varphi=\pi$ uses the flat amplitudes
  and the exact cancellation $f_{1}+e^{i\varphi}f_{2}=0$ there; a model with unequal
  weights or non-flat amplitudes need not vanish on a region. At $\varphi=\pi$,
  a slab bin $B_1\times\mathbb R^2$ has positive coherent probability exactly
  when $|B_1\cap(I_1\triangle I_2)|>0$; it has zero coherent probability
  exactly when this intersection has length zero. Adding points in $O$ or
  outside $I_1\cup I_2$ does not change that probability. These are ideal-bin
  probabilities; recorded-event probabilities require a declared response model.
- **No data are used.** The example computes probabilities in the declared
  model; it does not report counts, and the flat amplitudes are a declared
  idealization, not a measured profile.
