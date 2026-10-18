---
id: ex-straight-chord-is-not-the-curved-double-well-path
kind: example
title: "The straight chord misses the curved double-well minimum-energy path"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-improved-tangent-climbing-neb
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (2)–(5): the normal-gradient condition for a minimum-energy path"
    - title: "Graeme Henkelman and Hannes Jónsson, Improved tangent estimate in the nudged elastic band method for finding minimum energy paths and saddle points"
      url: "https://hj.hi.is/papers/paperNewTangent.pdf"
      locator: "§IV, equations (8)–(12): improved tangents are defined from neighboring images"
---

## Example

Let $D=(-\pi/4,\pi/4)\times(-1/4,1/4)$, $X(s,n)=(1+n)(\cos s,\sin s)$, and $U=X(D)$. Put $a=\pi/6$, $W(s)=(s^2-a^2)^2$, and $V(X(s,n))=W(s)+n^2/2$ on $U$. The endpoints of the circular MEP are $(\cos a,-\sin a)$ and $(\cos a,\sin a)$. Their straight chord is the vertical segment $C(y)=(\cos a,y)$ for $-\sin a\le y\le\sin a$. The chord lies inside the annular sector, but it is not a MEP.

## Facts & Assumptions

**Given:** The sector chart and potential above, with $a=\pi/6$.

[F1] [[def-regular-minimum-energy-path-in-a-collision-free-tube]]: a regular path is a MEP only if its gradient component normal to the path tangent vanishes at every point.

[F2] [[alg-improved-tangent-climbing-neb]]: the NEB tangent is constructed from adjacent image differences; an energy-selected tangent does not change the continuous MEP equation.

[F3] [[thm-chain-rule-for-total-derivatives]]: the chart-coordinate derivative in the $n$ direction equals the ambient gradient paired with $N$.

## Proof

**Given:** The chord and potential in the Example.

1.1 Along $C$, the first coordinate is $\cos a>0$, and $|y|/\cos a\le\tan a<1$, so the polar angle lies in $[-a,a]\subset(-\pi/4,\pi/4)$. Its radius is between $\cos a=\sqrt3/2>3/4$ and $1<5/4$. Thus the whole chord is in the declared sector. [given, algebra]

1.2 The chord's tangent is $e_2=(0,1)$. At its midpoint $x_0=(\cos a,0)=X(0,n_0)$ with $n_0=\cos a-1\ne0$. In the chart $X_s=(1+n)T$ and $X_n=N$, where $T(0)=e_2$ and $N(0)=e_1$. The coordinate derivatives of $V$ there are $\partial_sV=W'(0)=0$ and $\partial_nV=n_0$, so by [F3] $\nabla V(x_0)\cdot e_1=n_0\ne0$. [F3, given, algebra]

2.1 Since $e_1$ is perpendicular to the chord tangent $e_2$, step 1.2 gives a nonzero normal component of the gradient at the chord midpoint. This violates the MEP condition in [F1], proving the chord is not the circular MEP. The improved tangent rule in [F2] only changes the discrete force direction; it does not make this straight segment satisfy the continuous normal-gradient equation. [F1, F2, step 1.2] ∎
