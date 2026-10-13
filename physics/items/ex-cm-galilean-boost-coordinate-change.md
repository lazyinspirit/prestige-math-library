---
id: ex-cm-galilean-boost-coordinate-change
kind: example
title: "Worked change of adapted chart with a rotation, a boost and a spatial shift"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-affine-time-space, lem-cm-adapted-coordinates-exist-and-are-unique, lem-cm-adapted-charts-and-galilean-transformations, def-cm-special-orthogonal-group]
dependency_roles:
  def-cm-affine-time-space: mathematical-premise
  lem-cm-adapted-coordinates-exist-and-are-unique: mathematical-premise
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, 2013), Section 1.2.1, printed pages 5-7"
      url: "https://www.damtp.cam.ac.uk/user/tong/relativity/dynrel.pdf"
verification:
  precheck: pass
---

## Example

Take $V=\mathbb R^4$ with coordinates $(t,x_1,x_2,x_3)$, $\tau(t,x_1,x_2,x_3)=t$, so that $K=\{0\}\times\mathbb R^3$ with the standard inner product $g$, and take $A=V$ as an affine space over itself. Let the first adapted chart be the standard one, $o=0$, $u=e_0$, $(e_1,e_2,e_3)$ the standard basis of $K$. Let the second adapted chart be

$$o'=e_2,\qquad u'=e_0+e_1,\qquad e_1'=e_2,\quad e_2'=-e_1,\quad e_3'=e_3,$$

which is adapted: $\tau(u')=1$, and $(e_1',e_2',e_3')$ is a positively oriented $g$-orthonormal basis of $K$.

For a point with first coordinates $(t,x_1,x_2,x_3)$, equating the two expansions gives $t'=t$, $x_2=x_1'+1$ and $x_1=t'-x_2'$, that is

$$x'_1=x_2-1,\qquad x'_2=t-x_1,\qquad x'_3=x_3,$$

which is the transformation $x'=Rx+vt+a$ of [[lem-cm-adapted-charts-and-galilean-transformations]] with $b=0$,

$$R=\begin{pmatrix}0&1&0\\-1&0&0\\0&0&1\end{pmatrix},\qquad v=\begin{pmatrix}0\\1\\0\end{pmatrix},\qquad a=\begin{pmatrix}-1\\0\\0\end{pmatrix}.$$

The matrix $R$ satisfies $R^{\mathsf T}R=I_3$ and $\det R=1$, so $R\in SO(3)$.

## Facts & Assumptions

**Given:** The two adapted charts displayed above, a point $p$ with first coordinates $(t,x_1,x_2,x_3)$, and the map $\gamma:\mathbb R\to A$, $\gamma(s)=(s,s,2s,0)$ in the first coordinates.

[L1] Adapted coordinates are unique: the coefficients in $p=o+tu+\sum_ix_ie_i$ and in the primed expansion are uniquely determined ([[lem-cm-adapted-coordinates-exist-and-are-unique]]).

[L2] Two adapted charts are related by $t'=t+b$ and $x'=Rx+vt+a$ with $R\in O(3)$, and $R\in SO(3)$ when both bases are positively oriented ([[lem-cm-adapted-charts-and-galilean-transformations]], [[def-cm-special-orthogonal-group]]).

## Verification

**Proof technique:** direct; substitute the chart data and check the displays.

1.1 The matrix $R$ has rows $(0,1,0)$, $(-1,0,0)$, $(0,0,1)$, so $R^{\mathsf T}R$ has entries: first diagonal $0^2+(-1)^2+0^2=1$, second diagonal $1^2+0^2+0^2=1$, third diagonal $1$, and off-diagonal entries $0\cdot1+(-1)\cdot0+0\cdot0=0$, $0\cdot0+(-1)\cdot0+0\cdot1=0$, $1\cdot0+0\cdot0+0\cdot1=0$; hence $R^{\mathsf T}R=I_3$, and $\det R=0\cdot(0\cdot1-0\cdot0)-1\cdot((-1)\cdot1-0\cdot0)+0=1$, so $R\in SO(3)$. [given, algebra]

2.1 For the point $p$ with first coordinates $(t,x_1,x_2,x_3)$ the direct substitution $p=o'+t'u'+\sum_ix_i'e_i'$ reads $(t,x_1,x_2,x_3)=(t',\,t'-x_2',\,1+x_1',\,x_3')$, whose unique solution is $t'=t$, $x_1'=x_2-1$, $x_2'=t-x_1$, $x_3'=x_3$; comparison with $x'=Rx+vt+a$ gives $Rx+vt+a=(x_2,-x_1,x_3)+(0,t,0)+(-1,0,0)=(x_2-1,\,t-x_1,\,x_3)$, so the transformation law of the lemma holds in this chart pair with the displayed $b,v,a,R$. [step 1.1, L1, L2, algebra]

3.1 For the curve $\gamma(s)=(s,s,2s,0)$, with first coordinate representative $x(s)=(s,2s,0)$, the second representative is $y(s)=(2s-1,\,s-s,\,0)=(2s-1,0,0)$ by step 2.1, so $y'(s)=(2,0,0)$ and $Rx'(s)+v=R(1,2,0)+(0,1,0)=(2,-1,0)+(0,1,0)=(2,0,0)$; also $x''=0$ and $y''=0$, and $R\cdot0=0$. This verifies $y'=Rx'+v$ and $y''=Rx''$ in the worked case. [step 2.1, L2, algebra] ∎

## Remarks

- The shift $a=(-1,0,0)$ is the coordinate vector of $o-o'=-e_2$ in the primed spatial basis. The change from $u$ to $u'=u+e_1$ supplies the boost $v=(0,1,0)$; since $b=0$, it adds no constant shift.

- The matrix $R$ is the change-of-basis matrix from $(e_1,e_2,e_3)$ to $(e_1',e_2',e_3')$, and its determinant is $1$ because both bases are positively oriented. Had one of the two bases been negatively oriented, the same computation would give $\det R=-1$ and $R\in O(3)\setminus SO(3)$.
