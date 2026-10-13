---
id: pthm-nrqm-many-body-thermal-equilibrium-characterization
aliases: [ nrqm-many-body-thermal-equilibrium-characterization ]
kind: physics-theorem
domain: physics
title: "The canonical preparation as the unique free-energy minimiser of the
  declared finite-sector model"
status: draft
origin: pipeline
dependency_level: 13
deps:
  [
    post-nrqm-many-body-canonical-equilibrium-ensemble,
    def-nrqm-many-body-framework-entropy-and-free-energy,
    def-nrqm-many-body-framework-declared-fixed-n-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-preparation-and-apparatus,
    thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum,
    thm-complex-spectral-theorem-for-normal-endomorphisms,
    cor-mean-value-theorem,
    thm-natural-logarithm-laws,
    thm-logarithm-derivative-and-integral,
    lem-nrqm-composites-rank-one-operator-calculus,
    def-natural-logarithm,
    def-hilbert-space,
    def-countable-choice
  ]
dependency_roles:
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional free-energy characterisation of the canonical
  preparation in the declared finite-sector many-body model at assigned
  temperature: the Gibbs operator is a declared preparation, its mean energy and
  entropy are the finite Gibbs sums, and it is the unique minimiser of the
  free-energy functional over all declared sector preparations, the minimum
  being the equilibrium free energy. The theorem is conditional on the adopted
  ensemble postulate and the declared model; it asserts no equilibration, no
  approach to equilibrium, no thermodynamic limit and no measured thermal
  quantity."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.4
        printed pages 129-131 (PDF pages 137-139): the Gibbs distribution as the
        maximum-entropy distribution for given internal energy, U = Tr(H rho), s
        = beta U + ln Z (6.97), S = k_B s (6.98) and F = -k_B T ln Z (6.99)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics
        (HSE, January 10, 2023), Section 1.1.4 printed pages 14-15: the
        maximal-entropy derivation of the Gibbs distribution, the free energy F
        = -T ln Z and the relations F = E - T S, S = -dF/dT"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the canonical equilibrium-ensemble postulate
[[post-nrqm-many-body-canonical-equilibrium-ensemble]] together with the
state, probability, dynamics and preparation postulates P1, P2, P4, P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-preparation-and-apparatus]]) in the readings of
[[def-nrqm-many-body-framework-entropy-and-free-energy]] and
[[def-nrqm-observables-framework-observable-and-outcome-law]], and assume the
Axiom of Countable Choice ([[def-countable-choice]]). Work in the
finite-dimensional sector class of the entropy definition: the declared
fixed-$N$ model of
[[def-nrqm-many-body-framework-declared-fixed-n-model]] has sector space
$\mathfrak H_N^\sigma$ of finite dimension $D\ge1$ with self-adjoint energy
operator $H_N^\sigma$, assigned temperature $T>0$, inverse temperature
$\beta=1/(k_BT)$ and eigen-decomposition
$H_N^\sigma=\sum_{j=1}^DE_jT_{v_j,v_j}$ with orthonormal eigenbasis
$(v_1,\dots,v_D)$ and real eigenvalues $E_1,\dots,E_D$. Write
$q_j:=e^{-\beta E_j}/Z_N$ with $Z_N:=\sum_je^{-\beta E_j}$,
$\rho_\beta:=\sum_jq_jT_{v_j,v_j}$, and let
$F(\rho)=\operatorname{tr}(\rho H_N^\sigma)-k_BT\,s(\rho)$ and
$F_{\mathrm{eq}}:=-k_BT\log Z_N$ be the free-energy functional and
equilibrium free energy of
[[def-nrqm-many-body-framework-entropy-and-free-energy]] clauses (e).
Then:

(a) *the canonical preparation*: $Z_N\in(0,\infty)$ is a finite sum,
$q_j>0$, $\sum_jq_j=1$, and $\rho_\beta$ is a declared sector preparation of
the model with
$$\operatorname{tr}(\rho_\beta H_N^\sigma)=\frac1{Z_N}\sum_{j=1}^DE_je^{-\beta E_j},\qquad s(\rho_\beta)=\log Z_N+\beta\operatorname{tr}(\rho_\beta H_N^\sigma);$$

(b) *free-energy minimum*: for every declared sector preparation $\rho$ one
has $F(\rho)\ge F_{\mathrm{eq}}=-k_BT\log Z_N$;

(c) *uniqueness*: equality $F(\rho)=F_{\mathrm{eq}}$ holds if and only if
$\rho=\rho_\beta$; consequently the canonical preparation is the unique
minimiser of the free-energy functional over the declared sector
preparations, and $F(\rho_\beta)=F_{\mathrm{eq}}$;

(d) *degenerate case*: if $H_N^\sigma=c\,\mathrm{id}$ for a real $c$, then
$Z_N=De^{-\beta c}$, $\rho_\beta=D^{-1}\mathrm{id}$,
$s(\rho_\beta)=\log D$ and $F_{\mathrm{eq}}=c-k_BT\log D$;

