---
id: thm-nrqm-magnetic-and-detection-galilean-covariance
aliases: [ nrqm-magnetic-and-detection-galilean-covariance ]
kind: theorem
domain: mathematics
title: "Galilean boost covariance of the Schrodinger model with bounded potential"
status: published
origin: pipeline
dependency_level: 4
deps:
  [
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint,
    thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators,
    lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group,
    def-unbounded-integral-against-a-pvm,
    thm-algebra-of-derivatives,
    thm-chain-rule-for-total-derivatives,
    thm-complex-exponential-addition-and-real-extension,
    cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn,
    def-sobolev-space-wkp-and-its-norm,
    def-hilbert-space,
    def-countable-choice,
    def-axiom-of-choice,
    cor-mean-value-theorem
  ]
dependency_roles:
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "C. Torre, Galilean Relativity and the Path Integral Formalism in Quantum
        Mechanics, arXiv:2306.13487 (2023), Section 4 equations (4.23)-(4.24),
        pages 12-13: the boost phase and the transformed initial wave function;
        Section 6 equation (6.2), page 17: boost action on wave functions"
      url: "https://arxiv.org/pdf/2306.13487"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 7.2 printed pages 167-168 (PDF pages 179-180): the free operator
        on H2 and its Fourier multiplication representation; Section 7.3 printed
        pages 169-170 (PDF pages 181-182): free time evolution; Section 8.1
        printed pages 173-174 (PDF pages 185-186): position and momentum,
        translations and Fourier unitary equivalence"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Fix $\hbar>0$, $m>0$,
a real bounded measurable $V:\mathbb R^3\to\mathbb R$, and let
$K:=\frac1{2m}\sum_jP_j^2+M_V$ with domain $W^{2,2}(\mathbb R^3;\mathbb C)$
be the free-plus-bounded-potential operator of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (c); write $V_u(x,t):=V(x-ut)$ for $u\in\mathbb R^3$. For $u\in\mathbb R^3$
and $t\in\mathbb R$ define the **boost operator**
$$\bigl(B_u(t)\psi\bigr)(x):=e^{\,i\bigl(\frac m\hbar u\cdot x-\frac{m|u|^2}{2\hbar}t\bigr)}\psi(x-ut), \qquad \psi\in L^2(\mathbb R^3;\mathbb C).$$
Then:

(a) for every $t$, $B_u(t)$ is unitary with $B_u(t)^{-1}=B_u(t)^*$, and
$B_u(t)$ maps $W^{1,2}$ and $W^{2,2}$ onto themselves;

(b) for every $u_0\in W^{2,2}$ and every $s\in\mathbb R$ the curve
$v(t):=B_u(t)\,e^{-i(t-s)K/\hbar}B_u(s)^{-1}u_0$ lies in $W^{2,2}$, is differentiable into
$L^2$ on $\mathbb R$, and satisfies $v(s)=u_0$ and
$$i\hbar\,v'(t)=\Bigl(\frac1{2m}\sum_jP_j^2+M_{V_u(\cdot,t)}\Bigr)v(t) \qquad(t\in\mathbb R),$$
where $M_{V_u(\cdot,t)}$ is multiplication by $x\mapsto V(x-ut)$. It is the
unique such curve: if $w:\mathbb R\to W^{2,2}$ is continuous into
$W^{2,2}$, differentiable into $L^2$ and satisfies the same equation with
$w(s)=u_0$, then $w=v$;

(c) the two-parameter family
$U_u(t,s):=B_u(t)\,e^{-i(t-s)K/\hbar}\,B_u(s)^{-1}$ consists of unitaries
preserving $W^{2,2}$, satisfies $U_u(t,t)=I$,
$U_u(t,r)U_u(r,s)=U_u(t,s)$, and $v(t)=U_u(t,s)v_0$ is the solution of (b)
at time $s$ for every $v_0\in W^{2,2}$;

(d) *free propagator covariance.* With $K_0:=\frac1{2m}\sum_jP_j^2$ (that is
$V=0$) one has
$B_u(t)e^{-i(t-s)K_0/\hbar}=e^{-i(t-s)K_0/\hbar}B_u(s)$ for all $t,s$.

All assertions concern the displayed unitary family and the Schrodinger-type
equation; no Lorentz structure, no photon limit and no worldline of an
unmeasured particle is asserted.

## Facts & Assumptions

**Given:** $\hbar,m>0$, $u\in\mathbb R^3$, a real bounded measurable $V$, the boost $B_u(t)=M_{e^{i\varphi(\cdot,t)}}T_{ut}$ with phase $\varphi(x,t):=\frac m\hbar u\cdot x-\frac{m|u|^2}{2\hbar}t$, translation $T_af(x)=f(x-a)$, the operator $K=\frac1{2m}\sum_jP_j^2+M_V$, and $A:=\frac1{2m}\sum_jP_j^2+M_{V_u(\cdot,t)}$.

