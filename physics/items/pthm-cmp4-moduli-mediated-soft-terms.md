---
id: pthm-cmp4-moduli-mediated-soft-terms
kind: physics-theorem
title: Tree-level moduli-mediated visible-sector soft terms
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 15
domain: physics
library: physics
category: string-theory
page: cmp-susy-breaking-soft-terms
deps:
  - def-cmp-compactification-scale-hierarchy
  - def-cmp4-compactification-derived-moduli-eft-data
  - post-four-dimensional-n1-matter-coupled-supergravity
  - pthm-four-dimensional-n1-fd-scalar-potential
dependency_roles:
  def-cmp-compactification-scale-hierarchy: formulation-prerequisite
  def-cmp4-compactification-derived-moduli-eft-data: formulation-prerequisite
  post-four-dimensional-n1-matter-coupled-supergravity: physical-assumption
  pthm-four-dimensional-n1-fd-scalar-potential: physical-result
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional tree-level formulae in a declared local two-derivative four-dimensional N=1 Einstein-frame supergravity EFT. They do not predict a compactification-independent spectrum, an observed superpartner mass, or the size of loop, anomaly, threshold, or renormalization-group corrections. The retained visible scalar Taylor coefficients through cubic order are auxiliary-induced; V0 is the F-sector value, not an independently shifted total vacuum energy."
empirical_premises: []
sources:
  references:
    - title: "J. P. Conlon, S. S. Abdussalam, F. Quevedo, and K. Suruliz, Soft SUSY Breaking Terms for Chiral Matter in IIB String Compactifications, arXiv:hep-th/0610129v2"
      url: "https://arxiv.org/pdf/hep-th/0610129v2"
      locator: "§§2.1–2.2, equations (17), (21)–(22); tree-level gaugino, scalar-mass, and trilinear formulae."
    - title: "L. McAllister and F. Quevedo, Moduli Stabilization in String Theory, arXiv:2310.20559v1"
      url: "https://arxiv.org/pdf/2310.20559v1"
      locator: "§4.4, equations (140)–(142), printed pp. 43–45; moduli-mediated formulae and their compactification dependence."
    - title: "Jan Louis, Introduction to Supersymmetry and Supergravity, University of Hamburg lecture notes"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf"
      locator: "§10.3, equations (10.19)–(10.24), printed pp. 38–40, and §10.4, equations (10.32)–(10.34), printed pp. 41–42; full lecture notes, with the §10.3 Minkowski/decoupling assumptions retained."
---

## Statement

Use reduced Planck units $M_P=1$, natural units $\hbar=c=1$, and a local four-dimensional Einstein-frame patch of the two-derivative old-minimal $N=1$ supergravity model. Let $Z^m$ be holomorphic moduli coordinates and let $\alpha$ range over a finite nonempty visible chiral field index set; $Q^\alpha$ are complex visible scalar coordinates expanded about $Q=0$. Repeated visible indices are summed and $\|Q\|$ is any fixed Euclidean norm on this finite-dimensional coordinate space. Through cubic order take
$$K=K_0(Z,\bar Z)+\sum_\alpha Z_\alpha(Z,\bar Z)|Q^\alpha|^2+O(\|Q\|^4),\qquad W=W_0(Z)+\frac16Y_{\alpha\beta\gamma}(Z)Q^\alpha Q^\beta Q^\gamma+O(\|Q\|^4),$$
where $K_0$ is real and $C^2$ with positive-definite Kähler metric $K_{0,m\bar n}$, each diagonal matter metric $Z_\alpha$ is real, $C^2$, and strictly positive, and $W_0,Y_{\alpha\beta\gamma}$ and the gauge-kinetic functions $f_a$ are holomorphic on the patch. The visible Kähler potential is $C^4$ in the full local coordinates with the displayed Taylor remainders differentiable to the orders used below; $Y_{\alpha\beta\gamma}$ is symmetric, and only gauge-invariant Yukawa components are retained. The physical gauge sector has $\operatorname{Re}f_a>0$. Define $D_mW_0=\partial_mW_0+(\partial_mK_0)W_0$, $m_{3/2}=e^{K_0/2}|W_0|$, $V_0=V_F(Z,0)$, and use the moduli-breaking spurion convention $F^m=e^{K_0/2}K_0^{m\bar n}\overline{D_nW_0}$; this is the negative of the algebraically eliminated old-minimal auxiliary in the plus-linear-term convention of the adopted auxiliary Lagrangian. For a nonzero Yukawa component, define its trilinear coefficient by the displayed $A_{\alpha\beta\gamma}$ formula below; at a zero of $Y_{\alpha\beta\gamma}$ the regular quantity is the product $A_{\alpha\beta\gamma}Y_{\alpha\beta\gamma}$, interpreted by replacing $Y\,\partial_m\log Y$ with $\partial_mY$.

