---
id: lem-tgr-killing-thermal-normalization
kind: lemma
title: Killing temperature normalization and rigidity
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
deps: [def-tgr-stationary-thermal-carriers, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, cor-mean-value-theorem]
dependency_roles:
  def-tgr-stationary-thermal-carriers: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
sources:
  references:
    - title: "José Santiago and Matt Visser, Tolman-like temperature gradients in stationary spacetimes, §§III–V"
      url: "https://arxiv.org/pdf/1807.02915"
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §VI.2"
      url: "https://arxiv.org/pdf/2106.09235"
    - title: "David Tong, General Relativity, full Cambridge Part III lecture notes, §§2.2.3 and 4.3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
---

## Statement

Let $O$ and the smooth fields $(g,\nabla,\xi,T,u,N_\xi,\beta)$ be as in
[[def-tgr-stationary-thermal-carriers]]. Then
$$\beta\text{ is Killing}\quad\Longleftrightarrow\quad N_\xi T=T_K\text{ for a constant }T_K>0.$$
When this holds, $\beta=\xi/(k_BT_K)$, and the Killing congruence has
$$\xi(N_\xi)=0,\qquad a=\nabla\log N_\xi,\qquad \theta=0,\qquad \sigma_{ab}=0.$$
If $\xi$ is replaced by $b\xi$ with a constant $b>0$, then
$N_\xi$ and $T_K$ scale by $b$, while $u$ and $\beta$ are unchanged.

## Facts & Assumptions

**Given:** The connected open domain and smooth stationary carrier fields of
[[def-tgr-stationary-thermal-carriers]].

[F1] The definition supplies $N_\xi=\sqrt{-g(\xi,\xi)}>0$,
$u=\xi/N_\xi$, $g(u,u)=-1$, $\beta=u/(k_BT)$, and the Killing equation
$\nabla_{(a}\xi_{b)}=0$; $\nabla$ is torsion-free and metric-compatible
([[def-tgr-stationary-thermal-carriers]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[F2] On a real interval, a differentiable function with zero derivative is
constant by the mean value theorem ([[cor-mean-value-theorem]]).

## Proof

1.1 Differentiating $g(\xi,\xi)$ with the metric-compatible connection gives
$\xi(N_\xi)=0$, since $\xi^a\xi^b\nabla_a\xi_b=0$ by the Killing equation.
The same equation gives
$\xi^a\nabla_a\xi_b=-\tfrac12\nabla_b g(\xi,\xi)=N_\xi\nabla_bN_\xi$.
Therefore $a_b=u^a\nabla_a u_b=\nabla_b\log N_\xi$. Also
$\theta=\nabla_a(\xi^a/N_\xi)=0$ because $\nabla_a\xi^a=0$ and
$\xi(N_\xi)=0$. The symmetric derivative is
$\nabla_{(a}u_{b)}=-u_{(a}\nabla_{b)}\log N_\xi$; projecting both indices
with $h$ gives zero, so $\sigma_{ab}=0$. [given, F1, algebra]

1.2 Put $f:=(k_BN_\xi T)^{-1}>0$, so $\beta=f\xi$. If $\beta$ is
Killing, both $f\xi$ and $\xi$ have zero symmetric covariant derivative,
and hence $\xi_{(b}\nabla_{a)}f=0$. Contracting with $u^au^b$ gives
$u(f)=0$ because $\xi=N_\xi u$ and $N_\xi>0$; contracting with
$u^ah^b{}_c$ gives $h^b{}_c\nabla_bf=0$. The decomposition of a covector
into its $u$ and rest-space parts now gives $df=0$. [given, F1, algebra]

2.1 In a convex coordinate ball in $O$, join any two coordinate points by a
straight segment. The derivative of $f$ along that segment is zero by the
covector decomposition just proved, so [F2] makes $f$ constant on the ball.
Thus $f$ is locally constant on $O$. Each level set of $f$ and its complement are open; connectedness of $O$
therefore makes $f$ one positive constant. Equivalently $N_\xi T=T_K$ for a
constant $T_K>0$, and then $\beta=\xi/(k_BT_K)$. [step 1.2, F2, algebra]

3.1 Conversely, if $N_\xi T=T_K$ is constant, then
$\beta=\xi/(k_BT_K)$ is a constant multiple of the Killing field $\xi$ and
is Killing. Under $\xi\mapsto b\xi$, $N_\xi\mapsto bN_\xi$ and
$T_K\mapsto bT_K$, whereas $u=\xi/N_\xi$ and
$\beta=\xi/(k_BT_K)$ remain fixed. These identities prove the converse and
the normalization statement. [step 2.1, F1, algebra] ∎