[F1] $M_V$ is bounded self-adjoint; $K$ is self-adjoint with $D(K)=W^{2,2}$, and $e^{-itK/\hbar}$ is a strongly continuous unitary group with $e^{-itK/\hbar}D(K)=D(K)$, commuting with $K$ on $D(K)$, and derivative $-\frac i\hbar Kx$ exactly on $D(K)$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (c), [[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-unbounded-integral-against-a-pvm]]).

[F2] Translations and unimodular multiplications: $T_{a}$ is unitary and preserves $W^{1,2}$, $W^{2,2}$, with $D_j(T_a f)=T_a(D_jf)$ ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]] clause (c)); the phase family $M_{e^{i\varphi(\cdot,t)}}$ is unitary, preserves $W^{1,2}$ and $W^{2,2}$, and has $t$-derivative $i(\partial_t\varphi)M_{e^{i\varphi(\cdot,t)}}=-\frac{im|u|^2}{2\hbar}M_{e^{i\varphi(\cdot,t)}}$ on $L^2$ ([[thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation]] applied with $(q,\hbar,\chi)=(1,1,\varphi)$, whose hypotheses hold because $\varphi$ is affine in $x$ and $\partial_t\varphi=-\frac{m|u|^2}{2\hbar}$).

[F3] For a smooth scalar $f:\mathbb R^3\to\mathbb C$, define $\nabla f:=(\partial_1f,\partial_2f,\partial_3f)$ and $\Delta f:=\sum_{j=1}^3\partial_j^2f$. The complex exponential addition law $\exp(z+w)=\exp z\exp w$ holds ([[thm-complex-exponential-addition-and-real-extension]]). For fixed $t$, put $\alpha_j:=\partial_j\varphi=mu_j/\hbar$; the gauge-domain theorem F2, clause (b), gives the first derivative identity as an $L^2$ class, which is classical for smooth $\psi$; differentiating it with the product rule [[thm-algebra-of-derivatives]] gives $\partial_j(e^{i\varphi}\psi)=e^{i\varphi}(\partial_j\psi+i\alpha_j\psi)$, and, since $\alpha_j$ is constant in $x$, $\partial_j^2(e^{i\varphi}\psi)=e^{i\varphi}(\partial_j^2\psi+2i\alpha_j\partial_j\psi-\alpha_j^2\psi)$. Summing these coordinate identities yields the gradient and Laplacian formulas used below.

[F4] Density extends the identities of [F3] to the Sobolev classes. First, for fixed $\psi\in W^{1,2}$ the translation-difference-quotient identity $\frac1h(T_{uh}\psi-\psi)\to-u\cdot\nabla\psi$ in $L^2$ as $h\to0$: for smooth $\psi$ this is the classical chain rule, $\frac1h(T_{uh}\psi-\psi)(x)=-\frac1h\int_0^h(u\cdot\nabla\psi)(x-su)\,ds$, and the bound $\|\frac1h(T_{uh}\nu-\nu)\|\le\|u\cdot\nabla\nu\|$ for smooth $\nu$ together with the density of $C_c^\infty$ in $W^{1,2}$ extends the identity to all $\psi\in W^{1,2}$ (the translation is isometric by [F2]). Second, for $\rho\in W^{1,2}$ and $w:=B_u\rho$, one has $B_u(\nabla\rho)=\nabla w-i\frac m\hbar u\,w$ as $L^2$ vector classes; and for $\rho\in W^{2,2}$ also $B_u(\Delta\rho)=\Delta w-2i\frac m\hbar u\cdot\nabla w-\frac{m^2|u|^2}{\hbar^2}w$ as multiplier classes. Both follow from the smooth case in [F3] by density of $C_c^\infty$ in $W^{1,2}$ and $W^{2,2}$ ([[def-sobolev-space-wkp-and-its-norm]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]) and continuity of the maps involved in the relevant norms.

[F5] $P_j=-i\hbar D_j$ on its domain, so $u\cdot P\psi=-i\hbar\,u\cdot\nabla\psi$ for $\nabla\psi\in L^2$; and $B_u(t)^{-1}=T_{-ut}M_{e^{-i\varphi(\cdot,t)}}$ with the analogous derivative $i(\partial_t\varphi)$ term ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]], [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], [F2]).

[F6] A real function continuous on a closed interval and differentiable in its interior with zero derivative is constant, by [[cor-mean-value-theorem]]; restrictions of a differentiable curve to compact intervals satisfy these continuity hypotheses.

