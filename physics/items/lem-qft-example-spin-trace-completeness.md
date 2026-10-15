---
id: lem-qft-example-spin-trace-completeness
kind: lemma
title: Clifford traces and normalized spin completeness
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-qft-example-data
  - def-qft-dirac-projections
dependency_roles:
  def-qft-example-data: mathematical-premise
  def-qft-dirac-projections: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 4, sections 4.3 and 4.7
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
      locator: Complete author-hosted HTML chapter; Clifford algebra, Pauli matrices, positive- and negative-frequency Dirac solutions, and finite spinor examples.
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, sections 46–47
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; printed pp. 292–297, spin sums and gamma-matrix trace identities.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Use the finite Dirac matrices and adjoint of [[def-qft-dirac-projections]], and the separate geometric metric $\eta=\operatorname{diag}(-1,1,1,1)$ and algebraic contraction $h=-\eta=\operatorname{diag}(1,-1,-1,-1)$ of [[def-qft-example-data]]. Write $p=(E,\mathbf p)$ for an energy four-vector with components in joules, $M\geq0$ for a rest-energy parameter in joules, and $E=\sqrt{|\mathbf p|^2+M^2}>0$. In the natural-length variables of the Dirac definition, $\mathbf k=\mathbf p/(\hbar c)$, $\mu=M/(\hbar c)$, and $\omega=E/(\hbar c)$.

Let $\beta=\gamma^0$, $\alpha_j=\beta\gamma^j$, $\Sigma_j=\operatorname{diag}(\sigma_j,\sigma_j)$, and $\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3$. Define $H_\pm=\boldsymbol\alpha\cdot\mathbf p\pm\beta M$ and $P_\pm=(I_4+H_\pm/E)/2$. Each $P_\pm$ is a Hermitian rank-two projection. Choose orthonormal bases $\xi_{\pm,1},\xi_{\pm,2}$ of their ranges and put $u_s=\sqrt{2E}\xi_{+,s}$ and $v_s=\sqrt{2E}\xi_{-,s}$ for $s=1,2$. With $\bar z=z^\dagger\beta$ and $\not p=\gamma^0E-\sum_j\gamma^jp_j$, the following hold:

$$\operatorname{Tr}I_4=4,\quad \operatorname{Tr}\gamma^a=0,\quad \operatorname{Tr}(\gamma^a\gamma^b)=4h^{ab},\quad \operatorname{Tr}(\gamma^a\gamma^b\gamma^c)=0,$$

$$\operatorname{Tr}(\gamma^a\gamma^b\gamma^c\gamma^d) =4(h^{ab}h^{cd}-h^{ac}h^{bd}+h^{ad}h^{bc}), \qquad \sum_s u_s\bar u_s=\not p+M,\quad \sum_s v_s\bar v_s=\not p-M.$$

The columns satisfy $(\not p-M)u_s=0$ and $(\not p+M)v_s=0$. For all $x,y\in\mathbb C^4$, complex conjugation of a Dirac current is $\overline{\bar x\gamma^a y}=\bar y\gamma^a x$. The Countable Choice hypothesis written in the current draft [[def-qft-dirac-projections]] is retained as a supplier assumption; this finite-dimensional proof makes no additional choice use.

## Facts & Assumptions

**Given:** Fix $M\geq0$ and $\mathbf p\in\mathbb R^3$ with $E=\sqrt{|\mathbf p|^2+M^2}>0$. Use the matrix, shell, metric, and unit conventions in the Statement.

[F1] [[def-qft-example-data]]: geometric $\eta=(-,+,+,+)$, algebraic $h=-\eta=(+,-,-,-)$, energy four-vectors and rest energies in joules, and the conversion from energy coordinates to inverse-length coordinates by $\hbar c$.

[F2] [[def-qft-dirac-projections]]: the displayed Pauli blocks define $\beta$, $\alpha_j$, $\gamma^0=\beta$, $\gamma^j=\beta\alpha_j$, and $\bar z=z^\dagger\beta$. Its full definition also assumes Countable Choice and depends on the draft Fock and scalar-shell interfaces; only its explicit finite matrices and shell parameterization are used here.

