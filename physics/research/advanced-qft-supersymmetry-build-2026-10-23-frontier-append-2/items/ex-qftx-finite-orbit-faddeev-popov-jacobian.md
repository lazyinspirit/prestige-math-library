---
id: ex-qftx-finite-orbit-faddeev-popov-jacobian
kind: example
title: A Finite Orbit with Two Gauge-Condition Intersections
status: draft
origin: pipeline
dependency_level: 3
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
physical_scope: "A finite-dimensional regulated gauge-orbit example only; it is not a non-Abelian Yang–Mills field theory or a continuum functional measure."
deps:
  - def-qftx-gauge-slice-and-faddeev-popov-operator
dependency_roles:
  def-qftx-gauge-slice-and-faddeev-popov-operator: operational-prerequisite
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pass
---

## Example
Let $X=\mathbb R^2\setminus\{(0,0)\}$ have positive density $|dx\,dy|$, and let $K=S^1$ have angle coordinate $\theta$ and right-invariant density $|d\theta|$. Let $K$ act on the right by
$$(x,y)\cdot e^{i\theta}=(x\cos\theta-y\sin\theta,x\sin\theta+y\cos\theta).$$
For $r>0$, set $s_r=(r,0)$, choose an open neighborhood $U_r\subset\{x>0\}$ of $s_r$, let $S_r=U_r\cap\{y=0\}$ have density $|dx|$, and set $\chi(x,y)=y$ on $U_r$. The unit angular generator $1\in\mathfrak k=T_eK\cong\mathbb R$ has infinitesimal orbit vector
$$R_{s_r}(1):=\left.\frac{d}{d\theta}\right|_{0}(s_r\cdot e^{i\theta})=(0,r).$$
The Faddeev–Popov operator is the linear map $M_{s_r}:=d\chi_{s_r}\circ R_{s_r}:\mathfrak k\to\mathbb R$, and its density Jacobian relative to $|d\theta|$ and $|dy|$ is $\Delta_{\rm FP}(s_r)=|\det M_{s_r}|=r>0$. The full orbit $K\cdot s_r$ nevertheless meets the global condition $y=0$ at both $(r,0)$ and $(-r,0)$. Thus the local nonzero Jacobian proves transversality near $s_r$ but does not select one global representative for the orbit. The regulator group $K$ in this finite-dimensional toy is not identified with the model's non-Abelian structure group $G$.
## Example references

[[def-qftx-gauge-slice-and-faddeev-popov-operator|Finite-dimensional regulated gauge-slice and Jacobian definition]]

## Facts & Assumptions

**Given:** The finite-dimensional right action, local gauge condition, and regulated densities in the example statement.

[F1] A finite-dimensional regulated gauge-slice datum has infinitesimal orbit map $R_s=d\alpha_s|_e$, Faddeev–Popov operator $M_s=d\chi_s\circ R_s$, and Jacobian $\Delta_{\rm FP}=|\det M_s|$ when domain and codomain have the specified positive densities. [[def-qftx-gauge-slice-and-faddeev-popov-operator]]

## Verification

**Given:** [F1], $r>0$, and the rotation action on $X$.

1.1 Differentiating $(r,0)\cdot e^{i\theta}=(r\cos\theta,r\sin\theta)$ at $\theta=0$ gives $R_{s_r}(1)=(0,r)$. Since $\chi(x,y)=y$, its differential sends $(u,v)$ to $v$, so $M_{s_r}(1)=r$ and $\Delta_{\rm FP}(s_r)=|r|>0$. [given, F1, algebra]

2.1 Along the full orbit the gauge condition is $\chi((r,0)\cdot e^{i\theta})=r\sin\theta=0$, which holds exactly at $\theta=0$ and $\theta=\pi$ modulo $2\pi$. These parameters give the distinct points $(r,0)$ and $(-r,0)$, so the global line $y=0$ intersects the orbit twice even though the chosen local slice near $s_r$ is transverse. [step 1.1, algebra] ∎

## Remarks

The sketch rescales the radius to $1.1$ drawing units; it represents the orbit circle $x^2+y^2=r^2$ and the horizontal axis as the global gauge condition. The marked positive crossing is the local slice point; the opposite crossing is a second global representative. The proof uses the displayed action and derivative, not the drawing.

```tikz
\begin{tikzpicture}[scale=1.1]
  \draw[->] (-1.6,0) -- (1.7,0) node[right] {$x$};
  \draw[->] (0,-1.4) -- (0,1.5) node[above] {$y$};
  \draw[thick] (0,0) circle (1.1);
  \draw[dashed,thick] (0,0) -- (1.1,0);
  \fill (1.1,0) circle (2pt) node[below right] {$(r,0)$};
  \fill (-1.1,0) circle (2pt) node[below left] {$(-r,0)$};
  \draw[->] (0.82,0.72) arc[start angle=41.3,end angle=138.7,radius=1.1];
  \node at (0.35,0.35) {$K\cdot s_r$};
  \node at (0.68,-0.25) {local};
\end{tikzpicture}
```

