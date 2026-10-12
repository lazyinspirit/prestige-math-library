---
id: ex-cm-balances-impulse-and-rocket-checks
kind: example
title: "Worked impulse and restitution computations and a variable-mass rocket check"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [cor-differentiable-implies-continuous, thm-monotonicity-from-the-derivative, thm-cm-variable-mass-momentum-balance, def-euclidean-inner-product, def-interval, def-derivative, thm-algebra-of-derivatives, thm-logarithm-derivative-and-integral, thm-chain-rule-for-total-derivatives, cor-vector-valued-ftc-and-lipschitz-bound, thm-cauchy-schwarz-and-the-euclidean-norm]
dependency_roles:
  cor-differentiable-implies-continuous: mathematical-premise
  thm-monotonicity-from-the-derivative: mathematical-premise
  thm-cm-variable-mass-momentum-balance: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §§1.2-1.3, printed pp. 2-8: momentum balances and the variable-mass caution"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.4, Eqs. (3.30)-(3.37), printed pp. 40-42: centre-of-mass and reduced-mass kinetic splitting used in the collision arithmetic"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Example

Throughout, $e\in\mathbb R^3$ is a unit vector, $\lVert e\rVert_2=1$, for the Euclidean norm of [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]. All numbers are pure real numbers. For the two collision computations, $v_i^-$ and $v_i^+$ denote pre- and post-collision vectors. Given positive masses and $e_r\in[0,1]$, require only the finite algebraic relations

$$m_1v_1^++m_2v_2^+=m_1v_1^-+m_2v_2^-,\qquad v_2^+-v_1^+=-e_r(v_2^--v_1^-).$$

Define $J:=m_1(v_1^+-v_1^-)$ and

$$\Delta K:=\frac{m_1\lVert v_1^+\rVert_2^2+m_2\lVert v_2^+\rVert_2^2-m_1\lVert v_1^-\rVert_2^2-m_2\lVert v_2^-\rVert_2^2}{2}.$$

The two cases below solve these relations uniquely and compute $J$ and $\Delta K$ directly. No distributional jump theorem or choice assumption is used in these finite calculations.

**(i) Equal masses, half-elastic impulse.** Take $m_1=m_2=1$, approach velocities $v_1^-=1\,e$, $v_2^-=-1\,e$ and restitution coefficient $e_r=\frac12$. Then the unique post-collision vectors, impulse and kinetic-energy change are

$$v_1^+=-\tfrac12\,e,\qquad v_2^+=\tfrac12\,e,\qquad J=-\tfrac32\,e,\qquad \Delta K=-\tfrac34 .$$

**(ii) Elastic impulse with unequal masses.** Take $m_1=1$, $m_2=3$, $v_1^-=2\,e$, $v_2^-=0$ and $e_r=1$. Then

$$v_1^+=-1\,e,\qquad v_2^+=1\,e,\qquad J=-3\,e,\qquad \Delta K=0 .$$

**(iii) Rocket check.** On $I=[0,1]$ take $m(t):=2-t$, $v(t):=\ln\!\bigl(\frac{2}{2-t}\bigr)e$, $F\equiv0$, $r_{\mathrm{in}}\equiv0$, $r_{\mathrm{out}}\equiv1$, $w_{\mathrm{in}}\equiv0$, $w_{\mathrm{out}}(t):=v(t)-u_e\,e$ with $u_e:=1$. Then the two material balance identities of [[thm-cm-variable-mass-momentum-balance]] hold, the derived law reads $m(t)v'(t)=1\cdot e$, and $v(1)=\ln(2)\,e$. The naive closed-system reading $(mv)'=F\equiv0$ would instead force $v\equiv v(0)=0$ on $I$, which does not satisfy the material balance; the two readings differ as soon as $t>0$.

## Facts & Assumptions

**Given:** The unit vector $e$ and the explicit data of cases (i)-(iii); in cases (i) and (ii), the momentum and restitution relations and the definitions of $J$ and $\Delta K$ displayed above.

[L1] Norm and vector algebra: $\lVert ce\rVert_2=|c|$ for real $c$, because $e$ is a unit vector and the Euclidean norm is homogeneous ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

[L2] The rocket product-rule supplier ([[thm-cm-variable-mass-momentum-balance]]): for differentiable $m>0$ and $v$ on an interval with nonempty interior, the identities $m'=r_{\mathrm{in}}-r_{\mathrm{out}}$ and $(mv)'=F+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$ imply $mv'=F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$. This theorem has no choice assumption.

