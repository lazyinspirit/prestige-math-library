---
id: lem-sr-perfect-fluid-conservation-equations
kind: lemma
title: "Perfect-fluid divergence identity and its equivalence with the energy-balance and Euler equations"
status: published
origin: pipeline
domain: mathematics
deps: [thm-sr-proper-time-and-observer-decomposition, def-ck-tensor-field-on-minkowski-space, def-flat-covariant-derivative-on-affine-minkowski-space, def-sr-observer-congruence-and-kinematics, def-directional-and-partial-derivatives, thm-algebra-of-derivatives, def-lorentz-form-and-inertia, def-sr-affine-minkowski-model, def-sr-stress-energy-tensor-and-force-density]
dependency_roles:
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $\Omega\subseteq A$ be open, let $\varepsilon,P:\Omega\to\mathbb R$ be $C^1$, let $n:\Omega\to V$ be a $C^1$ future unit timelike field ($\eta(n,n)=-1$) and set $T^{ab}:=(\varepsilon+P)n^an^b+P\eta^{ab}$. Write $D\varepsilon:=n^a\partial_a\varepsilon$, $\vartheta:=\partial_an^a$, $a^b:=n^a\partial_an^b$ and $h^{bc}:=\eta^{bc}+n^bn^c$ (these formulas define the first-order expansion scalar, acceleration and raised rest projection for the stipulated $C^1$ field; they agree with [[def-sr-observer-congruence-and-kinematics]] and [[def-flat-covariant-derivative-on-affine-minkowski-space]] when $\Omega$ is nonempty and the field is smooth). Then the identity $$\partial_aT^{ab}=n^b\big(D\varepsilon+(\varepsilon+P)\vartheta\big)+\big((\varepsilon+P)a^b+h^{bc}\partial_cP\big)$$ holds on $\Omega$, and consequently $\partial_aT^{ab}=0$ on $\Omega$ if and only if $D\varepsilon+(\varepsilon+P)\vartheta=0$ and $(\varepsilon+P)a^b+h^{bc}\partial_cP=0$ on $\Omega$. The two equations are the energy-balance and Euler equations of the model; the lemma asserts no equation of state, no thermodynamic relation and no causality condition. No choice principle is used.

## Facts & Assumptions

**Given:** The affine Minkowski model with inertial chart $x$, constant $\eta_{ab}=\eta^{ab}=\operatorname{diag}(-1,1,1,1)$ and coordinate partials $\partial_a$ ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]], [[def-directional-and-partial-derivatives]]); open $\Omega$, $C^1$ functions $\varepsilon,P$, a $C^1$ future unit timelike field $n$ ([[thm-sr-proper-time-and-observer-decomposition]]\,(c), [[def-ck-tensor-field-on-minkowski-space]]); $T^{ab}=(\varepsilon+P)n^an^b+P\eta^{ab}$ is a $C^1$ symmetric tensor field. On nonempty $\Omega$ its force density is $f^b=\partial_aT^{ab}$ and conservation means $f=0$ ([[def-sr-stress-energy-tensor-and-force-density]]). The scalar $\vartheta=\partial_an^a$ and vector $a^b=n^a\partial_an^b$ are defined by these first-order formulas; on nonempty $\Omega$ with smooth $n$ they agree with the expansion and acceleration of [[def-sr-observer-congruence-and-kinematics]] and [[def-flat-covariant-derivative-on-affine-minkowski-space]].

[F1] Product rule and constancy: $\partial_a(\Phi n^a)=(\partial_a\Phi)n^a+\Phi\,\partial_an^a$ for $C^1$ functions and fields, and $\partial_a\eta^{bc}=0$. ([[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]])

[F2] Since $n_bn^b=\eta(n,n)=-1$ is constant, $n_bn^a\partial_an^b=\tfrac12n^a\partial_a(n_bn^b)=0$; hence $a^b=n^a\partial_an^b$ lies in $n^\perp$, as does $h^{bc}\partial_cP$ because $n_bh^{bc}=\eta^{bc}n_b+n^bn^cn_b=0$. ([[def-directional-and-partial-derivatives]], [[def-lorentz-form-and-inertia]])

## Proof

**Proof technique:** direct. If $\Omega=\varnothing$, the tensor-field definition supplies the unique empty fields; all displayed component derivatives and products are empty maps, so the identity and both directions of the pointwise equivalence are vacuous. No nonempty-domain stress-energy or congruence definition is invoked in this branch. In steps 1.1–4.1 assume $\Omega\ne\varnothing$.

1.1 First expansion. By [F1], using that $\eta^{ab}$ is constant, $$\partial_aT^{ab}=\partial_a\big[(\varepsilon+P)n^an^b\big]+\eta^{ab}\partial_aP=n^b\,\partial_a\big[(\varepsilon+P)n^a\big]+(\varepsilon+P)\,n^a\partial_an^b+\partial^bP,$$ where $\partial_a[(\varepsilon+P)n^a]=(\partial_a\varepsilon+\partial_aP)n^a+(\varepsilon+P)\partial_an^a=D\varepsilon+DP+(\varepsilon+P)\vartheta$ with $DP:=n^a\partial_aP$, while $n^a\partial_an^b=a^b$ and $\partial_an^a=\vartheta$. [F1, given]

2.1 Reconstruction of the identity. Since $h^{bc}=\eta^{bc}+n^bn^c$, one has $\partial^bP=h^{bc}\partial_cP-n^bDP$. Substituting into step 1.1 cancels $n^bDP$ and gives $\partial_aT^{ab}=n^b(D\varepsilon+(\varepsilon+P)\vartheta)+(\varepsilon+P)a^b+h^{bc}\partial_cP$. By [F2] the vector $Y^b:=(\varepsilon+P)a^b+h^{bc}\partial_cP$ is in $n^\perp$. [F2, step 1.1]

3.1 Equivalence with the two equations. Contracting the identity of step 2.1 with $n_b$ gives $n_b\partial_aT^{ab}=n_bn^b(D\varepsilon+(\varepsilon+P)\vartheta)+n_bY^b=-(D\varepsilon+(\varepsilon+P)\vartheta)$ because $n_bn^b=-1$ and $Y\in n^\perp$. Hence conservation $\partial_aT^{ab}=0$ implies $D\varepsilon+(\varepsilon+P)\vartheta=0$, and substituting this back into the identity of step 2.1 gives $Y^b=0$; conversely, if both $D\varepsilon+(\varepsilon+P)\vartheta=0$ and $Y=0$ hold, then the identity of step 2.1 gives $\partial_aT^{ab}=0$. The two equations displayed are exactly the energy-balance equation and the Euler equation. [step 2.1]

4.1 The divergence identity and the equivalence with the two conservation equations are proved in steps 2.1 and 3.1. The argument holds for any $C^1$ data with $\eta(n,n)=-1$ and asserts no equation of state, no thermodynamic relation, no positivity of $\varepsilon$ or $P$, no energy condition and no causality condition; all operations are finite component computations and no choice principle is used. [step 2.1, step 3.1] ∎
