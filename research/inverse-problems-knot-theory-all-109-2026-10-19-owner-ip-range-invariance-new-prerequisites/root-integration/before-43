---
id: lem-ip-planar-scattering-dbar-equation-and-parameter-bounds
kind: lemma
title: Planar scattering dbar equation and uniform parameter bounds
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-planar-measurable-beltrami-cgo-solutions
  - lem-ip-planar-conductivity-cgo-logarithmic-phases
  - lem-ip-planar-forced-beltrami-similarity-estimate
  - lem-ip-planar-cauchy-beurling-and-near-two-inversion
  - thm-unit-disc-schwarz-lemma-with-rigidity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Astala and Päivärinta, Calderón's inverse conductivity problem in the plane"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v163-n1-p05.pdf"
      locator: "Section 5 in full, especially Lemma 5.4 and Theorem 5.5 with complete proofs, printed pp. 280–284."
    - title: "Barceló, Faraco and Ruiz, Stability of Calderón inverse conductivity problem in the plane"
      url: "https://www.mis.mpg.de/preprints/2006/preprint2006_5.pdf"
      locator: "Theorem 3.12 and proof, preprint printed p. 25, for uniform parameter derivatives."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\mu$ be real, supported in $D_1$, and $\|\mu\|_\infty\le\kappa<1$. Fix $2<r\le p_\kappa$. Write $f_\pm=e^{ikz}M_\pm$, let $b_\pm(k)$ be the coefficients of $z^{-1}$ in the holomorphic exterior expansions $M_\pm(z,k)=1+b_\pm(k)/z+O(z^{-2})$, and define
$$\tau_\mu(k):=\tfrac12\overline{b_+(k)-b_-(k)}.$$
The functions $k\mapsto M_\pm(\cdot,k)-1$ are smooth into $W^{1,r}(\mathbb C)$ and
$$\|\nabla_k M_\pm(\cdot,k)\|_{W^{1,r}}+\|\nabla_k M_\pm(\cdot,k)\|_\infty+|\nabla_k\tau_\mu(k)|\le C_{\kappa,r}e^{C_{\kappa,r}(1+|k|)}.$$
The amplitude obeys $\tau_\mu(0)=0$ and $|\tau_\mu(k)|\le1$. The conductivity CGO solution and its normalized logarithmic phase satisfy
$$\bar\partial_k u_\gamma(z,k)=-i\tau_\mu(k)\overline{u_\gamma(z,k)},\qquad \bar\partial_k\delta_\gamma(z,k)=-i\tau_\mu(k)e^{\overline{\delta_\gamma(z,k)}-\delta_\gamma(z,k)}.$$
For every fixed $S>0$, $|\nabla_k\delta_\gamma(z,k)|\le C_{\kappa,r,S}e^{C_{\kappa,r,S}(1+|k|)}$ on $D_S$. The phase is normalized by $\delta_\gamma(z,0)=0$.

## Statement references

[[lem-ip-planar-measurable-beltrami-cgo-solutions|Normalized Beltrami CGO solutions and the Fredholm construction.]]

[[lem-ip-planar-conductivity-cgo-logarithmic-phases|The conductivity solution, positivity and normalized logarithmic phase.]]

