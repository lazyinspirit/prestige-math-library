---
id: lem-kam-conjugation-symmetry-of-the-construction
kind: lemma
title: "Conjugation symmetry of the KAM construction: real perturbations produce real tori"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 9
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-truncated-homological-equation-with-conservative-loss, lem-kam-affine-taylor-fourier-truncation, lem-kam-generator-flow-and-remainder-bound, lem-frequency-reparametrization-by-contraction, lem-kam-composed-map-and-derivative-convergence, def-cm-local-flow-of-an-autonomous-system, thm-weierstrass-convergence-holomorphic-functions, def-complex-differentiability-holomorphic-and-entire, rem-complex-euclidean-space-dictionary]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-truncated-homological-equation-with-conservative-loss: mathematical-premise
  lem-kam-affine-taylor-fourier-truncation: mathematical-premise
  lem-kam-generator-flow-and-remainder-bound: mathematical-premise
  lem-frequency-reparametrization-by-contraction: mathematical-premise
  lem-kam-composed-map-and-derivative-convergence: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  rem-complex-euclidean-space-dictionary: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §1 and §4-§5 (the real-analytic perturbation is complexified to a holomorphic function of the action-angle-parameter variables; the constructed transformations are limits of real-analytic maps), PDF pp. 5-6 and 20-27."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §3.1 (real analytic functions and their complexifications) and §6.1-§6.3 (reality of the limiting embedding when the data are real), printed pp. 24-31 and 92-110."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Assume the data, constants, sequences, one-step construction and notation of
[[lem-kam-composed-map-and-derivative-convergence]], and assume that the initial
perturbation is **conjugation-symmetric**:
$$P_0(\bar I,\bar\vartheta,\bar\nu)=\overline{P_0(I,\vartheta,\nu)}\qquad\text{for every }(I,\vartheta,\nu)\in D_{r_0,s_0,h_0}(\Omega_{\alpha,\tau}).$$
For any map $g:Z\to\mathbb C^\ell$, where $Z\subseteq\mathbb C^m$ is
invariant under componentwise conjugation and $m,\ell\ge1$, put
$g^c(z):=\overline{g(\bar z)}$, and call $g$ conjugation-symmetric when
$g^c=g$. This operation needs no openness or holomorphy of $Z$ or $g$;
for holomorphic maps on open domains it also preserves holomorphy.
It applies to scalar functions by taking $\ell=1$, to parameter maps on
$\Lambda:=\Omega_{\alpha,\tau}\subseteq\mathbb R^n$, and to phase maps
on $\mathcal L:=\{0\}\times S_{s_0/4}\times\Lambda$. Then:

1. **One-step objects.** For every $j\ge0$ the functions $P_j$, $Q_j$, $R_j$,
   $\widehat R_j$, $F_j$ and $v_j=\partial_I\widehat R_j(0,\cdot)$ are
   conjugation-symmetric on their domains, and
   $\phi_j(\bar\nu)=\overline{\phi_j(\nu)}$; in particular $\phi_j$ maps real
   points to real points.
2. **The maps.** The extended steps $T_j(z,\nu)=(\widetilde\Phi_j(z,\phi_j(\nu)),\phi_j(\nu))$ and their compositions are conjugation-symmetric. In particular $\Psi_j^c=\Psi_j$ and $\chi_j^c=\chi_j$ for every $j$.
3. **The limit.** $\Psi_\infty^c=\Psi_\infty$ on $\mathcal L$ and $\chi_\infty^c=\chi_\infty$ on $\Lambda$; in particular for real
   $\vartheta$ and real $\nu$ the point $\Psi_\infty(0,\vartheta,\nu)$ is real,
   that is $b(\vartheta,\nu)\in\mathbb R^n$ and $w(\vartheta,\nu)\in\mathbb R^n$.


## Facts & Assumptions

**Given:** The data, constants and one-step construction of [[lem-kam-composed-map-and-derivative-convergence]] with a conjugation-symmetric initial perturbation $P_0$.

