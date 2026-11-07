---
dependency_level: 1
id: thm-brascamp-lieb-gaussian-exhaustion-and-finiteness
kind: theorem
title: Gaussian exhaustion and finiteness of Brascamp–Lieb data
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-countable-choice
- lem-uniform-brascamp-lieb-flag-minors
- thm-geometric-heat-flow-brascamp-lieb-inequality
- lem-positive-definite-gaussian-integral
- thm-tonelli-and-fubini-for-completed-product-measures
- thm-linear-change-of-variables-for-lebesgue-measure
- cor-real-spectral-theorem-for-self-adjoint-endomorphisms
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'Bennett–Carbery–Christ–Tao, Brascamp–Lieb inequalities: finiteness, structure
      and extremals'
    url: https://arxiv.org/pdf/math/0505065
---

## Statement

Assume Countable Choice. Let $m\ge1$ be an integer. For surjective linear maps $B_j:\mathbb R^n\to\mathbb R^{d_j}$, $1\le j\le m$, and $0<p_j\le1$, let $\mathrm{BL}(B,p)$ be the least constant in $\int\prod_j f_j(B_jx)^{p_j}\,dx\le C\prod_j(\int f_j)^{p_j}$ for all nonnegative integrable inputs. It is finite exactly when
$$ \sum_jp_jd_j=n,\qquad \dim W\le\sum_jp_j\dim B_jW\quad\hbox{for every subspace }W. $$
When finite, it equals
$$ \sup_{A_j>0}\left(\frac{\prod_j(\det A_j)^{p_j}}{\det(\sum_jp_jB_j^*A_jB_j)}\right)^{1/2}. $$
Positive definiteness is real symmetric positive definiteness; zero-dimensional factors use determinant $1$ and unit point mass.

## Statement references

[Source proof development](https://arxiv.org/pdf/math/0505065)

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] Uniform flag minors and their strict simple-data version, geometric heat-flow BL, Gaussian integration, finite-dimensional spectral decomposition, completed nonnegative Tonelli and linear change of variables are available from the dependencies. Analytic uses assume Countable Choice. A datum is called simple here when every nonzero proper subspace has strict dimension inequality. The remaining explicit interfaces are [[def-countable-choice]] [[lem-uniform-brascamp-lieb-flag-minors]] [[thm-geometric-heat-flow-brascamp-lieb-inequality]] [[lem-positive-definite-gaussian-integral]] [[thm-tonelli-and-fubini-for-completed-product-measures]] [[thm-linear-change-of-variables-for-lebesgue-measure]] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]].

## Proof

1.1 Gaussian testing gives the displayed determinant ratio $G(A)$ as a lower bound for $\mathrm{BL}$. A common source kernel makes even an isotropic Gaussian product have infinite integral, so finiteness excludes it. Simultaneously replacing each input by $f_j(\lambda\,\cdot)$ makes its ratio scale as $\lambda^{\sum p_jd_j-n}$; positive Gaussian inputs and $\lambda\to0,\infty$ force scaling. For $W$ of dimension $r$, put $U_j=B_jW$ and $A_j(\varepsilon)=\varepsilon I_{U_j}\oplus I_{U_j^\perp}$. Its numerator determinant is $\varepsilon^{\sum p_j\dim U_j}$. The source quadratic form is bounded uniformly and is $O(\varepsilon)$ on $W$. Hadamard in a basis beginning with $W$ bounds its determinant by $C\varepsilon^r$. Finite Gaussian ratios therefore force $r\le\sum p_j\dim U_j$. Hadamard here follows by Gram–Schmidt: the determinant of a Gram matrix is the product of squared perpendicular successive lengths, each at most the original squared length. [given, F1, construct, algebra]

1.2 Assume the two conditions. They imply a trivial common kernel. Put $M=\sum_jp_jB_j^*A_jB_j>0$ and diagonalize it in an ordered orthonormal basis with eigenvalues $\mu_1\ge\cdots\ge\mu_n>0$. The dimension condition and scaling are equivalent to $\sum_jp_j\operatorname{codim}(B_jW)\le\operatorname{codim}W$. Choose the flag-minor sets $I_j$ with determinants at least $c$. Since $p_j\langle A_jB_je_i,B_je_i\rangle\le\mu_i$, Hadamard gives $\det A_j\,c^2\le p_j^{-d_j}\prod_{i\in I_j}\mu_i$. Put $a_i=\sum_jp_j\mathbf1_{i\in I_j}$ and $b_l=l-\sum_{i\le l}a_i\ge0$. Scaling gives $\sum_i a_i=n$. Multiplying the preceding inequalities and telescoping eigenvalues yields
$$ G(A)^2\le C_0\prod_{l=1}^{n-1}(\mu_{l+1}/\mu_l)^{b_l}\le C_0,\qquad C_0=c^{-2\sum p_j}\prod_jp_j^{-p_jd_j}. $$
This proves Gaussian finiteness independently of any exhaustion assertion. [given, F1, construct, algebra]

