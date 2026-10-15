---
id: pthm-td-finite-mode-occupation-and-trace-formulas
kind: physics-theorem
domain: physics
title: Finite bosonic and fermionic mode partition and occupation formulas
status: draft
origin: pipeline
library: physics
dependency_level: 1
deps: [def-axiom-of-choice, def-countable-choice, def-nrqm-many-body-framework-entropy-and-free-energy, def-nrqm-framework-quantities-and-units, def-td-si-quantities, def-tdmath-countable-canonical-model, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, post-nrqm-many-body-canonical-equilibrium-ensemble, pthm-nrqm-many-body-thermal-occupation-predictions, thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace, lem-nrqm-many-body-two-level-thermal-formulas]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-tdmath-countable-canonical-model: mathematical-premise
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  pthm-nrqm-many-body-thermal-occupation-predictions: physical-result
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace: mathematical-premise
  lem-nrqm-many-body-two-level-thermal-formulas: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: Declared finite lists of independent bosonic one-mode Fock systems or fermionic two-level occupation systems at assigned positive temperature; no interacting, infinite-mode, continuum, condensation, measured-occupation, or thermalization conclusion is asserted.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§3.5–3.6 (printed pp. 77–106)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§5.6–5.7 (printed pp. 277–303)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: pass
---

## Statement

Assume AC and Countable Choice and adopt the quantum Gibbs preparation of [[post-nrqm-many-body-canonical-equilibrium-ensemble]] at assigned temperature $T>0$ kelvins, with $\beta=(k_{\mathrm B}T)^{-1}$ in $\mathrm{J^{-1}}$. A finite independent mode list means an integer $m\ge1$ and, for each $r\in\{1,\ldots,m\}$, a declared type B or F and an excitation energy $\varepsilon_r>0$ joules. For type B take the one-mode Fock Hilbert space with complete number basis $(e_n)_{n\in\mathbb N_0}$ and self-adjoint occupation operator $N_re_n=ne_n$ on its exact diagonal domain as in [[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]]. For type F take $\mathcal H_r=\mathbb C^2$ with orthonormal basis $f_0,f_1$ and $N_rf_n=nf_n$. In either case put $H_r=\varepsilon_rN_r$, and write $u_{r,n}=e_n$ or $f_n$ according to the factor type. Define $\mathcal H^{(1)}=\mathcal H_1$ and recursively $\mathcal H^{(r+1)}=\mathcal H^{(r)}\widehat\otimes\mathcal H_{r+1}$ by the completed Hilbert tensor construction of [[lem-nrqm-composites-hilbert-tensor-construction]]; let $\mathcal H=\mathcal H^{(m)}$. The canonical orthonormal product basis is $u_{\mathbf n}=\bigotimes_r u_{r,n_r}$, indexed by $\mathbf n=(n_1,\ldots,n_m)\in\mathcal C:=\prod_r\mathcal C_r$, where $\mathcal C_r=\mathbb N_0$ for type B and $\mathcal C_r=\{0,1\}$ for type F. If all factors are F then $\mathcal C$ is finite; otherwise it is countably infinite and is enumerated by increasing $\sum_r n_r$ and lexicographic order within each finite level, which is finite because every $n_r\le\sum_r n_r$. For each factor put $\hat\varepsilon_r=\varepsilon_r/(1\,\mathrm J)$. Define the numerical energy map $\hat E:\mathcal C\to\mathbb R$ by $\hat E(\mathbf n)=\sum_{r=1}^m\hat\varepsilon_rn_r$ and the physical energy $E(\mathbf n)=(1\,\mathrm J)\hat E(\mathbf n)$. Define the numerical self-adjoint diagonal operator $\hat H$ by $\hat Hu_{\mathbf n}=\hat E(\mathbf n)u_{\mathbf n}$ on the exact domain
$$D(\hat H)=\Bigl\{\psi\in\mathcal H:\sum_{\mathbf n\in\mathcal C}\hat E(\mathbf n)^2|\langle\psi,u_{\mathbf n}\rangle|^2<\infty\Bigr\};$$
when $\mathcal C$ is finite, $\hat H$ is a finite real diagonal endomorphism and is self-adjoint; when $\mathcal C$ is countably infinite, the diagonal-operator lemma [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] gives $\hat H$ self-adjoint for the displayed enumeration. The physical total energy operator is $H=(1\,\mathrm J)\hat H$, with $Hu_{\mathbf n}=E(\mathbf n)u_{\mathbf n}$ and $D(H)=D(\hat H)$; multiplication by a nonzero real scalar preserves self-adjointness.
This sum-energy Hamiltonian with no interaction term is the definition of independence for this quantum model.