[F1] Conjugation dictionary: for a set $\Omega\subseteq\mathbb R^n$ the domain $D_{r,s,h}(\Omega)$ is invariant under $(I,\vartheta,\nu)\mapsto(\bar I,\bar\vartheta,\bar\nu)$ (because $\operatorname{dist}_\infty(\bar\nu,\Omega)=\operatorname{dist}_\infty(\nu,\Omega)$); the conjugate $g^c$ of a holomorphic $g$ is holomorphic; $(g+h)^c=g^c+h^c$, $(gh)^c=g^ch^c$, $(\partial_{z_k}g)^c=\partial_{z_k}g^c$, and $g^c=g$ implies $g(z)\in\mathbb C$ is real for every real $z$ ([[def-holomorphic-kam-domain-and-diophantine-labels]], [[def-complex-differentiability-holomorphic-and-entire]], [[rem-complex-euclidean-space-dictionary]]).

[F2] The formulas of the one-step construction at stage $j$: $Q_j=P_j(0,\vartheta,\nu)+\sum_l\partial_{I_l}P_j(0,\vartheta,\nu)I_l$ and $R_j=T_KQ_j$ are holomorphic and affine in $I$ ([[lem-kam-affine-taylor-fourier-truncation]] clause 2); $F_j$ is the unique zero-mean holomorphic solution of $\nu\cdot\partial_\vartheta F_j=R_j-\widehat R_j$ on its domain, with Fourier support in $|k|_1\le K$ ([[lem-truncated-homological-equation-with-conservative-loss]] clauses 1 and 3); $\widetilde\Phi_j$ is the time-one map of $X_{F_j}$ ([[lem-kam-generator-flow-and-remainder-bound]] clause 2), $v_j=\partial_I\widehat R_j(0,\cdot)$ is holomorphic on $O_{h_j}$ (clause 4 there), and $\phi_j(\nu_+)$ is the unique $\nu\in O_{h_j/2}(\Omega_{\alpha,\tau})$ with $\nu+v_j(\nu)=\nu_+$ ([[lem-frequency-reparametrization-by-contraction]] clause 1); finally $P_{j+1}(I,\vartheta,\nu)=P_j^+(I,\vartheta,\phi_j(\nu))$, where $P_j^+$ is the exact expression of [[lem-kam-generator-flow-and-remainder-bound]] clause 3 in terms of $P_j,R_j,F_j$ and the flows of $X_{F_j}$.

[F3] Uniqueness of solutions of the autonomous system $z'=X_F(z,\nu)$: every solution through a point is the restriction of the maximal one ([[def-cm-local-flow-of-an-autonomous-system]]).

[F4] Conjugation commutes with limits in $\mathbb C^\ell$: $|\bar z-\bar z'|_\infty=|z-z'|_\infty$. Thus a pointwise limit of conjugation-symmetric maps on any fixed conjugation-invariant set remains conjugation-symmetric. On $\mathcal L$, [[lem-kam-composed-map-and-derivative-convergence]] clause 2 supplies uniform convergence and holomorphy in the angles at each real label; its clause 5 supplies uniform convergence of the parameter maps on $\Lambda$. No joint holomorphic extension of either limit is asserted.

## Proof

**Proof technique:** direct; induction on the stage, using that the one-step operations (Taylor truncation, Fourier cutoff, solving the homological equation, flowing, and the frequency retraction) commute with conjugation, and passing to the limit.

1.1 *The truncation and mean objects.* Assume $P_j^c=P_j$; by [F1] derivatives, products with the real-coefficient coordinates $I_l$ and finite sums give $Q_j^c=Q_j$. In the Fourier integral over real angles, conjugation exchanges the modes $k$ and $-k$: $(Q_j^c)_k(I,\nu)=\overline{(Q_j)_{-k}(\bar I,\bar\nu)}$. Since $|k|_1\le K_j$ is invariant under this exchange, $(T_{K_j}Q_j)^c=T_{K_j}(Q_j^c)$, and the $k=0$ coefficient is preserved. Hence $R_j^c=R_j$, $\widehat R_j^c=\widehat R_j$ and $v_j^c=v_j$. [given, F1, F2, algebra]

2.1 *The generator.* Put $G_j:=R_j-\widehat R_j$, so $G_j^c=G_j$ by step 1.1 and $G_j$ has zero mean; by [F1], $F_j^c$ is holomorphic, has zero mean and the same Fourier support, and $\nu\cdot\partial_\vartheta F_j^c=(\nu\cdot\partial_\vartheta F_j)^c=G_j^c=G_j$; since $F_j$ is the unique zero-mean holomorphic solution of $\nu\cdot\partial_\vartheta w=G_j$ ([[lem-truncated-homological-equation-with-conservative-loss]] clause 1), $F_j^c=F_j$. [step 1.1, F1, F2, algebra]