(e) *scope*: the statement is conditional on the adopted ensemble postulate
and on the declared finite-dimensional model; it asserts no equilibration of
any preparation towards $\rho_\beta$, no rate of approach, no thermodynamic
limit, no pressure or volume variable, and, for a laboratory sample, it
inherits the tested identification of the preparation and temperature
assignment of P7.

## Facts & Assumptions

**Given:** the declared finite-dimensional sector model with energy operator $H_N^\sigma$, eigen-decomposition and parameters $\beta$, $T$, $k_B$; the canonical preparation $\rho_\beta$ and the functional $F$ of the statement.

[F1] **Supplied finite Gibbs data.** For the finite-dimensional self-adjoint $H_N^\sigma$ with eigenvalues $E_1,\dots,E_D$ and orthonormal eigenbasis $(v_1,\dots,v_D)$, and $\beta>0$: $Z_N=\sum_je^{-\beta E_j}\in(0,\infty)$, $\rho_\beta\in\mathcal D(\mathfrak H_N^\sigma)$, $\operatorname{tr}(\rho_\beta H_N^\sigma)=Z_N^{-1}\sum_je^{-\beta E_j}E_j$, $\operatorname{tr}(\rho_\beta H_N^\sigma)-\beta^{-1}s(\rho_\beta)=-\beta^{-1}\log Z_N$, and for every density operator $\rho$ on $\mathfrak H_N^\sigma$ one has $\operatorname{tr}(\rho H_N^\sigma)-\beta^{-1}s(\rho)\ge-\beta^{-1}\log Z_N$ with $s(\rho)\le\log D$ and equality $s(\rho)=\log D$ exactly for $\rho=D^{-1}\mathrm{id}$ ([[thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]] clauses (a), (b), (c)).

[F2] **Spectral decomposition of a preparation.** A density operator $\rho$ on the finite-dimensional space $\mathfrak H_N^\sigma$ has the form $\rho=\sum_{i=1}^Dw_iT_{u_i,u_i}$ with $w_i\ge0$, $\sum_iw_i=1$ and $(u_i)$ an orthonormal eigenbasis, by [[thm-complex-spectral-theorem-for-normal-endomorphisms]] and [[lem-nrqm-composites-rank-one-operator-calculus]] applied as in [[thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]] clause (a); with $p_{ij}:=|\langle u_i,v_j\rangle|^2$ one has $\sum_jp_{ij}=1$ and $\sum_ip_{ij}=1$, because $(u_i)$ and $(v_j)$ are orthonormal bases.

[F3] **Exact scalar logarithm suppliers.** For $x>0$, $\log'(x)=1/x$ and $\log x=\int_1^xdt/t$ ([[thm-logarithm-derivative-and-integral]]); $\log$ is continuous, $\log1=0$ and $\log(x/y)=\log x-\log y$ for $x,y>0$ ([[thm-natural-logarithm-laws]]). For a continuous real function on $[a,b]$ differentiable on $(a,b)$, $a<b$, there is $\xi\in(a,b)$ with $f(b)-f(a)=f'(\xi)(b-a)$ ([[cor-mean-value-theorem]]). The strict tangent bound and its equality case are derived below from these statements, rather than assumed from a strict Jensen theorem.

## Proof

**Proof technique:** direct; express the free-energy difference as a sum of nonnegative scalar defects over the two orthonormal bases, with the zero-weight convention made explicit; the strict logarithm tangent bound determines the equality case, including degenerate Gibbs eigenspaces.

**Given:** the data of the statement and [F1]-[F3].

1.1 [The canonical preparation and its data] By [F1], $Z_N=\sum_je^{-\beta E_j}$ is a finite sum with $0<Z_N<\infty$; since $D\ge1$ each term is positive, so $q_j=e^{-\beta E_j}/Z_N>0$ with $\sum_jq_j=1$. By [F1] the operator $\rho_\beta=\sum_jq_jT_{v_j,v_j}$ is a density operator on $\mathfrak H_N^\sigma$, hence a declared sector preparation of the model, and the two displayed identities are the clauses of [F1] together with the entropy definition. This proves (a). [F1, algebra]

1.2 [Strict scalar defects, including zero weights] By [F3] and the mean value theorem applied to $\log$ between $1$ and $t>0$, $t\ne1$, one has $\log t=(t-1)/\xi$ with $\xi$ strictly between $1$ and $t$; for $t>1$ this is less than $t-1$, and for $0<t<1$ it is also less than $t-1$ because the numerator is negative and $\xi<1$. Thus $\log t\le t-1$, with equality exactly at $t=1$. For $w\ge0$, $r>0$ define $b(w,r):=w\log(w/r)$ when $w>0$ and $b(0,r):=0$, and $d(w,r):=b(w,r)-w+r$. If $w>0$, apply the bound to $t=r/w$ and the quotient law to get $d(w,r)\ge0$, with equality exactly at $w=r$; if $w=0$, $d(0,r)=r>0$. Likewise $h(q,r):=\log r+(q-r)/r-\log q\ge0$ for $q,r>0$, with equality exactly at $q=r$, by applying the bound to $t=q/r$. [F3, algebra]