[[lem-ip-planar-forced-beltrami-similarity-estimate|Uniform estimates for differentiated equations.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice and the coefficient and exponent in the statement.

[F1] The real-linear Fredholm construction supplies unique normalized CGO solutions, continuous nonvanishing multipliers, uniform $W^{1,r}$ bounds and their principal phases. The Cauchy and near-two inverse bounds hold for compact data. ([[lem-ip-planar-measurable-beltrami-cgo-solutions]], [[lem-ip-planar-cauchy-beurling-and-near-two-inversion]])

[F2] A forced real-linear Beltrami solution with a bounded compact lower-order coefficient of size $B$ has $W^{1,r}$ and supremum norms at most $Ce^{C(1+B)}$ times the forcing norm. ([[lem-ip-planar-forced-beltrami-similarity-estimate]])

[F3] The conductivity combination never vanishes; $\operatorname{Re}(M_+/M_-)>0$, and its logarithmic phase has the principal spatial normalization. A unit-disk holomorphic self-map fixing zero has derivative at zero of modulus at most one. ([[lem-ip-planar-conductivity-cgo-logarithmic-phases]], [[thm-unit-disc-schwarz-lemma-with-rigidity]])

[A1] The Axiom of Choice and Countable Choice are inherited from [F1]–[F3]. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Put $e_k(z)=e^{i(kz+\overline k\overline z)}$, $A_k=\partial_z+ik$, and define the complex-antilinear operator $L_k g=\mathcal C[\mu e_{-k}\overline{A_k g}]$ on the real Banach space $Y=W^{1,r}(\mathbb C)\oplus\mathbb C$. It is bounded into $W^{1,r}$ and smooth in the two real coordinates of $k$, because its coefficient derivatives are bounded multiplications on the fixed disk. Both $I-L_k$ and $I+L_k$ are invertible on $Y$. To verify surjectivity rather than assume it, prescribe a right side $h+c\in Y$, put the desired unknown equal to $h+c+j$, and differentiate the equation for $j$. Its derivative equation is $(I-\mu e_{-k}\overline{\mathcal B})\bar\partial j=\alpha\overline j+E$, with $\alpha=-i\overline k\mu e_{-k}$ and compact forcing $E=\mu e_{-k}\overline{\partial h}+\alpha(\overline h+\overline c)$. It reduces to the same compact Fredholm operator as [F1], with arbitrary compact $L^r$ forcing, so gives a unique $j\in W^{1,r}$. Replacing $\mu$ by $-\mu$ proves the other sign. The bounded inverse follows from this Fredholm solution formula. Resolvent identities therefore imply that $M_\pm=(I\mp L_k)^{-1}1$ depend smoothly on $k$ in $Y$, with constant component always $1$. [A1, F1, given, algebra]

2.1 Differentiating the multiplier equation with respect to either real coordinate of $k$ gives an equation for $W=\partial_{k_j}M_\pm$ with principal coefficient of modulus at most $\kappa$, lower-order coefficient bounded by $C|k|$, and compact forcing bounded in $L^r$ by $C(1+|k|)(1+\|M_\pm-1\|_{W^{1,r}})$. Coefficient derivatives contribute only bounded factors $z,\overline z$ on $D_1$. By [F1] this forcing is at most $Ce^{C(1+|k|)}$. The derivatives $W$ are continuous, in $W^{1,r}$, and tend to zero at infinity by the compact Cauchy representation and its differentiated data. Apply [F2] to get the claimed derivative bounds. The integral identity $\overline{b_\pm}=\pi^{-1}\int(\pm\mu)\partial_z(e_kM_\pm)\,dA$ follows by integrating the compact Cauchy data for $M_\pm-1$ and conjugating, using that $\mu$ is real. Differentiation under this compact integral, justified by the just-proved $W^{1,r}$ bounds, gives the stated derivative bound on $\tau$. [F1, F2, step 1.1, algebra]

3.1 Define $F_+=(M_++M_-)/2$, $J=(M_+-M_-)/2$, and $F_-=i e_{-k}\overline J$. Adding and subtracting the multiplier equations gives $F_+=1+L_kJ$ and $J=L_kF_+$, hence $(I-L_k^2)F_+=1$. The square is complex-linear and $I-L_k^2=(I-L_k)(I+L_k)$ is invertible. Put $Q_k h=e_{-k}\overline{\mathcal C}(e_kh)$, where $\overline{\mathcal C}$ has kernel $1/(\pi(\overline z-\overline w))$. Direct kernel differentiation gives, for fixed compact data $h$, $\bar\partial_kQ_kh=-i e_{-k}\pi^{-1}\int e_kh\,dA$: the derivative of the exponential cancels the kernel denominator. Composing the two antilinear factors of $L_k$ gives $L_k^2g=\mathcal C\mu\bar\partial_zQ_k\mu A_kg$. Since $\bar\partial_k A_k=0$, it follows for fixed $g\in Y$ that $\bar\partial_k(L_k^2)g=-i t(g;k)\mathcal C(\mu\bar\partial_ze_{-k})$, where $t(g;k)=\pi^{-1}\int\mu\partial_z(e_kg)dA$. All these identities hold first for smooth compact data by the displayed integrals and then by $L^r$ approximation and boundedness of the composed operators. [F1, step 1.1, step 2.1, algebra]

4.1 The coefficient identity in step 2.1 gives $t(F_+;k)=\tfrac12(\overline b_+-\overline b_-)=\tau$. Also $J=L_k1+L_k^2J$ and $J=i e_{-k}\overline F_-$ imply $(I-L_k^2)(e_{-k}\overline F_-)=-i\mathcal C(\mu\bar\partial_ze_{-k})$. Differentiate $(I-L_k^2)F_+=1$ with respect to $\overline k$ and apply step 3.1 and complex linearity of the inverse. Uniqueness yields $\bar\partial_kF_+=\tau e_{-k}\overline F_-$. The definitions further give $F_+=1-i\mathcal C(\mu\bar\partial_zF_-)$ and $F_-=iQ_k\mu A_kF_+$. Differentiating the latter identity, using the rank-one formula of step 3.1 and the first derivative identity just proved, gives $\bar\partial_kF_-=\tau e_{-k}[1+i\overline{\mathcal C}(\mu\partial_z\overline F_-)]=\tau e_{-k}\overline F_+$. Since $u_\gamma=e^{ikz}(F_+-iF_-)$, these two identities give $\bar\partial_ku_\gamma=-i\tau\overline{u_\gamma}$. Division by the nonzero solution in [F3] gives the displayed phase equation. [F1, F3, step 2.1, step 3.1, algebra]

5.1 By [F3], $|J/F_+|<1$. Outside $\overline D_1$ this quotient is holomorphic, and it tends to zero at infinity. Thus $w\mapsto J(1/w)/F_+(1/w)$ extends to a holomorphic disk self-map vanishing at zero. Its derivative there is $(b_+-b_-)/2$, so Schwarz's lemma in [F3] gives $|\tau|\le1$. At $k=0$, $M_+=M_-=1$, giving $\tau(0)=0$. For $z\in D_S$, the pointwise rotated-coefficient representation in [F3] and the uniform principal deformation bound in [F1] give $|u_\gamma(z,k)|\ge e^{-C_S|k|}$. Step 2.1 bounds $|\nabla_ku_\gamma|$ by $Ce^{C_S(1+|k|)}$. Dividing gives the asserted derivative bound for $\delta_\gamma$. The normalized multipliers tend to $1$ as $k\to0$ by [F1], so the phase continues smoothly there with value zero. This completes all claims. [F1, F3, step 2.1, step 4.1, algebra] ∎
