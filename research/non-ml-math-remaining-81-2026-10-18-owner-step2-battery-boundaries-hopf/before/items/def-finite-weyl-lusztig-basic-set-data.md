---
id: def-finite-weyl-lusztig-basic-set-data
kind: definition
title: "Finite-Weyl Lusztig data and the precise basic-set hypotheses"
status: draft
dependency_level: 5
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-unequal-parameter-coxeter-hecke-algebra
  - thm-unequal-parameter-kazhdan-lusztig-basis
  - def-canonical-basic-set-for-hecke-specialization
  - def-schur-elements-from-a-symmetrizing-trace
  - thm-hh-canonical-hecke-trace-is-symmetric-and-perfect
provenance:
  statement: literature-derived
  proof: not-applicable
verification: {}
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, sections 4–6"
      url: "https://arxiv.org/pdf/math/0511548"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised text, sections 18–21"
      url: "https://arxiv.org/pdf/math/0208154"
---

## Definition

Work in the **split generic finite-Weyl setting**: $W$ is a finite Weyl group, $L:W\to\mathbb Z_{\ge0}$ is a weight function, $A=\mathbb Z[v,v^{-1}]$, and $H=H_A(W,L)$ has the symmetric normalization $(T_s-v^{L(s)})(T_s+v^{-L(s)})=0$. Its KL basis is $C_w$. Write $K=\mathbb Q(v)$ and assume the generic algebra $H_K$ is split semisimple, as in the generic setup of [[def-canonical-basic-set-for-hecke-specialization]]. This hypothesis supplies the generic labels; this item asserts no new theorem on generic rational splitting. Let $\tau(T_w)=\delta_{w,1}$ be the canonical symmetrizing trace.

The $A$-linear algebra involution $\dagger$ is $T_s\mapsto-T_s^{-1}$, and put $D_w=C_w^\dagger$. Define structure constants by $C_xC_y=\sum_z h_{x,y,z}C_z$; equivalently $D_xD_y=\sum_z h_{x,y,z}D_z$. Define

$$a(z)=\min\{n\ge0:v^n h_{x,y,z}\in\mathbb Z[v]\text{ for all }x,y\in W\},\qquad \gamma_{x,y,z}=[v^0](v^{a(z)}h_{x,y,z^{-1}}).$$

The integer $a(z)$ exists since $W$ is finite and all $h$ are Laurent polynomials invariant under bar. Let $\Delta(z)$ be the negative of the largest exponent in $\tau(C_z)$, and $n_z$ its nonzero coefficient. If $\tau(C_z)=0$, put $\Delta(z)=\infty$ and $n_z=0$. Let $\mathcal D=\{z:a(z)=\Delta(z)\}$. In particular $\Delta(1)=0$ and $n_1=1$; P3 below forces $a(1)=0$.

The following are **explicit hypotheses**, not assertions for every unequal weight. They are precisely the subset used in Geck section 5.2:

- P2: if $d\in\mathcal D$ and $\gamma_{x,y,d}\ne0$, then $x=y^{-1}$.
- P3: for every $y$ there is a unique $d\in\mathcal D$ with $\gamma_{y^{-1},y,d}\ne0$.
- P4: $h_{x,y,z}\ne0$ implies $a(z)\ge a(x)$ and $a(z)\ge a(y)$.
- P5: in P3, $\gamma_{y^{-1},y,d}=n_d=\pm1$.
- P6: every $d\in\mathcal D$ satisfies $d^2=1$.
- P7: $\gamma_{x,y,z}=\gamma_{y,z,x}$.
- P8: $\gamma_{x,y,z}\ne0$ implies $a(x)=a(y)=a(z)$.
- P15′: if $a(w)=a(y)$, then

$$\sum_u h_{x,u,y}\gamma_{w,x',u^{-1}}=\sum_u h_{x,w,u}\gamma_{u,x',y^{-1}}.$$

All sums are finite. These hypotheses produce the asymptotic algebra and modular theorem in the following proved suppliers; they do not assume positivity or irreducibility of cell modules. The generic Schur element $c_E(v)$ is determined by $\tau_K=\sum_Ec_E(v)^{-1}\operatorname{tr}_E$. Its lowest term will be proved to be $f_Ev^{-2\alpha_E}$ with $f_E$ a positive integer. A specialization $\theta:A\to k$ has $u=\theta(v)\in k^\times$, multiplicative parameter $\xi=u^2$, and is **L-good** when $\theta(f_E)\ne0$ for every generic label $E$. Characteristic zero is always L-good. The modular theorem does not require $\theta(c_E(v))\ne0$.

To compare normalizations, Geck's multiplicative generator is $S_s=v^{L(s)}T_s$ and obeys $(S_s-v^{2L(s)})(S_s+1)=0$; after specialization its parameter is $\xi^{L(s)}$. The asymptotic formulas below use Lusztig's revised convention $D_w\leftrightarrow t_w$ and coefficients $n_d$ in $\phi$, with no diagonal sign change. Geck's signed starred convention is not mixed into these formulas.