Assign each factor readout $(N_r,1)$ and the composite readout $(\mathcal N_r,1)$ as sharp observables in the sense of clause (c) of [[post-nrqm-many-body-canonical-equilibrium-ensemble]], with dimensionless particle-count unit. On $\mathcal H$ define
$$\mathcal N_r\psi=\sum_{\mathbf n\in\mathcal C}n_r\langle\psi,u_{\mathbf n}\rangle u_{\mathbf n},\qquad D(\mathcal N_r)=\Bigl\{\psi:\sum_{\mathbf n\in\mathcal C}n_r^2|\langle\psi,u_{\mathbf n}\rangle|^2<\infty\Bigr\}.$$
To specify the joint occupation readout using a single sharp observable, let $j(\mathbf n)$ be the zero-based position of $\mathbf n$ in the enumeration above (the same ordering on the finite set in the all-F case). Define $J\psi=\sum_{\mathbf n}j(\mathbf n)\langle\psi,u_{\mathbf n}\rangle u_{\mathbf n}$ on $D(J)=\{\psi:\sum_{\mathbf n}j(\mathbf n)^2|\langle\psi,u_{\mathbf n}\rangle|^2<\infty\}$. Assign $(J,1)$ as the dimensionless label readout, decoding $j(\mathbf n)$ as $\mathbf n$. These diagonal operators are self-adjoint by the same diagonal lemma (or finite diagonal matrices). Their spectral projections act by retaining the coordinates with $n_r\in B$ or $j(\mathbf n)\in B$, respectively, for a Borel set $B\subseteq\mathbb R$. Thus the decoded joint projections are $Q(A)\psi=\sum_{\mathbf n\in A}\langle\psi,u_{\mathbf n}\rangle u_{\mathbf n}$ for $A\subseteq\mathcal C$; these sums converge in $\mathcal H$, and countable additivity holds in the strong operator topology by square-summable coordinate tails. The adopted outcome law is $\operatorname{tr}(\rho_\beta Q(A))$, whose $r$th marginal is the outcome law of $\mathcal N_r$.

For one bosonic mode with excitation energy $\varepsilon>0$ joules, let $q=e^{-\beta\varepsilon}$ and let $N$ be its dimensionless occupation number. Its partition trace and mean occupation are
$$Z_B=(1-q)^{-1},\qquad \langle N\rangle_B=\frac{q}{1-q}=\frac1{e^{\beta\varepsilon}-1}.$$
For a fermionic two-level occupation system with energies $0,\varepsilon$, the partition sum and excited-state occupation are
$$Z_F=1+q,\qquad \langle N\rangle_F=\frac{q}{1+q}=\frac1{e^{\beta\varepsilon}+1}.$$
For a finite independent collection as defined above, write $K_\beta=e^{-\beta H}$ and $Z=\operatorname{Tr}K_\beta$. Then $0<Z<\infty$ and the joint occupation-basis law is $P_\beta(\mathbf n):=e^{-\beta E(\mathbf n)}/Z$. For each factor $r$, define its marginal law by $P_{\beta,r}(k):=\sum_{\mathbf n\in\mathcal C:\,n_r=k}P_\beta(\mathbf n)$. The trace satisfies $Z=\prod_{r=1}^m Z_r$, the joint law factorizes as $P_\beta(\mathbf n)=\prod_{r=1}^m(q_r^{n_r}/Z_r)$, and each marginal mean is the corresponding one-mode mean displayed above. These are exact model identities under the adopted preparation.

## Facts & Assumptions

**Given:** The finite independent mode models, positive mode energies, assigned $T>0$, and the adopted Gibbs preparation.

[F1] [[post-nrqm-many-body-canonical-equilibrium-ensemble]] clauses (a)(ii), (b), (c): use the declared number-variable mode model with $G=H$. For a bounded positive operator its extended trace is the basis sum; finiteness makes its square root Hilbert-Schmidt, hence the operator trace class with the same ordinary trace. Under AC and Countable Choice the model assigns $\rho_\beta=e^{-\beta H}/Z$ and the outcome law $\operatorname{tr}(\rho_\beta E_A(B))$ to each declared sharp observable $(A,u_A)$; its thermal mean is the spectral first moment when absolutely integrable.

[F2] [[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]] (current carrier status says published): for $\omega>0$ and $\beta>0$, the one-mode bosonic trace is $(1-e^{-\beta\omega})^{-1}$ and the number mean is $1/(e^{\beta\omega}-1)$. The full proof was inspected; its published carrier lacks the required audit marker, so this use remains escalated.

[F3] [[lem-nrqm-many-body-two-level-thermal-formulas]] (current carrier status says published): for energies $0,\varepsilon$ with $\varepsilon,\beta>0$, $Z=1+e^{-\beta\varepsilon}$ and the upper-level probability is $1/(e^{\beta\varepsilon}+1)$. Its full proof was inspected; the published carrier lacks the required audit marker, so this use remains escalated.

