---
id: pthm-nrqm-approximations-degenerate-first-order-splitting
aliases: [nrqm-approximations-degenerate-first-order-splitting]
kind: physics-theorem
domain: physics
title: "Degenerate stationary perturbation: the perturbed eigenvalues stay within 4 lambda^2 v^2/g of the first-order shifts, and no branch relaxation is asserted"
status: draft
origin: session
dependency_level: 9
deps: [lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus, def-nrqm-approximations-framework-perturbed-family-model, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-observables-framework-observable-and-outcome-law, thm-kato-rellich, thm-nrqm-controlled-dynamics-degenerate-feshbach-error, thm-self-adjoint-norm-and-spectrum-extrema, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus: mathematical-premise
  def-nrqm-approximations-framework-perturbed-family-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  thm-kato-rellich: mathematical-premise
  thm-nrqm-controlled-dynamics-degenerate-feshbach-error: mathematical-premise
  thm-self-adjoint-norm-and-spectrum-extrema: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The degenerate stationary perturbation statement for the declared perturbed-family model with an isolated finite-multiplicity label: self-adjointness of the family, the bounded reduced inverse on the complementary subspace, and the localisation of every perturbed eigenvalue in the controlled gap window within 4 lambda^2 v^2/g of the set of first-order shifts E + lambda spec(P0VP0). The theorem asserts no exact eigenvalue correspondence, no branch ordering, no instantaneous selection of the lowest branch, no relaxation and no measurement."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.1.2 printed pages 206-208 (PDF pages 214-216): the failure of the non-degenerate expansion at a degenerate level, the diagonalisation of the perturbation eEz within the four-dimensional n=2 subspace and the eigenvalues +/-3eEa0 and 0"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.6 printed pages 153-159 (PDF pages 165-171): resolvent convergence, perturbed spectral projections and the localisation of perturbed eigenvalues for bounded perturbations"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework data and the declared perturbed-family model of
[[def-nrqm-approximations-framework-perturbed-family-model]] with $H_{0}$
self-adjoint on $D(H_{0})$, $V=V^{*}\in\mathcal B(\mathfrak H)$, $v=\|V\|>0$,
$H(\lambda)=H_{0}+\lambda V$ on $D(H_{0})$ for real $\lambda$, and an isolated
eigenvalue $E$ of $H_{0}$ of **finite multiplicity $r\ge1$** with gap at
least $g>0$,
$\operatorname{dist}(E,\sigma(H_{0})\setminus\{E\})\ge g$. Let
$P_{0}=E_{H_{0}}(\{E\})$, $Q_{0}=I-P_{0}$, and
$$V_{E}:=\bigl(P_{0}VP_{0}\bigr)\big|_{P_{0}\mathfrak H}$$
the first-order operator of the model clause (c)(ii). Assume the Axiom of
Countable Choice and the Axiom of Choice as the choice hypotheses of the
suppliers. Then for every real $\lambda$ with $|\lambda|v<g/4$:

(a) $H(\lambda)$ is self-adjoint on $D(H_{0})$;

(b) for every real $z$ with $|z-E|+|\lambda|v\le g/2$, the restricted
operator $T_{\lambda}(z):=Q_{0}(H(\lambda)-z)Q_{0}$ on
$Q_{0}D(H_{0})=D(H_{0})\cap Q_{0}\mathfrak H$ has a bounded two-sided inverse
$B(z):Q_{0}\mathfrak H\to Q_{0}D(H_{0})$ with $\|B(z)\|\le4/g$;

(c) every real eigenvalue $z$ of $H(\lambda)$ with eigenvector $\psi\ne0$
and $|z-E|+|\lambda|v\le g/2$ lies within the first-order shift set:
$$\operatorname{dist}\bigl(z,\,E+\lambda\operatorname{spec}(V_{E})\bigr) \le\frac{4\lambda^{2}v^{2}}{g},$$
where $\operatorname{spec}(V_{E})\subseteq[-v,v]$ is the spectrum of the
Hermitian operator $V_{E}$ on the $r$-dimensional eigenspace; moreover
$P_{0}\psi\ne0$ for every such eigenvector. Every eigenvalue in the model's
followed cluster inside $|z-E|<g/2$ lies in this controlled window and
therefore obeys the same bound;

(d) *first-order content.* The eigenvalues of $V_{E}$ are the model's
first-order shifts: the set $E+\lambda\operatorname{spec}(V_{E})$ has at most
$r$ points, all within $|\lambda|v$ of $E$; the entire followed cluster, and every other eigenvalue in the window of (c),
are localised at distance $O(\lambda^{2}v^{2}/g)$ from this set, and no
ordering or one-to-one correspondence between the $r$ spectral branches and
the points of $\operatorname{spec}(V_{E})$ is asserted;

(e) *No relaxation or selection.* The theorem is a statement about the
spectra of the declared family. It asserts no instantaneous transition of any
preparation to the branch of the smallest value of
$\operatorname{spec}(V_{E})$, no relaxation to a lowest branch, no
equilibration and no measurement; which spectral subspace a preparation
occupies is fixed by the preparation and by the evolution postulate P4 of the
declared model, not by the label $E_{\lambda}$;

(f) the theorem is conditional on the strict positive gap, on the finite
multiplicity of $E$ and on the boundedness of $V$; it asserts nothing about
degenerate essential-spectrum labels, gap-closing families, unbounded
perturbations or time-dependent couplings.

## Facts & Assumptions

**Given:** the declared perturbed-family model with the isolated label $E$ of finite multiplicity $r$, gap $g$, projections $P_{0},Q_{0}$, perturbation $V$ with $v=\|V\|>0$, real $\lambda$ with $|\lambda|v<g/4$, and the choice hypotheses.

[F1] **Self-adjointness.** For a self-adjoint $A$ and a symmetric $B$ with $D(A)\subseteq D(B)$ and $A$-bound less than one, $A+B$ on $D(A)$ is self-adjoint ([[thm-kato-rellich]]).

[F2] **Supplied degenerate reduction.** Under the stated hypotheses on
$H_{0},E,g,r,P_{0},Q_{0},V,v,\lambda$ and for every real $z$ with
$|z-E|+|\lambda|v\le g/2$: the restricted operator $T_{\lambda}(z)$ has a
bounded two-sided inverse $B(z)$ with $\|B(z)\|\le4/g$; if such a $z$ is an
eigenvalue with eigenvector $\psi\ne0$, then $P_{0}\psi\ne0$ and
$$\bigl[EP_{0}+\lambda P_{0}VP_{0}-\lambda^{2}P_{0}VQ_{0}B(z)Q_{0}VP_{0}\bigr]P_{0}\psi =z\,P_{0}\psi ;$$
and every such eigenvalue satisfies
$\operatorname{dist}(z,E+\lambda\operatorname{spec}(V_{E}))\le4\lambda^{2}v^{2}/g$
([[thm-nrqm-controlled-dynamics-degenerate-feshbach-error]] clauses (a)-(c)).

[F3] **Norm-spectrum extrema.** For a bounded self-adjoint operator $T$ on a complex Hilbert space, $\|T\|=\max\{|\min\sigma(T)|,|\max\sigma(T)|\}$, so $\sigma(T)\subseteq[-\|T\|,\|T\|]$; in particular $\operatorname{spec}(V_{E})\subseteq[-v,v]$ because $\|V_{E}\|\le\|V\|=v$ for the compression of a bounded self-adjoint operator ([[thm-self-adjoint-norm-and-spectrum-extrema]], [[def-nrqm-approximations-framework-perturbed-family-model]] clause (c)(ii)).

[F4] **Model data.** The model declares $H(\lambda)$ as its sharp energy observable at coupling $\lambda$, with the label $E$, projections $P_{0},Q_{0}$, first-order operator $V_{E}$ and coupling range as in its clauses (b) and (c) ([[def-nrqm-approximations-framework-perturbed-family-model]]).

[F5] **Distance resolvent bound.** On arbitrary Hilbert space under CC, the self-adjoint spectral supplier gives $\|(z-H_0)^{-1}\|\le1/\operatorname{dist}(z,\sigma(H_0))$ and the exact domain of that inverse ([[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]]). Neumann inversion of $I-\lambda V(z-H_0)^{-1}$ gives a resolvent of $H(\lambda)$ whenever the distance is larger than $|\lambda|v$.

## Proof

**Proof technique:** direct; instantiate Kato-Rellich and the supplied Feshbach reduction at the model's data, and bound the first-order spectrum by the norm-spectrum theorem.

**Given:** the data of the statement and [F1]-[F5].

1.1 [Clause (a)] $V$ is bounded and symmetric with $D(H_{0})\subseteq D(V)=\mathfrak H$ and $H_{0}$-bound $0<1$, since $\|Vu\|\le v\|u\|$; [F1] gives that $H(\lambda)=H_{0}+\lambda V$ on $D(H_{0})$ is self-adjoint for every real $\lambda$, in particular for $|\lambda|v<g/4$. [F1, F4, given]

1.2 [Clauses (b) and (c)] With $H(\lambda)$ self-adjoint, the hypotheses of [F2] are exactly the model's data: $E$ is an isolated eigenvalue of finite multiplicity $r\ge1$ with gap at least $g$, $P_{0}$ is its orthogonal spectral projection, $V$ is self-adjoint and bounded with norm $v$, and $|\lambda|v<g/4$ implies in particular that the range of $z$ in clause (b) is nonempty (it contains $z=E$, since $|\lambda|v<g/4\le g/2$). Hence [F2] supplies the bounded two-sided inverse $B(z)$ with $\|B(z)\|\le4/g$, the nonvanishing $P_{0}\psi$ and the eigenvector reduction, and the localisation inequality $\operatorname{dist}(z,E+\lambda\operatorname{spec}_{P_{0}\mathfrak H}(P_{0}VP_{0}))\le4\lambda^{2}v^{2}/g$ for every eigenvalue $z$ in that window; the spectrum there is that of the model's $V_{E}$. For the full followed cluster, put $t=|\lambda|v<g/4$ and let $z$ be its real eigenvalue, so $|z-E|<g/2$ by the model's cluster definition. Every other $s\in\sigma(H_0)\setminus\{E\}$ satisfies $|s-z|\ge g-|z-E|>g/2>t$. If also $|z-E|>t$, [F5] and Neumann inversion would put $z$ in the resolvent of $H(\lambda)$, a contradiction. Hence $|z-E|\le t$, so $|z-E|+t\le2t<g/2$ and the preceding reduction applies to every cluster eigenvalue. This proves the full claims (b),(c). [F2, F4, F5, given, algebra]

2.1 [Clause (d)] By [F3] applied to the bounded self-adjoint compression $V_{E}$: $\|V_{E}\|\le\|V\|=v$ and $\operatorname{spec}(V_{E})\subseteq[-v,v]$, so every point of $E+\lambda\operatorname{spec}(V_{E})$ lies in $[E-|\lambda|v,E+|\lambda|v]$; $\operatorname{spec}(V_{E})$ is finite because $P_{0}\mathfrak H$ has dimension $r$, so the set has at most $r$ points. The localisation of clause (c) is precisely the statement that each perturbed label lies at distance $O(\lambda^{2}v^{2}/g)$ from that set; no ordering statement is contained in [F2], and none is asserted here. This is (d). [F3, step 1.2, given, algebra]

2.2 [Clause (e)] The argument used only spectral data of the declared family: self-adjointness of $H(\lambda)$, the reduced inverse on the complementary subspace, and the eigenvector reduction with $P_{0}\psi\ne0$. No evolution, no coupling ramp, no rate, no environment and no measurement entered the proof. A statement about which spectral subspace of $H(\lambda)$ a preparation occupies would require the preparation and the evolution law of P4, which are not used here; in particular the analysis of the label $E_{\lambda}$ does not force an instantaneous transition to the branch belonging to the smallest element of $\operatorname{spec}(V_{E})$. This is (e). [step 1.2, F2, F3, F4, given]

3.1 [Clause (f)] All hypotheses used are the strict positive gap, the finite multiplicity of $E$, the boundedness of $V$ and the coupling range $|\lambda|v<g/4$; none of the excluded configurations entered the arguments of steps 1.1-2.2. [F1, F2, given] ∎

## Remarks

- **Why the first-order operator, not the full perturbation.** The supplied reduction shows that the perturbed labels are localised at the spectrum of the compression $P_{0}VP_{0}$, which is the model's first-order shift data; the second-order remainder is bounded uniformly by $4\lambda^{2}v^{2}/g$, independently of the structure of the perturbation inside the eigenspace.
- **No branch selection.** The statement is the corrected form of the textbook assertion that a degenerate level "immediately" moves to its lowest branch; only the spectral splitting is deduced here. Population of branches is a question about the preparation and its dynamics, not about the eigenvalue asymptotics.
