---
id: ex-signed-two-direction-multiedge-quiver-flag-crossing
kind: example
title: "Signed two-direction multiedge quiver-flag crossing"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 30
deps: [def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators,
       thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations,
       def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "M. Varagnolo, E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992; complete 30-page article retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "R. Rouquier, Quiver Hecke algebras and 2-Lie algebras, arXiv:1112.3619; complete 48-page article retrieved and read at the cited sections."
      url: "https://arxiv.org/pdf/1112.3619"
---

## Example

Assume the Axiom of Choice as inherited. Take the loopless quiver with two vertices $i,j$ and
arrow multiplicities $h_{ij}=2$, $h_{ji}=1$, the dimension vector
$\beta=2\alpha_i+\alpha_j$ and the word $\nu=(i,j,i)$. Then $Q_{ij}(u,v)=(u-v)^3$, and the
dimension differences are $d_{s_1\nu}-d_\nu=h_{ij}-h_{ji}=1$ and
$d_{s_2\nu}-d_\nu=h_{ji}-h_{ij}=-1$. The two triple products of the native braid relation act
on the $\nu$-summand by
$$\tau_2\tau_1\tau_2e_\nu=(x_2-x_3)^2s_2\,D_1\,(x_2-x_3)s_2e_\nu,\qquad \tau_1\tau_2\tau_1e_\nu=(x_1-x_2)s_1\,D_2\,(x_1-x_2)^2s_1e_\nu,$$
where $D_1=(1-s_1)/(x_1-x_2)$ acts on the word $(i,i,j)$ and
$D_2=(1-s_2)/(x_2-x_3)$ acts on the word $(j,i,i)$, while the distinct-color crossings act by
$(x_1-x_2)^2s_1$ or $(x_2-x_3)s_2$ on $(i,j,i)$ and by $(x_2-x_3)^2s_2$ or $(x_1-x_2)s_1$ on the
intermediate words. Since $\nu_1=\nu_3=i$, their difference equals the native correction
$$\frac{Q_{ij}(x_1,x_2)-Q_{ij}(x_3,x_2)}{x_3-x_1}=-\bigl[(x_1-x_2)^2+(x_1-x_2)(x_3-x_2)+(x_3-x_2)^2\bigr],$$ a nonzero polynomial whenever
$h_{ij}+h_{ji}\ge1$. Both oriented crossing factors $(x_1-x_2)^2$ and $(x_2-x_3)$ occur, so the
multiedge multiplicities and both arrow directions enter the correction.

## Facts & Assumptions

**Given:** the Axiom of Choice; the two-vertex quiver with $h_{ij}=2$, $h_{ji}=1$; the
dimension vector $\beta=2\alpha_i+\alpha_j$; the word $\nu=(i,j,i)$; the incidence data,
generators and presentation of
[[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]].

[F1] Assume AC. [[def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators]]
fixes $d_\nu=\sum_i\beta_i(\beta_i-1)/2+\sum_{a>b}h_{\nu_a\nu_b}$, the normalized elementary
generators $\sigma_r,\tau_r$ with $\tau_re_\nu=(-1)^{h_{\nu_r\nu_{r+1}}}\sigma_re_\nu$ for
distinct colors, $a_{ij}=-h_{ij}-h_{ji}$, $Q_{ij}(u,v)=(-1)^{h_{ij}}(u-v)^{h_{ij}+h_{ji}}$ and
the braid correction $\bigl[Q_{\nu_r\nu_{r+1}}(x_r,x_{r+1})-Q_{\nu_r\nu_{r+1}}(x_{r+2},x_{r+1})\bigr]/(x_{r+2}-x_r)$
when $\nu_r=\nu_{r+2}$.

[F2] Assume AC. [[thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations]]
supplies the action formulas: $\tau_r(f)=(x_r-x_{r+1})^{h_{ij}}s_r(f)$ for distinct colors
$i=\nu_r\ne j=\nu_{r+1}$ and $\tau_r(f)=(f-s_rf)/(x_r-x_{r+1})$ for equal colors, with $s_r$
swapping both the two variables and the two letters.

[A1] The Axiom of Choice is present only because the consumed definition and relation suppliers
inherit it; the displayed polynomial expansion is finite and choice-free
([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 Dimensions and normalizations. With $h_{ij}=2$, $h_{ji}=1$ the defining polynomial is $Q_{ij}(u,v)=(-1)^2(u-v)^3=(u-v)^3$, and the dimension formula gives $d_{(i,j,i)}=1+(h_{ji}+h_{ij})=4$, $d_{(j,i,i)}=1+2h_{ij}=5$ and $d_{(i,i,j)}=1+2h_{ji}=3$; hence $d_{s_1\nu}-d_\nu=1$ and $d_{s_2\nu}-d_\nu=-1$. The unequal crossing normalization exponent $d_{s_r\nu}-\dim_{\mathbb C}C_{s_r\nu,\nu}=h_{\nu_r\nu_{r+1}}$ is instead $2$ for $r=1$ and $1$ for $r=2$; it must not be identified with the dimension difference $d_{s_r\nu}-d_\nu$. [F1, given]

2.1 The crossing operators. The action formulas of [F2] give, on the relevant words, $\tau_1e_{(i,j,i)}=(x_1-x_2)^2s_1$, $\tau_2e_{(i,j,i)}=(x_2-x_3)s_2$, $\tau_2e_{(i,i,j)}=(x_2-x_3)^2s_2$, $\tau_1e_{(j,i,i)}=(x_1-x_2)s_1$, together with the equal-color divided differences $D_1$ on $(i,i,j)$ and $D_2$ on $(j,i,i)$; this exhibits the two triple products as the displayed composite operators on $k[x_1,x_2,x_3]$. [F2, step 1.1]

3.1 The correction. Expanding the two operators of step 2.1 and subtracting gives, using $(x_1-x_2)^3-(x_3-x_2)^3=(x_1-x_3)\bigl[(x_1-x_2)^2+(x_1-x_2)(x_3-x_2)+(x_3-x_2)^2\bigr]$, the difference $\bigl[Q_{ij}(x_1,x_2)-Q_{ij}(x_3,x_2)\bigr]/(x_3-x_1) = -\bigl[(x_1-x_2)^2+(x_1-x_2)(x_3-x_2)+(x_3-x_2)^2\bigr]$, which is a nonzero polynomial of degree $h_{ij}+h_{ji}-1=2$ because its leading coefficient on $(x_1-x_2)^2$ is $-1$. This verifies the signed braid relation in the smallest two-direction multiedge case and shows that the correction does not vanish; the identity was independently recomputed here with exact rational-polynomial arithmetic on the operators, and both oriented crossing factors $(x_1-x_2)^2$ and $(x_2-x_3)$ enter. [A1, F1, F2, step 2.1] ∎
