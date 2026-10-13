---
id: ex-cm-chaos-slope-transform-fixed-point-checks
kind: example
title: "The constant-code slope transform at $a=100$: the invariant slope of $h\\mapsto1/(2r_+-h)$ and the cone constants"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-stable-unstable-cones-and-line-slopes, lem-slope-graph-transforms-converge, lem-coded-quadratic-recurrence-is-a-contraction, thm-of-square-roots, def-abs-value, lem-of-abs-value]
dependency_roles:
  def-stable-unstable-cones-and-line-slopes: mathematical-premise
  lem-slope-graph-transforms-converge: mathematical-premise
  lem-coded-quadratic-recurrence-is-a-contraction: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, invariant sectors with a uniform expansion factor"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Section 13.2, expanding and contracting directions near a hyperbolic fixed point"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
verification:
  precheck: pass
---

## Example

Take $a=100$, so $L=\sqrt{74}$, $k=1/2$, and let $r_+=1+\sqrt{101}$ be the constant-code value of the all-$+1$ code. The fixed slope of the forward transform $\Phi_y(h)=1/(2y-h)$ at $y=r_+$ is the small root of $h=1/(2r_+-h)$, i.e. of

$$h^2-2r_+h+1=0:\qquad h=r_+-\sqrt{r_+^2-1}=\frac1{r_++\sqrt{r_+^2-1}},$$

and one has $0<h<1/2$. Moreover $\lambda=2L-k=2\sqrt{74}-\tfrac12>1$ and $\Phi_{r_+}$ maps $[-1/2,1/2]$ into $[-\lambda^{-1},\lambda^{-1}]\subseteq[-1/2,1/2]$ with Lipschitz constant $\lambda^{-2}<1/2$.

## Facts & Assumptions

**Given:** The parameter $a=100$, the constants $L=\sqrt{74}$, $k=1/2$, $r_+=1+\sqrt{101}$, and the slope maps of [[def-stable-unstable-cones-and-line-slopes]].

[L1] Slope transform data ([[def-stable-unstable-cones-and-line-slopes]], [[lem-slope-graph-transforms-converge]]): for $L\ge2$, $0<k<1$, $k(2L-k)\ge1$, $|y|\ge L$ and $|h|,|h'|\le k$, the forward slope map satisfies $|\Phi_y(h)|\le(2L-k)^{-1}$ and $|\Phi_y(h)-\Phi_y(h')|\le(2L-k)^{-2}|h-h'|$; under these hypotheses the cone $C^u_k$ is invariant under $DF$ at points with second coordinate of absolute value at least $L$, with expansion factor $2L-k>1$.

[L2] Constant-code check using [[lem-coded-quadratic-recurrence-is-a-contraction]], clause 4: for the given $r_+=1+\sqrt{101}$, direct expansion gives $r_+^2=100+2r_+$ and $0<r_+<12<13=R$. Thus the constant sequence $x_n=r_+$ lies in $B_R$ and satisfies $r_+=\sqrt{100+2r_+}$; uniqueness of the coded fixed point identifies it with the all-$+1$ code.

[L3] Square roots and inequalities ([[thm-of-square-roots]], [[def-abs-value]], [[lem-of-abs-value]]): $r_+>10$ because $\sqrt{101}>10$; $\sqrt{r_+^2-1}>r_+-1$; $2\sqrt{74}>17$ because $4\cdot74=296>289=17^2$.

## Verification

**Proof technique:** direct; solve the fixed-slope equation exactly and evaluate the cone constants at $a=100$.

1.1 Fixed slope: the equation $h=1/(2r_+-h)$ is equivalent to $h^2-2r_+h+1=0$, whose roots are $r_+\pm\sqrt{r_+^2-1}$; the small root is $h=r_+-\sqrt{r_+^2-1}=1/(r_++\sqrt{r_+^2-1})$. Since $r_+>10$ and $\sqrt{r_+^2-1}>9$, one has $0<h<1/(10+9)<1/2$. [given, L2, L3, algebra]

2.1 Cone constants: $L=\sqrt{74}>8\ge2$ and $0<k=1/2<1$. Also $r_+>10>L$, since $74<100$. By [L3], $\lambda=2\sqrt{74}-\tfrac12>17-\tfrac12>1$; also $k(2L-k)=\tfrac12(2\sqrt{74}-\tfrac12)>\tfrac12\cdot16>1$, so the invariance and expansion hypotheses of [L1] hold with $\lambda=2\sqrt{74}-\tfrac12$. The induced bounds are $|\Phi_{r_+}(h)|\le\lambda^{-1}<1/2$ and $|\Phi_{r_+}(h)-\Phi_{r_+}(h')|\le\lambda^{-2}|h-h'|$ with $\lambda^{-2}<1/2$, in agreement with [L1]. [given, step 1.1, L1, L3, algebra] ∎
## Remarks

- The fixed slope $h$ is the slope of the invariant unstable line at the fixed point in the cone $C^u_{1/2}$; the computation uses only the exact fixed-point relation $r_+^2=100+2r_+$ and rational estimates for the two square roots.