1.3 [The degenerate case] If $H_N^\sigma=c\,\mathrm{id}$ then $E_j=c$ for all $j$ and [F1] gives $Z_N=De^{-\beta c}$, $q_j=D^{-1}$, $\rho_\beta=D^{-1}\mathrm{id}$; by [F1] $s(\rho_\beta)=\log D$ and $F_{\mathrm{eq}}=-k_BT\log(De^{-\beta c})=c-k_BT\log D$. This proves (d). [F1, algebra]

2.1 [The free-energy difference for every mixed preparation] Let $\rho=\sum_iw_iT_{u_i,u_i}$ be as in [F2] and put $p_{ij}=|\langle u_i,v_j\rangle|^2$, $r_i=\sum_jp_{ij}q_j$. Each $r_i>0$ and $\sum_ir_i=\sum_jq_j\sum_ip_{ij}=1$. Use the entropy convention $\eta(w)=w\log w$ for $w>0$ and $\eta(0)=0$ (the notation $0\log0=0$ does not define $\log0$). The trace pairing and the entropy definition give $\operatorname{tr}(\rho H_N^\sigma)=\sum_{i,j}w_ip_{ij}E_j$ and $s(\rho)=-\sum_i\eta(w_i)$. Since $\beta E_j=-\log q_j-\log Z_N$, $\Delta:=\beta(F(\rho)-F_{\mathrm{eq}})=\sum_i\bigl(\eta(w_i)-w_i\sum_jp_{ij}\log q_j\bigr)$. Define $a_i:=\log r_i-\sum_jp_{ij}\log q_j=\sum_jp_{ij}h(q_j,r_i)$, the last equality using $\sum_jp_{ij}=1$ and $\sum_jp_{ij}(q_j-r_i)=0$. Step 1.2 gives $a_i\ge0$, with equality exactly when $q_j=r_i$ for every $j$ with $p_{ij}>0$. By the quotient law for positive $w_i$ and by the explicit zero convention otherwise, $\Delta=\sum_i b(w_i,r_i)+\sum_iw_i a_i=\sum_i d(w_i,r_i)+\sum_iw_i a_i$, because $\sum_i(w_i-r_i)=0$. All summands are nonnegative, so $F(\rho)\ge F_{\mathrm{eq}}$, proving (b) for every density operator, including those with zero eigenvalues. [F1, F2, F3, step 1.2, algebra]

3.1 [Equality, strict zero-weight exclusion and degeneracies] If $F(\rho)=F_{\mathrm{eq}}$, the finite sum of nonnegative defects in step 2.1 vanishes. Hence $d(w_i,r_i)=0$ for every $i$; step 1.2 gives $w_i=r_i>0$, since $d(0,r_i)=r_i>0$ excludes every zero weight. Thus $w_i a_i=0$ forces $a_i=0$ for every row, and step 2.1 gives $q_j=r_i=w_i$ whenever $p_{ij}>0$. In the expansion of $u_i$ in the orthonormal basis $(v_j)$, the coefficients at all $q_j\ne w_i$ therefore vanish, so $\rho_\beta u_i=w_i u_i$. Since also $\rho u_i=w_i u_i$ and $(u_i)$ is a basis, the two operators agree: $\rho=\rho_\beta$. This argument allows arbitrary changes of basis within any repeated-eigenvalue Gibbs eigenspace. Conversely $\rho=\rho_\beta$ gives equality by [F1]. Together with step 2.1, this proves (c) with no full-rank assumption on the competing preparation. [F1, F2, step 1.2, step 2.1, algebra]

4.1 [Conclusion and scope] Step 1.1 proves (a), step 2.1 proves (b), step 3.1 proves (c), and step 1.3 proves (d). The argument is an optimisation inside the declared finite-dimensional sector at the adopted ensemble parameters; no equilibration, rate, thermodynamic limit or measured thermal quantity entered, which is (e). [step 1.1, step 1.2, step 2.1, step 1.3, step 3.1] ∎

## Remarks

- **Why the minimiser is unique.** The equality analysis shows that a minimiser must be diagonal in the same eigenbasis with the same weights; it excludes the block-diagonal counterexample in which $\rho$ is diagonal in a different basis, because equal weights on a degenerate eigenspace reassemble the same projector.
- **The adopted part.** The minimum property is a theorem about the functional; that a physical sample is described by $\rho_\beta$ remains the adopted assumption of [[post-nrqm-many-body-canonical-equilibrium-ensemble]], not a consequence of the optimisation.