[L3] Differentiation: the sum, product and quotient rules hold ([[def-derivative]], [[thm-algebra-of-derivatives]]), $\log'(x)=1/x$ and $\log x=\int_1^xds/s$ for $x>0$ ([[thm-logarithm-derivative-and-integral]]), and composition obeys the chain rule ([[thm-chain-rule-for-total-derivatives]]). In particular $\log1=0$. Differentiability makes $\log$ continuous ([[cor-differentiable-implies-continuous]]); its strictly positive derivative makes it strictly increasing on $(0,\infty)$ ([[thm-monotonicity-from-the-derivative]]). Derivatives at endpoints of an interval use the domain-relative convention ([[def-derivative]], [[def-interval]]).

[L4] The vector fundamental theorem ([[cor-vector-valued-ftc-and-lipschitz-bound]] clause 1) gives $f(t)-f(0)=\int_0^tf'$ on $[0,t]$ when $f$ is differentiable there and $f'$ is integrable. We use it only for a zero derivative, whose integral is zero.

## Verification

**Proof technique:** direct; solve the finite momentum and restitution equations, compute both kinetic differences, and differentiate the prescribed rocket functions.

1.1 Case (i): the momentum relation reads $v_1^++v_2^+=0$, while restitution gives $v_2^+-v_1^+=e$. Adding and subtracting these equations gives the unique pair $v_1^+=-e/2$, $v_2^+=e/2$. Thus $J=(-1/2-1)e=-3e/2$, and the other momentum jump is $(1/2+1)e=3e/2=-J$. By [L1], $\Delta K=\frac12(1/4+1/4)-\frac12(1+1)=1/4-1=-3/4$. All claimed values follow from these two equations and this direct finite sum. [given, L1, algebra]

1.2 Case (ii): restitution gives $v_2^+-v_1^+=2e$, and momentum gives $v_1^++3v_2^+=2e$. Substitute $v_1^+=v_2^+-2e$ to obtain $4v_2^+=4e$, so uniquely $v_2^+=e$, $v_1^+=-e$. Then $J=(-1-2)e=-3e$ and the other momentum jump is $3(e-0)=3e=-J$. By [L1], $\Delta K=\frac12(1)+\frac32(1)-\frac12(4)=0$. This preserves the elastic zero-loss conclusion without invoking a conditional distributional result. [given, L1, algebra]

1.3 Case (iii): the scalar map $t\mapsto2/(2-t)$ is positive and smooth on an open neighbourhood of $[0,1]$, so the displayed $v$ is differentiable on all of $[0,1]$, endpoints included. The quotient and chain rules of [L3] give $v'(t)=\bigl(2/(2-t)^2\bigr)/\bigl(2/(2-t)\bigr)e=e/(2-t)$. Hence $m(t)=2-t\ge1$, $m'=-1=r_{\mathrm{in}}-r_{\mathrm{out}}$, and $mv'=e$. The product rule gives $(mv)'=-v+e=-w_{\mathrm{out}}=F+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$, since the inflow term is zero. Thus all hypotheses of [L2] are met on $I=[0,1]$, and its derived law is $mv'=-r_{\mathrm{out}}(w_{\mathrm{out}}-v)=e$. [given, L2, L3, algebra]

2.1 The rocket has $v(0)=0$, $m(1)=1$ and $v(1)=\log2\,e$. Let $\bar v$ instead be a differentiable velocity with $\bar v(0)=0$ obeying the naive law $(m\bar v)'=0$ on $[0,1]$. For every $0<t\le1$, applying [L4] to $m\bar v$ on $[0,t]$ gives $m\bar v=0$, hence $\bar v=0$ because $m\ge1$. This candidate fails the prescribed material balance already at $t=0$: $(m\bar v)'(0)=0$, whereas $-w_{\mathrm{out}}(0)=e\ne0$. Moreover, for every $0<t\le1$, $2/(2-t)>1$, so [L3] gives $\log(2/(2-t))>\log1=0$ and $v(t)\ne\bar v(t)$. Thus the readings differ as soon as $t>0$, with the original endpoint value and material-balance conclusion retained. [step 1.3, given, L1, L3, L4, algebra] ∎

## Remarks

The finite collision relations used here are the momentum-conservation and restitution equations appearing in clauses a-b of [[thm-cm-impulse-restitution-and-energy-loss]]. That theorem derives momentum jumps from a full distributional impulse model and assumes the Axiom of Countable Choice through its jump-derivative supplier. It is contextual here: the present explicit vectors and kinetic changes are proved directly, without claiming to instantiate that full model or importing its choice assumption.