[F4] [[pthm-nrqm-many-body-thermal-occupation-predictions]] (current carrier status says published): the single-mode occupation readings are the stated Bose and Fermi means, under the postulate and assigned observable rules. Its full proof was inspected; the published carrier lacks the required audit marker, so this use remains escalated.

[F5] [[lem-nrqm-composites-hilbert-tensor-construction]]: the finite Hilbert tensor product has the complete orthonormal product basis used in the Statement. [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]: a real diagonal energy list defines a self-adjoint operator on the squared-weight domain displayed in the Statement.

[F6] [[def-td-si-quantities]] and [[def-nrqm-framework-quantities-and-units]]: $\varepsilon$ is in joules, $T$ in kelvins, $\beta$ in $\mathrm{J^{-1}}$, and the occupation number is dimensionless.

[F7] [[def-tdmath-countable-canonical-model]] defines a nonnegative countable sum as the supremum of finite subsums; for the explicit product-basis enumeration in the Statement, the increasing finite boxes $C_N$ exhaust that supremum.

[A1] Countable Choice and the Axiom of Choice are assumed because the cited one-mode and mode-occupation supplier statements explicitly assume them.

## Proof

**Given:** The mode energies, the independent finite mode list, $T>0$, and the quantum canonical preparation.

1.1 For one bosonic mode, [F2] gives $Z_B=(1-q)^{-1}$ and $\langle N\rangle_B=q/(1-q)$; for $q=e^{-\beta\varepsilon}$, multiplication of numerator and denominator by $e^{\beta\varepsilon}$ gives $q/(1-q)=1/(e^{\beta\varepsilon}-1)$. The unit convention in [F6] makes the exponent dimensionless. [F1, F2, F4, F6, A1, algebra]

1.2 For one fermionic occupation, [F3] gives $Z_F=1+q$ and upper-level probability $q/(1+q)$; multiplying numerator and denominator by $e^{\beta\varepsilon}$ gives $q/(1+q)=1/(e^{\beta\varepsilon}+1)$. [F1, F3, F4, F6, A1, algebra]

2.1 For the finite product model of the Statement, the diagonal Gibbs operator satisfies $K_\beta u_{\mathbf n}=e^{-\beta E(\mathbf n)}u_{\mathbf n}=\prod_{r=1}^m q_r^{n_r}u_{\mathbf n}$, where $q_r=e^{-\beta\varepsilon_r}$. For $N\ge1$ let $C_{r,N}=\{0,\ldots,N\}$ for a bosonic factor and $C_{r,N}=\{0,1\}$ for a fermionic factor, and put $C_N=\prod_rC_{r,N}$. These are finite increasing sets whose union is $\mathcal C$. Finite distributivity gives $\sum_{\mathbf n\in C_N}\prod_rq_r^{n_r}=\prod_r\sum_{n_r\in C_{r,N}}q_r^{n_r}$. By the positive-basis trace convention in [F1] and the nonnegative-sum convention [F7], the full trace is the supremum of its finite subsums; every finite subset of $\mathcal C$ is contained in some $C_N$. Hence $0<Z=\operatorname{Tr}K_\beta=\lim_{N\to\infty}\sum_{\mathbf n\in C_N}\prod_rq_r^{n_r}=\prod_{r=1}^m Z_r<\infty$, where $Z_r=Z_B$ or $Z_F$ from steps 1.1–1.2. Clause (b) of [F1] now makes $K_\beta$ trace class and licenses $\rho_\beta=K_\beta/Z$. The assigned label readout has singleton projection $Q(\{\mathbf n\})\psi=\langle\psi,u_{\mathbf n}\rangle u_{\mathbf n}$, so clause (c) gives $P(\mathbf n)=\operatorname{tr}(\rho_\beta Q(\{\mathbf n\}))=e^{-\beta E(\mathbf n)}/Z=\prod_r(q_r^{n_r}/Z_r)$. For fixed factor $s$ and occupation $k\in\mathcal C_s$, summing over the other labels in $C_N$ with $n_s=k$ gives $(q_s^k/Z)\prod_{r\ne s}\sum_{n_r\in C_{r,N}}q_r^{n_r}$ once $N\ge k$; taking $N\to\infty$ and using $Z=\prod_rZ_r$ yields the marginal $P_s(k)=q_s^k/Z_s$. The marginal is the law of the assigned $\mathcal N_s$, and its absolute first moment is finite by the bosonic first-moment sum in [F2] or the finite two-level sum in [F3]. Thus its thermal mean is the corresponding one-mode mean in steps 1.1–1.2. [F1, F2, F3, F5, F7, step 1.1, step 1.2, algebra]

3.1 Steps 1.1 and 1.2 prove the one-mode factors, and step 2.1 proves trace factorization and all marginal means for the declared finite product model. These are conditional model calculations under the adopted Gibbs preparation. [step 1.1, step 1.2, step 2.1] ∎