## Proof

1.1 [Unitarity and domain preservation] By [F2], $B_u(t)$ is a product of two unitary operators preserving $W^{1,2}$ and $W^{2,2}$, hence unitary on $L^2$ and preserving both Sobolev spaces; its inverse is $T_{-ut}M_{e^{-i\varphi}}$, so $B_u(t)^{-1}=B_u(t)^*$ and (a) holds. [given, F2]

1.2 [Derivative identities] Put $\lambda:=\frac{m|u|^2}{2\hbar}$. Direct computation from the definition gives $B_u(t+h)=B_u(t)\,e^{-i\lambda h}T_{uh}$, so for fixed $\psi\in W^{1,2}$ the difference quotient is $\frac1h\bigl(B_u(t+h)\psi-B_u(t)\psi\bigr)=B_u(t)\bigl[e^{-i\lambda h}\frac{T_{uh}\psi-\psi}h+\frac{e^{-i\lambda h}-1}h\psi\bigr]$. The bracket tends to $-u\cdot\nabla\psi-i\lambda\psi$ in $L^2$: the first term by the translation-difference-quotient identity of [F4] (classical chain rule [F3] extended by density), the second by [F2] instantiated at the affine phase $\varphi'(x,t):=-\lambda t$, which gives $\frac d{dt}e^{-i\lambda t}=-\frac{im|u|^2}{2\hbar}e^{-i\lambda t}$. Hence $\frac d{dt}[B_u(t)\psi]=-i\lambda B_u(t)\psi-B_u(t)(u\cdot\nabla\psi)$. By the transported-gradient identity of [F4], $B_u(t)(u\cdot\nabla\psi)=u\cdot\nabla(B_u(t)\psi)-2i\lambda B_u(t)\psi$, so the identity also reads $\frac d{dt}[B_u(t)\psi]=i\lambda B_u(t)\psi-u\cdot\nabla(B_u(t)\psi)$; replacing $u$ by $-u$, which gives $B_{-u}(t)=B_u(t)^{-1}$ directly from the definition, yields $\frac d{dt}[B_u(t)^{-1}\eta]=i\lambda B_u(t)^{-1}\eta+u\cdot\nabla(B_u(t)^{-1}\eta)$ for fixed $\eta\in W^{1,2}$. [given, F2, F3, F4, algebra]

1.3 [Transported potential] $B_u(t)M_VB_u(t)^{-1}=M_{V(\cdot-ut)}$: indeed $T_{ut}M_VT_{-ut}=M_{V(\cdot-ut)}$ by the change of variables $y=x-ut$, and conjugation by a unimodular multiplication fixes multiplication by a real function. [given, F2, algebra]

1.4 [Transported Laplacian] Let $\rho\in W^{2,2}$ and $w:=B_u(t)\rho$. Applying [F4] twice, $B_u(\nabla\rho)=\nabla w-i\frac m\hbar u\,w$ and $B_u(\Delta\rho)=\Delta w-2i\frac m\hbar u\cdot\nabla w-\frac{m^2|u|^2}{\hbar^2}w$; consequently $B_u(t)(-\frac{\hbar^2}{2m}\Delta\rho)=-\frac{\hbar^2}{2m}\Delta w+i\hbar\,u\cdot\nabla w+\frac{m|u|^2}{2}w$. [given, F4, algebra]

2.1 [Forward equation and initial data] Let $u_0\in W^{2,2}$ and $s\in\mathbb R$, put $w_0:=B_u(s)^{-1}u_0$, $w(t):=e^{-i(t-s)K/\hbar}w_0$ and $v(t):=B_u(t)w(t)$. By [F1] the group preserves $D(K)$, commutes with $K$ there and is strongly continuous both on $L^2$ and on $D(K)$ with graph norm: apply strong continuity to $w_0$ and $Kw_0$. That graph norm is equivalent to the $W^{2,2}$ norm, since the free operator has this equivalence and the bounded perturbation satisfies $\|K_0f\|\le\|Kf\|+\|V\|_\infty\|f\|$ and $\|Kf\|\le\|K_0f\|+\|V\|_\infty\|f\|$. Hence $w$ is continuous into $W^{2,2}$ and differentiable into $L^2$ with $w'=-iKw/\hbar$. The boosts are strongly continuous on $W^{2,2}$: translations are isometries in each weak-derivative norm and are continuous by smooth density, while derivatives of the affine-phase multiplier are constant multiples of that multiplier; its time dependence is a scalar phase. They are locally uniformly bounded on $W^{2,2}$. Thus $v$ is continuous into $W^{2,2}$. For differentiability, decompose its quotient into $B_u(t+h)(w(t+h)-w(t))/h+(B_u(t+h)-B_u(t))w(t)/h$; strong continuity on $L^2$, unitarity and step 1.2 give $v'=B_u(t)w'+i\lambda v-u\cdot\nabla v$, where $\lambda=m|u|^2/(2\hbar)$. By steps 1.3-1.4, $B_u(t)Kw=-\hbar^2\Delta v/(2m)+i\hbar u\cdot\nabla v+m|u|^2v/2+M_{V_u(\cdot,t)}v$. Therefore $i\hbar v'=-m|u|^2v/2-i\hbar u\cdot\nabla v+B_u(t)Kw=(-\hbar^2\Delta/(2m)+M_{V_u(\cdot,t)})v$; both extra terms cancel. At the actual initial time, $v(s)=B_u(s)w_0=u_0$, with no assumption that $s=0$. This proves existence and the initial condition in (b). [given, step 1.2, step 1.3, step 1.4, F1, F2, F4, F5, algebra]

