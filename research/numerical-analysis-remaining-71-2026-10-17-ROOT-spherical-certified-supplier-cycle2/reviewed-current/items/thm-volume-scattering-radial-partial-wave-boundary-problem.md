---
id: thm-volume-scattering-radial-partial-wave-boundary-problem
kind: theorem
title: Radial volume scattering separates into matched partial-wave boundary problems
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [thm-certified-scaled-spherical-bessel-enclosures, def-spherical-bessel-evaluation-contract, def-volume-integral-scattering-model, def-spherical-harmonic-partial-wave-conventions, lem-spherical-harmonics-form-complete-basis-and-addition-formula, def-spherical-bessel-and-hankel-functions, lem-spherical-bessel-and-hankel-radial-solutions, lem-outgoing-helmholtz-kernel-is-a-fundamental-solution, def-countable-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice and Dependent Choice are inherited from the stated complete-harmonic supplier. The mode equations are finite integrations; no uniqueness of the full scattering problem is inferred."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, version July 15, 2009, Chapter 8"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 147–153, radial equation, regular-origin solution, and square-well matching."
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
      locator: "PDF pp. 20–32, partial-wave radial equations and matching conditions."
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, Chapter 5, §5.2.6"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF pp. 79–82, the outgoing volume-potential relation used to obtain the distributional Helmholtz equation."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice. Let $R>0$, $k>0$, and $Q\in C([0,R];\mathbb C)$. Set $q(x)=Q(|x|)$ on $B_R$ and $q(x)=0$ outside $B_R$. Choose for every $\ell$ an orthonormal basis $Y_{\ell m}$ of $\mathcal H_\ell$. Suppose $u^{\rm inc}$ is a classical free Helmholtz field and $u=u^{\rm inc}+V$ satisfies the volume-potential equation $V(x)=\int_{B_R}G_k(x-y)q(y)u(y)dy$. Assume $u$ is continuous on $\overline B_R$, piecewise $C^2$ on either side of $|x|=R$, and $u$ and its radial derivative are continuous across that interface. For every spherical harmonic $Y_{\ell m}$ assume its coefficient
$$w_{\ell m}(r):=r\int_{S^2}u(r\omega)\overline{Y_{\ell m}(\omega)}d\sigma(\omega)$$
satisfies the regular-origin condition $w_{\ell m}(r)=O(r^{\ell+1})$ as $r\downarrow0$. Write the incident mode as $r\int u^{\rm inc}(r\omega)\overline{Y_{\ell m}}d\sigma=\alpha_{\ell m}rj_\ell(kr)$. The outgoing radiation condition is $\lim_{r\to\infty}\sup_{\omega\in S^2}|r(\partial_rV(r\omega)-ikV(r\omega))|=0$. Then each reduced mode satisfies
$$w_{\ell m}''(r)+\left(k^2+Q(r)-\frac{\ell(\ell+1)}{r^2}\right)w_{\ell m}(r)=0\quad(0<r<R),$$
is regular at $0$, and has for $r>R$ the form
$$w_{\ell m}(r)=\alpha_{\ell m}rj_\ell(kr)+\beta_{\ell m}rh_\ell^{(1)}(kr).$$
The interior and exterior values and first derivatives agree at $R$. This is a conditional mode reduction and matching statement; it asserts neither existence nor uniqueness of the total field.

## Facts & Assumptions

**Given:** The radial contrast, classical field, regular-origin, incident-mode, and outgoing hypotheses in the Statement.

[F1] [[def-volume-integral-scattering-model]] and [[lem-outgoing-helmholtz-kernel-is-a-fundamental-solution]]: the volume-potential equation implies $(-\Delta-k^2)(u-u^{\rm inc})=qu$ distributionally.

[F2] [[def-spherical-harmonic-partial-wave-conventions]]: $\Delta_{S^2}Y_{\ell m}=-\ell(\ell+1)Y_{\ell m}$.

[F3] [[lem-spherical-harmonics-form-complete-basis-and-addition-formula]]: under Countable Choice and Dependent Choice, the degree spaces are orthogonal and complete in $L^2(S^2)$.

[F4] [[lem-spherical-bessel-and-hankel-radial-solutions]]: $j_\ell$ and $h_\ell^{(1)}$ solve the free radial equation, have nonzero Wronskian, and respectively have regular and outgoing asymptotics.

## Proof

**Given:** The data in the Statement.

1.1 The boundedness of $Q$ and continuity of $u$ on the compact ball imply $qu\in L^1(B_R)$ with bounded support, so [F1] applies. Since $u^{\rm inc}$ solves $(-\Delta-k^2)u^{\rm inc}=0$, [F1] gives $\Delta u+(k^2+Q(r))u=0$ in $0<r<R$. For fixed $r$, multiply the polar Laplacian identity by $\overline{Y_{\ell m}}$, integrate over $S^2$, and integrate the angular Laplacian by parts; the periodic azimuthal boundary terms cancel and the polar boundary terms vanish with the factor $\sin\theta$. By [F2], the angular term is $-\ell(\ell+1)$ times the mode coefficient $a_{\ell m}(r):=w_{\ell m}(r)/r$. Hence
$$a_{\ell m}''+\frac2r a_{\ell m}'+\left(k^2+Q(r)-\frac{\ell(\ell+1)}{r^2}\right)a_{\ell m}=0.$$
Substitution of $w=ra$ yields the asserted reduced ODE. [F1, F2, algebra]

1.2 The stated origin condition is precisely the regular branch condition for this reduced mode and is retained as a hypothesis, so no singular solution is admitted. Because $u$ and its first derivatives are continuous across $r=R$, integration against the fixed smooth harmonic gives continuity of $w_{\ell m}$ and $w_{\ell m}'$ there. [given, algebra]

1.3 Outside $B_R$, the scattered field $V$ solves the free Helmholtz equation by [F1]. Its angular coefficient $v_{\ell m}(r)=\int_{S^2}V(r\omega)\overline{Y_{\ell m}(\omega)}d\sigma$ solves the free radial equation, whose independent solutions are $j_\ell(kr)$ and $h_\ell^{(1)}(kr)$ by the nonzero Wronskian in [F4]; write $v_{\ell m}=a j_\ell(kr)+b h_\ell^{(1)}(kr)$. The uniform radiation condition, integrated against the bounded $Y_{\ell m}$, gives $r(v'_{\ell m}-ikv_{\ell m})\to0$. Put $\vartheta=kr-\ell\pi/2$ and $c=(-i)^{\ell+1}$. The derivative recurrence in [F4] for $\ell\ge1$, and direct differentiation of the base functions for $\ell=0$, give $j_\ell'(z)=\cos(z-\ell\pi/2)/z+O(z^{-2})$ and $(h_\ell^{(1)})'(z)=ic e^{iz}/z+O(z^{-2})$, so $r(\partial_r-ik)j_\ell(kr)=e^{-i\vartheta}+O(r^{-1})$ while $r(\partial_r-ik)h_\ell^{(1)}(kr)=O(r^{-1})$. Thus the radiation limit forces $a=0$, and the scattered mode is $\beta_{\ell m}h_\ell^{(1)}(kr)$. Adding the stipulated incident mode gives the exterior expression in the Statement. [F1, F4, given]

2.1 The interior/exterior continuity of the total mode and its radial derivative from step 1.2 gives the two matching equalities at $R$. Completeness in [F3] makes these modal statements the corresponding partial-wave decomposition, without asserting that the mode equations alone solve the full inverse or uniqueness problem. [F3, step 1.2, step 1.3] ∎


## Numerical interface

For a fixed finite set of orders and a positive matching radius, [[thm-certified-scaled-spherical-bessel-enclosures]] supplies certified scaled values and argument derivatives of $j_\ell$ and outgoing $h_\ell^{(1)}$ on positive real argument enclosures. [[def-spherical-bessel-evaluation-contract]] also permits requesting their unscaled counterparts. At $z=kR>0$, the exterior matching columns are $Rj_\ell(z)$ and $Rh_\ell^{(1)}(z)$, with radial derivatives $j_\ell(z)+zj_\ell'(z)$ and $h_\ell^{(1)}(z)+z(h_\ell^{(1)})'(z)$. These identities follow by the product and chain rules. Thus the supplied first argument derivatives suffice, including at $\ell=0$.

The real-argument interface does not restrict the theorem's complex contrast $Q$: $Q$ enters the interior ODE while the exterior free wave number $k$ remains positive real. No evaluation at a complex wave number is used here. Certified exterior matching columns do not certify integration of the interior ODE, solvability of the complete matching system, total-field uniqueness, or the angular cutoff. Those claims retain their separate hypotheses and proofs. The mathematical mode-reduction statement above remains valid independently of whether numerical parameter enclosures have been provided.


For a numerical evaluation of these columns, supplied terminating positive-real parameter interfaces for $k$ and $R$ induce an argument interface for $kR$. On a width request $2^{-n}$, successively request both parameter boxes at indices $q=n,n+1,\ldots$, skip until both lower endpoints are positive, multiply their dyadic intervals exactly, and stop when the product width is at most $2^{-n}$. Each call terminates by hypothesis; positivity holds eventually because $k,R>0$. The parameter boxes are eventually bounded, and the product-width bound $\operatorname{width}(XY)\le\sup|X|\operatorname{width}(Y)+\sup|Y|\operatorname{width}(X)$ tends to zero. Thus the scan terminates for every requested $n$ and retains the exact, generally non-dyadic product. The same interval operations propagate the factors $R$ and $z=kR$ in the displayed matching columns. This numerical representation condition does not restrict the theorem's exact real parameters.