1.3 For simple data, the strict flag lemma gives $b_l\ge\eta>0$. Thus $G(A)^2\le C_0(\mu_n/\mu_1)^\eta$. On a maximizing sequence with ratios bounded below positively, $\mu_1/\mu_n$ is bounded. Simultaneously scale all $A_j$ so $\mu_n=1$; scaling leaves $G$ unchanged. Then $I\le M\le RI$. Each $B_j$ has a bounded right inverse $S_j$ obtained by inverting its restriction to its kernel complement, so $p_jB_j^*A_jB_j\le M$ gives $A_j\le p_j^{-1}R\|S_j\|^2I$. Also the lower bound on $G$ and $\det M\ge1$ give a lower bound on $\prod(\det A_j)^{p_j}$. The upper bounds on all other determinants give a positive lower bound on each determinant, hence on each eigenvalue. The tuple therefore lies in a compact subset of the positive cones and has a maximizing limit. For $n=1$ the condition-number bound is automatic and the same argument applies. [given, F1, construct, algebra]

1.4 At a maximizing tuple differentiate $\log G^2$ in an arbitrary symmetric direction $D_j$. Expanding $\det(I+tC)=1+t\operatorname{tr}C+O(t^2)$ gives $0=p_j\operatorname{tr}[(A_j^{-1}-B_jM^{-1}B_j^*)D_j]$. Consequently $A_j^{-1}=B_jM^{-1}B_j^*$. Set $T_j=A_j^{1/2}B_jM^{-1/2}$. These satisfy $T_jT_j^*=I$ and $\sum p_jT_j^*T_j=I$. Apply the geometric heat-flow inequality after the source change $x=M^{-1/2}z$ and the target change $h_j(w)=f_j(A_j^{-1/2}w)$. Their Jacobians give exactly constant $G(A)$. Gaussian testing gives equality, so the theorem holds for simple data. [given, F1, construct, algebra]

1.5 Proceed by induction on source dimension. In dimension zero every factor is scalar and the ratio is $1$. If the datum is not simple, fix a nonzero proper critical $W$, where equality holds. In orthogonal coordinates $\mathbb R^n=W\oplus W^\perp$ and $\mathbb R^{d_j}=U_j\oplus U_j^\perp$, write $B_j(v,w)=(C_jv+D_jw,E_jw)$. The maps $C_j:W\to U_j$ and $E_j:W^\perp\to U_j^\perp$ are surjective. Restriction gives dimension inequalities for $C$. For $Z\subset W^\perp$, $\dim B_j(Z+W)=\dim U_j+\dim E_jZ$; subtracting critical equality gives the inequalities for $E$. Criticality and subtraction give both scaling identities. The induction hypothesis applies in the two smaller source dimensions, discarding zero-dimensional target factors. [given, F1, construct, algebra]

1.6 For nonnegative inputs put $F_j(z)=\int_{U_j}f_j(u,z)\,du$. Integrate first in $v$ by Tonelli and apply the $C$ inequality to the slice $u\mapsto f_j(u+D_jw,E_jw)$. Translation removes $D_jw$ from its mass. The completed-product theorem gives good target slices a.e.; their exceptional null sets pull back to null under the surjections $E_j$ by kernel splitting, linear change of variables and countably many bounded kernel boxes. Apply the $E$ inequality to $F_j$ and use Tonelli for their masses. This proves $\mathrm{BL}(B,p)\le\mathrm{BL}(C,p)\mathrm{BL}(E,p)$ without first assuming integrability of the source product. [given, F1, construct, algebra]

2.1 For the opposite Gaussian bound choose positive matrices $P_j$ on $U_j$ and $Q_j$ on $U_j^\perp$, and inputs $\exp(-\pi[\langle P_ju,u\rangle+\lambda^2\langle Q_jz,z\rangle])$. Substitute $w=\lambda^{-1}z$ in the source. The quadratic matrix converges to the block diagonal sum of the two induced source forms; both are positive definite by their dimension inequalities. Determinants therefore converge to the product of their positive determinants. The target powers of $\lambda$ cancel the source Jacobian by the quotient scaling identity. The limiting ratio is $G(C;P)G(E;Q)$. Taking the two independent suprema gives $G(B)\ge G(C)G(E)$. Induction and the universal bound $G\le\mathrm{BL}$ combine with the preceding step to give $\mathrm{BL}(B)=G(B)<\infty$. This completes the finite-depth critical-subspace induction and both directions of the criterion. Eigenbases, critical subspaces and target bases were fixed only as finite witnesses at individual steps; no full Axiom of Choice is used. [given, F1, construct, algebra] ∎