## Proof

1.1 Direct multiplication of the displayed Pauli matrices gives $\sigma_j^2=I_2$, $\sigma_1\sigma_2=i\sigma_3$, $\sigma_2\sigma_3=i\sigma_1$, $\sigma_3\sigma_1=i\sigma_2$, and the reversed products have the opposite signs. Hence $\sigma_i\sigma_j=\delta_{ij}I_2+i\epsilon_{ijk}\sigma_k$. Block multiplication then gives $\alpha_i^\dagger=\alpha_i$, $\beta^\dagger=\beta$, $\alpha_i\alpha_j=\delta_{ij}I_4+i\epsilon_{ijk}\Sigma_k$, and $\alpha_i\beta=-\beta\alpha_i$. The explicit blocks have trace zero, so $\operatorname{Tr}\gamma^a=0$, and $\operatorname{Tr}I_4=4$. The Clifford relation is $\{\gamma^a,\gamma^b\}=2h^{ab}I_4$. Cyclicity of trace follows by expanding matrix entries; averaging $\operatorname{Tr}(\gamma^a\gamma^b)$ with its cyclic rearrangement gives $4h^{ab}$. For the four-factor trace, anticommute $\gamma^a$ successively past $\gamma^b,\gamma^c,\gamma^d$; cyclicity makes the final four-factor term the negative of the original, yielding $4(h^{ab}h^{cd}-h^{ac}h^{bd}+h^{ad}h^{bc})$. Finally $\gamma_5^2=I_4$ and $\gamma_5\gamma^a=-\gamma^a\gamma_5$ by the same Clifford relations, so cyclicity gives $\operatorname{Tr}(\gamma^a\gamma^b\gamma^c)=-\operatorname{Tr}(\gamma^a\gamma^b\gamma^c)$, hence the three-factor trace is zero. [given, F1, F2, algebra]

2.1 The relations in 1.1 give $H_\pm^\dagger=H_\pm$ and $H_\pm^2=(|\mathbf p|^2+M^2)I_4=E^2I_4$: the mixed term cancels by $\alpha_i\beta=-\beta\alpha_i$. Therefore $P_\pm^\dagger=P_\pm$ and $P_\pm^2=P_\pm$. Since $\operatorname{Tr}\alpha_i=\operatorname{Tr}\beta=0$, $\operatorname{Tr}H_\pm=0$ and $\operatorname{Tr}P_\pm=2$. A Hermitian projection has eigenvalues only $0$ and $1$, so its rank equals its trace and each range has dimension two. A basis can be selected for this fixed finite-dimensional range by Gaussian elimination and orthonormalized by Gram–Schmidt. [step 1.1, F2, algebra]

3.1 The chosen bases give $\sum_s u_su_s^\dagger=2EP_+=EI_4+H_+$ and $\sum_s v_sv_s^\dagger=2EP_-=EI_4+H_-$. Multiplying on the right by $\beta$ yields $EI_4\beta+H_+\beta=E\beta-\beta\boldsymbol\alpha\cdot\mathbf p+MI_4=\not p+M$ and $EI_4\beta+H_-\beta=E\beta-\beta\boldsymbol\alpha\cdot\mathbf p-MI_4=\not p-M$, using $\alpha_i\beta=-\beta\alpha_i$ and $\gamma^j=\beta\alpha_j$. [step 2.1, F1, F2, algebra]

4.1 Since $H_+u_s=Eu_s$, multiplication by $\beta$ gives $(\not p-M)u_s=0$; since $H_-v_s=Ev_s$, it gives $(\not p+M)v_s=0$. Also $\gamma^0(\gamma^a)^\dagger\gamma^0=\gamma^a$: for $a=0$ this is $\beta^3=\beta$, and for spatial $a$ it follows from $(\gamma^a)^\dagger=-\gamma^a$ and anticommutation with $\beta$. Thus $(\bar x\gamma^a y)^*=\bar y\gamma^a x$ for all columns $x,y$. [step 1.1, step 2.1, F2, algebra] ∎