Assume the retained scalar potential is $V_{\rm ret}=V_F+V_D+U(Z,\bar Z)+R(Z,\bar Z,Q,\bar Q)$, where $V_F$ and $V_D$ are the chiral/gravity and vector auxiliary-elimination contributions of this model, $U$ is independent of the visible fields, and $R$ is $C^3$ in the real and imaginary visible coordinates with all visible derivatives of orders zero through three vanishing at $Q=0$. Thus no independent retained visible-field potential contributes through cubic order. The symbol $V_0=V_F(Z,0)$ retains its F-sector meaning: if $U\ne0$, it is not the total vacuum energy. These conditions concern the declared EFT Taylor coefficients, not a proof that an arbitrary compactification has no other contribution.

Assume the moduli $D$-term potential vanishes at $Q=0$ and no visible-sector $D$-term contributes through cubic order in $Q$. Omit loop/anomaly mediation, thresholds, renormalization-group running, and higher-derivative corrections. Canonical normalization $q^\alpha=Z_\alpha^{1/2}Q^\alpha$ and $\lambda_{a,c}=(\operatorname{Re}f_a)^{1/2}\lambda_a$ gives
$$M_a=\frac{F^m\partial_m f_a}{2\operatorname{Re}f_a},\qquad m_\alpha^2=m_{3/2}^2+V_0-F^m\bar F^{\bar n}\partial_m\partial_{\bar n}\log Z_\alpha,$$
$$A_{\alpha\beta\gamma}=F^m\left[\partial_mK_0+\partial_m\log Y_{\alpha\beta\gamma}-\partial_m\log(Z_\alpha Z_\beta Z_\gamma)\right].$$
The convention for $A_{\alpha\beta\gamma}$ is that the canonically normalized scalar potential contains $\frac16 A_{\alpha\beta\gamma}\widehat Y_{\alpha\beta\gamma}q^\alpha q^\beta q^\gamma+\mathrm{h.c.}$, where $\widehat Y_{\alpha\beta\gamma}=e^{K_0/2}Y_{\alpha\beta\gamma}/\sqrt{Z_\alpha Z_\beta Z_\gamma}$. These are conditional EFT formulae, not universal spectrum predictions or measured masses.

## Statement references