2.2 *The frequency retraction.* By step 1.1, $v_j^c=v_j$; fix $\nu_+\in O_{h_j/4}(\Omega_{\alpha,\tau})$ and put $\psi(\nu_+):=\overline{\phi_j(\bar\nu_+)}$; then $\psi(\nu_+)+v_j(\psi(\nu_+))=\overline{\phi_j(\bar\nu_+)}+\overline{v_j(\phi_j(\bar\nu_+))}=\overline{\bar\nu_+}=\nu_+$, and $\psi(\nu_+)\in O_{h_j/2}(\Omega_{\alpha,\tau})$ because that set is conjugation-invariant; by the uniqueness clause of [[lem-frequency-reparametrization-by-contraction]] clause 1, $\psi=\phi_j$, so $\phi_j^c=\phi_j$ and $\phi_j$ is real on real points. [step 1.1, F1, F2, algebra]

3.1 *The flow.* By step 2.1 and [F1], $X_{F_j}^c=X_{F_j}$, that is $X_{F_j}(\bar z,\bar\nu)=\overline{X_{F_j}(z,\nu)}$; if $t\mapsto z(t)$ solves $z'=X_{F_j}(z,\nu)$ then $t\mapsto\overline{z(t)}$ solves $y'=X_{F_j}(y,\bar\nu)$ (differentiate and conjugate), with $y(0)=\overline{z(0)}$; by [F3] $t\mapsto\overline{z(t)}$ agrees on its interval with the maximal solution through $\overline{z(0)}$ with parameter $\bar\nu$, i.e. $(\Phi_t)^c=\Phi_t$ for the flow of $X_{F_j}$, and evaluating at $t=1$ gives $\widetilde\Phi_j^c=\widetilde\Phi_j$; in particular, for real $\nu$, $\widetilde\Phi_j$ maps real points to real points. [step 2.1, F1, F2, F3, algebra]

4.1 *Induction and the composed maps.* By steps 1.1, 2.1, 3.1, 2.2 the whole one-step operation preserves conjugation symmetry: $P_j^+$ is built from $P_j$, $R_j$, $F_j$, the flows of $X_{F_j}$ and Poisson brackets by sums, products, compositions and parameter integrals, all of which preserve $(\cdot)^c$ by [F1], and the substitution $\nu\mapsto\phi_j(\nu)$ preserves it by step 2.2; hence $P_{j+1}^c=P_{j+1}$. The extended step $T_j(z,\nu)=(\widetilde\Phi_j(z,\phi_j(\nu)),\phi_j(\nu))$ is therefore conjugation-symmetric, and so is its extended composition $T_0\circ\cdots\circ T_{j-1}=(\Psi_j,\chi_j)$. Projecting the two components yields $\Psi_j^c=\Psi_j$ and $\chi_j^c=\chi_j$. This proves clauses 1 and 2 by induction on $j$. [step 1.1, step 2.1, step 3.1, step 2.2, F1, F2, given, algebra]

5.1 *The limit.* For $\nu\in\Lambda$ and $\vartheta\in S_{s_0/4}$, both $(0,\vartheta,\nu)$ and $(0,\bar\vartheta,\nu)$ belong to $\mathcal L$. Step 4.1 gives $\Psi_j(0,\bar\vartheta,\nu)=\overline{\Psi_j(0,\vartheta,\nu)}$; passing to the pointwise limits furnished by [F4] gives $\Psi_\infty(0,\bar\vartheta,\nu)=\overline{\Psi_\infty(0,\vartheta,\nu)}$. Likewise $\chi_j(\nu)=\overline{\chi_j(\nu)}$ for $\nu\in\Lambda$ gives $\chi_\infty(\nu)=\overline{\chi_\infty(\nu)}$. These are exactly $\Psi_\infty^c=\Psi_\infty$ on $\mathcal L$ and $\chi_\infty^c=\chi_\infty$ on $\Lambda$ under the stated map-level definition. At real angles the phase point is therefore real, so $b(\vartheta,\nu)$ and $w(\vartheta,\nu)$ are real. This proves clause 3 without an open complex-parameter domain for the limit. [step 4.1, F4, algebra] ∎

## Remarks

- **Why the conjugating computation is legitimate.** Working with $g^c$ avoids any appeal to an identity theorem against the real locus, which in several variables has empty interior; the equations satisfied by the conjugate are checked directly.
- **Scope.** The lemma only transfers the real structure; it makes no statement about the size of the torus family, which is the content of the measure theorem.
