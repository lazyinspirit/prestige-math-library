---
id: ex-aqft-two-group-nonzero-postnikov-unit-response
kind: example
title: Nonzero Postnikov class with unit background response
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-aqft-two-group-symmetry-realization
  - pthm-aqft-two-group-background-coupling
  - def-aqft-two-group-background
  - thm-aqft-two-group-background-consistency
  - def-aqft-finite-background-two-groupoid
dependency_roles:
  def-aqft-two-group-symmetry-realization: formulation-prerequisite
  pthm-aqft-two-group-background-coupling: physical-result
  def-aqft-two-group-background: mathematical-premise
  thm-aqft-two-group-background-consistency: mathematical-premise
  def-aqft-finite-background-two-groupoid: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: One explicit finite background on a closed triangulated 3-sphere and its unit-weight response for a finite 2-group cochain model; no continuum QFT or empirical claim is asserted.
sources:
  references:
    - title: "Francesco Benini, Clay Córdova, and Po-Shen Hsin, On 2-Group Global Symmetries and Their Anomalies"
      url: https://arxiv.org/pdf/1803.09336
      locator: "§2.3 and §1.3, printed pp. 18–20 and 8–9 / PDF pp. 19–21 and 8–9"
    - title: "Sakura Schäfer-Nameki, ICTP Lectures on (Non-)Invertible Generalized Symmetries"
      url: https://arxiv.org/pdf/2305.18296v2
      locator: "§§2.8.1–2.8.2, printed pp. 28–33"
---

## Example

Let $K=\partial\Delta^4$ be the ordered boundary complex of a $4$-simplex with vertices $0<1<2<3<4$, a finite triangulation of the closed oriented $3$-sphere. Let $G=A=\mathbb Z_2$ under addition with trivial action, and define $\beta(g,h,k)=ghk$ modulo $2$. On vertices set $q=(0,1,0,1,0)$, put $a_{ij}=q_j-q_i$, and define $B_{ijk}=q_i a_{ij}a_{jk}+c_{jk}-c_{ik}+c_{ij}$ modulo $2$, where the edge cochain $c$ has $c_{01}=c_{03}=c_{23}=1$ and all other edge labels zero. Then $\beta$ is a normalized $3$-cocycle and is not the coboundary of any normalized $2$-cochain, so its Postnikov class is nonzero under the cohomology convention of the background definition. The edge cochain is flat, and $\delta_aB=a^*\beta$ on every tetrahedron. On tetrahedron $0123$, $B_{012}=1$ and $B_{013}=B_{023}=B_{123}=0$, so $\delta_aB=1$. For the $0$-form gauge labels $g_0=1$, $g_1=g_2=g_3=g_4=0$ and all $1$-form labels zero, the transformed edges on $0123$ are $a'_{01}=0$, $a'_{12}=a'_{23}=a'_{02}=1$, and $a'_{13}=a'_{03}=0$; all four transformed face labels on that tetrahedron vanish. In the finite unit-response model, the partition weight remains $1$ and the gauge phase is trivial despite the nonzero Postnikov class. This is a finite response example, not a continuum QFT realization.

## Example references