[Conlon, Abdussalam, Quevedo, and Suruliz, §§2.1–2.2](https://arxiv.org/pdf/hep-th/0610129v2)

[McAllister and Quevedo, §4.4](https://arxiv.org/pdf/2310.20559v1)

[Louis, §§10.3–10.4, full lecture notes](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf)

## Facts & Assumptions

**Given:** A local four-dimensional Einstein-frame $N=1$ moduli EFT with the stated Kähler metric, visible matter expansion, gauge functions, and moduli auxiliary data.

[F1] [[pthm-four-dimensional-n1-fd-scalar-potential|Four-Dimensional $N=1$ F- and D-Term Scalar Potential]]: for the adopted old-minimal two-derivative model, $V_F=e^{K/M_P^2}(K^{i\bar j}D_iW\overline{D_jW}-3|W|^2/M_P^2)$ after algebraic auxiliary elimination, with $D_iW=\partial_iW+(K_i/M_P^2)W$. Its proof is conditional on the stated Einstein/Planck conventions. Its identification with the entire scalar potential requires no independent potential term; its square-completion calculation always identifies the auxiliary contribution. Here [A3] specifies exactly which retained visible Taylor coefficients equal those auxiliary coefficients, without identifying $V_0$ with a separate moduli-only contribution.

[F2] [[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]] adopts the local Einstein-frame old-minimal component framework, the Kähler-line-bundle convention, and the raw chiral, gravity, and vector auxiliary density used by [F1].

[F3] [[def-cmp4-compactification-derived-moduli-eft-data]] defines the compactification-derived EFT input tuple, including the retained moduli chart, $K,W,f_{AB}$, four-dimensional Einstein frame, Planck normalization, truncation range, and omitted sectors. Its current Step 1 record is escalated because the O3/O7 coordinate and conditional $K/f$ suppliers and the local metric, orientifold, parity, and $N=2$ period inputs do not all have current ready records; we use only the declared EFT-data interface conditionally.

[F4] [[def-cmp-compactification-scale-hierarchy]] requires comparisons in a common external Einstein frame and distinguishes an actually established omitted-sector gap from a scale inferred only from total volume. Its current Step 1 record remains escalated on a conventions-readiness rationale that predates the live ready conventions carrier; no scale separation is inferred here, and the owner must refresh that record.

[A1] The positive spurion $F^m$ is the negative of the on-shell auxiliary $F^m_{\rm aux}$ in the sign convention of [F2]. The visible Kähler potential has no terms of degree three in $Q,\bar Q$; the displayed quadratic diagonal metric is the entire visible contribution needed through the claimed order.

[A2] Adopt the standard two-derivative component gauge-kinetic convention in which the unnormalized gaugino has kinetic normalization $\operatorname{Re}f_a$ and the auxiliary-induced bilinear is $-\frac14 F^m(\partial_m f_a)\lambda_a\lambda_a+\mathrm{h.c.}$. This fermionic term is an adopted component input; it is not inferred from the bosonic potential [F1].

[A3] The moduli $D$-term potential vanishes at $Q=0$, and its expansion contributes no quadratic or cubic visible soft coefficient. The result is restricted to the stated tree-level truncation. Assume the retained scalar potential is $V_{\rm ret}=V_F+V_D+U(Z,\bar Z)+R(Z,\bar Z,Q,\bar Q)$, where $V_F$ and $V_D$ are the chiral/gravity and vector auxiliary-elimination contributions of this model, $U$ is independent of the visible fields, and $R$ is $C^3$ in the real and imaginary visible coordinates with all visible derivatives of orders zero through three vanishing at $Q=0$. Thus no independent retained visible-field potential contributes through cubic order. The symbol $V_0=V_F(Z,0)$ retains its F-sector meaning: if $U\ne0$, it is not the total vacuum energy. These conditions concern the declared EFT Taylor coefficients, not a proof that an arbitrary compactification has no other contribution.

## Proof

**Given:** [F1]–[F4], the expansions and positivity hypotheses in the Statement, the spurion and gauge-component conventions [A1]–[A3], and $M_P=1$.

1.1 At $Q=0$ the visible auxiliary fields vanish, so [F1] gives $V_0=e^{K_0}(K_0^{m\bar n}D_mW_0\overline{D_nW_0}-3|W_0|^2)$. With the spurion convention in [A1], its positive quadratic norm is $K^0_{m\bar n}F^m\bar F^{\bar n}=e^{K_0}K_0^{m\bar n}D_mW_0\overline{D_nW_0}$, and hence $K^0_{m\bar n}F^m\bar F^{\bar n}=V_0+3m_{3/2}^2$. [given, F1, F2, A1, algebra]

1.2 In the component convention [A2], canonical normalization gives $\lambda_{a,c}=(\operatorname{Re}f_a)^{1/2}\lambda_a$. Thus the bilinear becomes $-\frac14F^m(\partial_m f_a)(\operatorname{Re}f_a)^{-1}\lambda_{a,c}\lambda_{a,c}+\mathrm{h.c.}$. [given, A2, algebra]

2.1 To second order in $Q$, the Schur complement of the visible block $K_{\alpha\bar\beta}=Z_\alpha\delta_{\alpha\beta}+O(\|Q\|^2)$ is $K_{0,m\bar n}+\sum_\alpha R_{m\bar n\alpha\bar\alpha}|Q^\alpha|^2+O(\|Q\|^3)$, where $R_{m\bar n\alpha\bar\alpha}:=\partial_m\partial_{\bar n}Z_\alpha-Z_\alpha^{-1}(\partial_mZ_\alpha)(\partial_{\bar n}Z_\alpha)$. Its inverse gives $K^{m\bar n}=K_0^{m\bar n}-\sum_\alpha K_0^{m\bar p}R_{p\bar q\alpha\bar\alpha}K_0^{q\bar n}|Q^\alpha|^2+O(\|Q\|^3)$, while the off-diagonal inverse blocks at first order are $K^{m\bar\alpha}=-K_0^{m\bar n}(\partial_{\bar n}Z_\alpha)\bar Q^{\bar\alpha}/Z_\alpha+O(\|Q\|^2)$ and $K^{\alpha\bar n}=-(\partial_mZ_\alpha)Q^\alpha K_0^{m\bar n}/Z_\alpha+O(\|Q\|^2)$. Also $D_mW=D_mW_0+\sum_\alpha(\partial_mZ_\alpha)W_0|Q^\alpha|^2+O(\|Q\|^3)$ and $D_\alpha W=Z_\alpha\bar Q^{\bar\alpha}W_0+O(\|Q\|^2)$. In $K^{i\bar j}D_iW\overline{D_jW}$, the cross terms from the $|Q^\alpha|^2$ correction to $D_mW$ cancel those from $K^{m\bar\alpha}D_mW_0\overline{D_\alpha W}$ and its conjugate. The remaining coefficient consists of $Z_\alpha V_0$ from $e^K$, $Z_\alpha m_{3/2}^2$ from the visible auxiliary norm, and $-F^m\bar F^{\bar n}R_{m\bar n\alpha\bar\alpha}$ from the moduli inverse block. Hence the unnormalized coefficient is $(m_{3/2}^2+V_0)Z_\alpha-F^m\bar F^{\bar n}R_{m\bar n\alpha\bar\alpha}$. [given, F1, F2, A1, A3, step 1.1, algebra]

3.1 Dividing that coefficient by $Z_\alpha>0$ is the canonical field change $q^\alpha=Z_\alpha^{1/2}Q^\alpha$. Since $R_{m\bar n\alpha\bar\alpha}/Z_\alpha=\partial_m\partial_{\bar n}\log Z_\alpha$, the physical scalar mass squared is $m_{3/2}^2+V_0-F^m\bar F^{\bar n}\partial_m\partial_{\bar n}\log Z_\alpha$. By [A3], $U$ has no visible derivatives and the quadratic Taylor coefficient of $R$ vanishes, so this auxiliary coefficient is also the retained scalar-mass coefficient; no total-vacuum-energy substitution for $V_0$ is used. [given, A1, A3, step 2.1, algebra]

3.2 The Taylor expansions are $D_\alpha W=Z_\alpha\bar Q^{\bar\alpha}W_0+\frac12Y_{\alpha\beta\gamma}Q^\beta Q^\gamma+O(\|Q\|^3)$ and $D_mW=D_mW_0+\sum_\delta(\partial_mZ_\delta)W_0|Q^\delta|^2+\frac16(\partial_mY_{\alpha\beta\gamma}+K_{0,m}Y_{\alpha\beta\gamma})Q^\alpha Q^\beta Q^\gamma+O(\|Q\|^4)$. The quadratic term in $D_mW$ is included for completeness and contributes no holomorphic cubic. In the moduli block of [F1], the cubic term in $D_mW$ contributes $\frac16 e^{K_0/2}F^m(\partial_mY_{\alpha\beta\gamma}+K_{0,m}Y_{\alpha\beta\gamma})Q^\alpha Q^\beta Q^\gamma$. The visible diagonal block contributes $+\frac12e^{K_0}Y_{\alpha\beta\gamma}\bar W_0Q^\alpha Q^\beta Q^\gamma$ from the cross product of the linear and quadratic terms of $D_\alpha W$; this cancels the $-\frac12e^{K_0}Y_{\alpha\beta\gamma}\bar W_0Q^\alpha Q^\beta Q^\gamma$ term from $-3e^K|W|^2$. The off-diagonal inverse block $K^{\alpha\bar n}$ from step 2.1 paired with the quadratic part of $D_\alpha W$ contributes $-\frac12e^{K_0/2}F^m(\partial_m\log Z_\alpha)Y_{\alpha\beta\gamma}Q^\alpha Q^\beta Q^\gamma$; relabeling the symmetric indices in the summed expression combines these terms into $-\frac16e^{K_0/2}F^mY_{\alpha\beta\gamma}(\partial_m\log Z_\alpha+\partial_m\log Z_\beta+\partial_m\log Z_\gamma)Q^\alpha Q^\beta Q^\gamma$. Therefore the full holomorphic cubic coefficient is $\frac16e^{K_0/2}F^m[\partial_mY_{\alpha\beta\gamma}+K_{0,m}Y_{\alpha\beta\gamma}-Y_{\alpha\beta\gamma}(\partial_m\log Z_\alpha+\partial_m\log Z_\beta+\partial_m\log Z_\gamma)]Q^\alpha Q^\beta Q^\gamma+\mathrm{h.c.}$. [given, F1, A1, step 2.1, algebra]

4.1 The canonical field change divides this coefficient by $\sqrt{Z_\alpha Z_\beta Z_\gamma}$, while the physical supersymmetric Yukawa is $\widehat Y_{\alpha\beta\gamma}=e^{K_0/2}Y_{\alpha\beta\gamma}/\sqrt{Z_\alpha Z_\beta Z_\gamma}$. Factoring $\widehat Y_{\alpha\beta\gamma}$ gives the stated $A_{\alpha\beta\gamma}$ when $Y_{\alpha\beta\gamma}\ne0$; without division by $Y$, the product is the regular coefficient from step 3.2. By [A3], neither $U$ nor $R$ has a visible cubic coefficient, so the computed trilinear is also the retained-potential trilinear. [given, A1, A3, step 3.2, algebra]

5.1 Comparing with the mass-term convention $-\frac12M_a\lambda_{a,c}\lambda_{a,c}+\mathrm{h.c.}$ yields $M_a=F^m\partial_mf_a/(2\operatorname{Re}f_a)$. By [F3]–[F4], this is a model-level EFT output in its declared frame and cutoff range; it alone implies no hierarchy or measured spectrum. [given, F3, F4, A2, step 1.2, algebra] ∎

## Unresolved prerequisites

The complete current statements/proofs of the direct suppliers were inspected against their exact uses. The data definition [F3] has a current escalated readiness record with unresolved O3/O7 coordinate, K/f, local-metric, orientifold, parity, and $N=2$ period inputs. The scale definition [F4] retains an escalated record whose conventions-readiness rationale predates the now-present, ready conventions carrier. The scalar-potential theorem [F1] and $N=1$ postulate [F2] also retain owner-held escalated records citing that now-ready conventions carrier as absent. These current readiness gaps remain open; this theorem does not refresh or override them. Its local conditional expansion is complete and promotes no EFT assumption to a compactification or empirical claim.