3.1 [Uniqueness with the transformed initial datum] Let $w$ be another solution in the stated class, and put $\rho(t):=B_u(t)^{-1}w(t)$. The continuity argument of step 2.1 applies also to the inverse boost. For its $L^2$ derivative, decompose the difference quotient just as in step 2.1, using the inverse derivative from step 1.2; this gives $\rho'=i\lambda\rho+u\cdot\nabla\rho+B_u(t)^{-1}w'$. The inverse transported identities of steps 1.3-1.4 give $B_u(t)^{-1}(-\hbar^2\Delta/(2m)+M_{V_u(\cdot,t)})B_u(t)\rho=K\rho-i\hbar u\cdot\nabla\rho+m|u|^2\rho/2$. Substituting the equation for $w$ cancels the scalar and first-order terms, so $i\hbar\rho'=K\rho$ and $\rho(s)=B_u(s)^{-1}u_0$. Set $G(t):=e^{i(t-s)K/\hbar}$ and $F(t):=G(t)\rho(t)$. The quotient decomposition $G(t+h)(\rho(t+h)-\rho(t))/h+(G(t+h)-G(t))\rho(t)/h$ converges in $L^2$: the first term by strong continuity and unitarity, the second by [F1] on the fixed vector $\rho(t)\in D(K)$. Hence $F'=G(t)(\rho'+iK\rho/\hbar)=0$. A differentiable Hilbert-space curve with zero derivative is constant, by applying the real scalar mean-value theorem to every bounded real linear functional. Thus $F(t)=F(s)=B_u(s)^{-1}u_0$, and $\rho(t)=e^{-i(t-s)K/\hbar}B_u(s)^{-1}u_0$. Multiplying by $B_u(t)$ proves $w(t)=B_u(t)e^{-i(t-s)K/\hbar}B_u(s)^{-1}u_0=v(t)$. This proves the uniqueness part of (b) with its actual initial datum. [given, step 1.2, step 1.3, step 1.4, step 2.1, F1, F5, algebra, F6]

4.1 [Propagator properties] Each $U_u(t,s)$ is unitary and preserves $W^{2,2}$ by (a) and [F1]; $U_u(t,t)=B_u(t)B_u(t)^{-1}=I$; and the composition law follows from $B_u(r)^{-1}B_u(r)=I$ and the group law of $e^{-i\tau K/\hbar}$: $U_u(t,r)U_u(r,s)=B_u(t)e^{-i(t-r)K/\hbar}e^{-i(r-s)K/\hbar}B_u(s)^{-1}=U_u(t,s)$. By step 2.1, $t\mapsto U_u(t,s)v_0$ solves the moving-potential equation with initial value $v_0$, and step 3.1 makes it unique. This is (c). [given, step 2.1, step 3.1, F1, algebra]

5.1 [Free covariance] Let $V=0$, so $V_u=0$, $K=K_0$ and the equation of (b) is the free equation. By step 4.1 with $V=0$, the propagator for the free equation is $B_u(t)e^{-i(t-s)K_0/\hbar}B_u(s)^{-1}$, and it equals $e^{-i(t-s)K_0/\hbar}$ because the free equation has at most one $W^{2,2}$-valued solution for each initial datum (step 3.1 with $V=0$). Multiplying the identity $B_u(t)e^{-i(t-s)K_0/\hbar}B_u(s)^{-1}=e^{-i(t-s)K_0/\hbar}$ on the right by $B_u(s)$ gives (d). This equality first holds on $W^{2,2}$ and extends to all $L^2$ because both sides are bounded unitaries and $C_c^\infty\subset W^{2,2}$ is dense in $L^2$ by [F4]. [step 3.1, step 4.1, F1, F4, algebra] ∎