[Benini, Córdova, and Hsin, §2.3 and §1.3](https://arxiv.org/pdf/1803.09336)

[Schäfer-Nameki, §§2.8.1–2.8.2](https://arxiv.org/pdf/2305.18296v2)

## Facts & Assumptions

**Given:** $K=\partial\Delta^4$ with its ordered simplices, $G=A=\mathbb Z_2$ with trivial action, $\beta(g,h,k)=ghk$, vertex potential $q=(0,1,0,1,0)$, the stated edge cochain $c$, the resulting face cochain $B$, the gauge parameters, and the finite unit-response model.

[A1] Adopted finite model data: every allowed background has one configuration with measure $1$ and action $0$, and every gauge arrow fixes it; hence the model weight is $1$ on every background.

[F1] [[def-aqft-two-group-background]]: a normalized group $3$-cocycle is identified modulo coboundaries of normalized $2$-cochains; the background equation on this tetrahedron is $B_{123}-B_{023}+B_{013}-B_{012}=\beta(a_{01},a_{12},a_{23})$ for the trivial action.

[F2] [[thm-aqft-two-group-background-consistency]]: the prescribed $(g,\lambda)$ formula transforms admissible backgrounds to admissible backgrounds. Its complete current proof and current-ready Step 1 record were inspected.

[F3] [[def-aqft-finite-background-two-groupoid]]: vertex labels $g_i$ and edge labels $\lambda_{ij}$ define raw gauge $1$-arrows, with the displayed $\beta$-correction to $B$.

[F4] [[def-aqft-two-group-symmetry-realization]]: the finite model response and its action/measure are independent inputs on the allowed background groupoid; unit weight is an admissible selected response.

[F5] [[pthm-aqft-two-group-background-coupling]]: under a bijective gauge-arrow action and the specified phase law, the partition function changes by exactly that phase. Its hypotheses are the specified finite gauge bijections and coherent model phase law.

## Verification

1.1 The cochain $\beta(g,h,k)=ghk$ vanishes whenever any input is $0$, so it is normalized. For the trivial action, its four-variable coboundary is $hkl-(g+h)kl+g(h+k)l-gh(k+l)+ghk$; in $\mathbb Z_2$ minus equals plus, and expansion makes each of $hkl$, $gkl$, $ghl$, and $ghk$ occur twice, so $\delta\beta=0$. Any normalized $2$-cochain $c$ on $\mathbb Z_2$ can be nonzero only at $(1,1)$, and $(\delta c)(1,1,1)=c(1,1)-c(0,1)+c(1,0)-c(1,1)=0$, whereas $\beta(1,1,1)=1$; thus $\beta$ is not a coboundary and its class is nonzero. [given, F1, algebra]

2.1 For any tetrahedron $i<j<k<l$, set $u=a_{ij}$, $v=a_{jk}$, and $w=a_{kl}$. Flatness from the vertex potential gives $a_{ik}=u+v$, $a_{jl}=v+w$, and $q_j=q_i+u$. For $b_{ijk}=q_i a_{ij}a_{jk}$, expansion in $\mathbb Z_2$ gives $(\delta b)_{ijkl}=(q_i+u)vw+q_i(u+v)w+q_i u(v+w)+q_iuv=uvw$, since every term containing $q_i$ occurs twice. Expanding $(\delta^2c)_{ijkl}=(\delta c)_{jkl}-(\delta c)_{ikl}+(\delta c)_{ijl}-(\delta c)_{ijk}$ with $(\delta c)_{ijk}=c_{jk}-c_{ik}+c_{ij}$ shows each edge value occurs twice, so $\delta^2c=0$. Thus $\delta_aB=\delta b+\delta^2c=a_{ij}a_{jk}a_{kl}=\beta(a_{ij},a_{jk},a_{kl})$ on every tetrahedron. On $0123$, direct substitution gives $B_{012}=1$ and $B_{013}=B_{023}=B_{123}=0$, hence the displayed tetrahedron value is $1$. Therefore $(a,B)$ is an allowed background on the closed triangulation. [given, F1, step 1.1, algebra]

3.1 With $g=(1,0,0,0,0)$, the formula $a'_{ij}=g_i+a_{ij}-g_j$ gives the listed edge labels on $0123$. On its face $012$, $\zeta^g_{012}=-\beta(1,1,1)=1$ in $\mathbb Z_2$; on faces $013$, $023$, and $123$, every term in $\zeta^g$ has a zero argument, so those corrections vanish. With $\lambda=0$ and the original local $B$ values, this gives $B'_{012}=1+1=0$ and $B'_{013}=B'_{023}=B'_{123}=0$. Hence $\delta_{a'}B'=0=\beta(a'_{01},a'_{12},a'_{23})=\beta(0,1,1)$ on $0123$. The theorem [F2] ensures the gauge transform also satisfies the equation on the other tetrahedra. [F1, F2, F3, step 2.1, algebra]

4.1 By [A1], both configurations have weight $1$ and the gauge bijection fixes the unique configuration, so the partition functions agree with phase $1$. The coupling theorem [F5] yields the same relation. Thus this selected response has no anomaly phase although its background Postnikov class is nonzero; this conclusion uses the separate unit-response model input, not $\beta$ alone. [A1, F4, F5, step 3.1, algebra] ∎

## Remarks

The singleton unit-response assignment here specifies a background-response functor and its phase only. It does not construct an effective nontrivial defect action on dynamical observables or claim an effective realization of the full selected physical symmetry. The cochain and response computations remain meaningful without that additional realization data.

The diagram shows tetrahedron $0123$, one of the five 3-simplices in $K$. Arrows follow the increasing vertex order, and each $B_{ijk}$ label belongs to the corresponding oriented face. It records incidence only; the equations and calculations above establish the background and gauge-transform claims.

```tikz
\begin{tikzpicture}[scale=0.95,>=stealth]
  \coordinate (v0) at (0,0);
  \coordinate (v1) at (3,0);
  \coordinate (v2) at (1.5,2.5);
  \coordinate (v3) at (1.5,0.85);
  \draw[->] (v0) -- node[below] {$a_{01}$} (v1);
  \draw[->] (v0) -- node[left] {$a_{02}$} (v2);
  \draw[->] (v1) -- node[right] {$a_{12}$} (v2);
  \draw[->] (v0) -- node[left] {$a_{03}$} (v3);
  \draw[->] (v1) -- node[right] {$a_{13}$} (v3);
  \draw[->] (v2) -- node[left] {$a_{23}$} (v3);
  \node[below left] at (v0) {$0$};
  \node[below right] at (v1) {$1$};
  \node[above] at (v2) {$2$};
  \node[below] at (v3) {$3$};
  \node at (1.5,-0.55) {$B_{012}$};
  \node at (0.8,0.55) {$B_{013}$};
  \node at (1.08,1.55) {$B_{023}$};
  \node at (2.12,1.42) {$B_{123}$};
\end{tikzpicture}
```
