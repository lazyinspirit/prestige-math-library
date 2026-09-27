---
id: ex-two-point-ordered-configurations-of-the-plane
kind: example
title: "Two ordered points in the plane: centre and difference coordinates"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-ordered-configuration-space, def-product-topology,
       def-subspace-topology-top, def-complex-numbers-and-arithmetic,
       thm-complex-numbers-form-a-field,
       lem-complex-conjugation-and-modulus-laws,
       def-complex-conjugate-real-imaginary-part-and-modulus,
       def-complex-metric-convergence-and-continuity, def-metric-ball,
       def-metric-topology, def-continuous-map-top,
       thm-continuity-characterisations-top, thm-product-universal-property,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan González-Meneses, Basic results on braid groups, §§1.1–1.3 and 2.1, printed pp. 3–6, 11–13"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Example

Let $F_2(\mathbb C)=\{(z_1,z_2)\in\mathbb C^2:z_1\ne z_2\}$ be the ordered
configuration space of two points of the plane, carrying the subspace topology
of $\mathbb C^2$ ([[def-ordered-configuration-space]]), and write
$\mathbb C^\times:=\mathbb C\setminus\{0\}$ for the punctured plane with the
subspace topology of $\mathbb C$. Then

$$\Phi:F_2(\mathbb C)\longrightarrow\mathbb C\times\mathbb C^\times,\qquad \Phi(z_1,z_2):=\Big(\frac{z_1+z_2}{2},\,z_2-z_1\Big),$$

is a homeomorphism
([[def-homeomorphism-and-open-maps]]), with inverse

$$\Psi:\mathbb C\times\mathbb C^\times\longrightarrow F_2(\mathbb C),\qquad \Psi(c,w):=\Big(c-\frac w2,\,c+\frac w2\Big).$$

Consequently $F_2(\mathbb C)\cong\mathbb C\times\mathbb C^\times$. The first
coordinate of $\Phi$ is the midpoint, or centre, of the two points and the
second is their oriented difference; the difference coordinate vanishes exactly
when the two points collide, so $\mathbb C\times\mathbb C^\times$ is precisely
what the collision-free condition cuts out of $\mathbb C\times\mathbb C$.

## Facts & Assumptions

**Given:** The ordered configuration space $F_2(\mathbb C)$ of the plane with the subspace topology of $\mathbb C^2=\mathbb C\times\mathbb C$, the punctured plane $\mathbb C^\times=\mathbb C\setminus\{0\}$ with the subspace topology of $\mathbb C$, and the maps $\Phi$ and $\Psi$ of the statement.

[F1] $F_2(\mathbb C)=\{(z_1,z_2)\in\mathbb C^2:z_1\neq z_2\}$ is a subspace of the product $\mathbb C^2$, and a subset of $F_2(\mathbb C)$ is open exactly when it is the trace of an open subset of $\mathbb C^2$; a map $g:Z\to F_2(\mathbb C)$ from a space $Z$ is continuous if and only if its composite with the inclusion into $\mathbb C^2$ is continuous; restrictions of continuous maps to subspaces are continuous ([[def-ordered-configuration-space]], [[def-product-topology]], [[def-subspace-topology-top]]).

[F2] $\mathbb C$ is a field containing the embedded copy of $\mathbb R$, every complex number has a unique form $a+bi$ with $a,b\in\mathbb R$, addition and multiplication obey the coordinate formulas, and every nonzero complex number $a+bi$ has the inverse $(a-bi)/(a^2+b^2)$; the field laws therefore hold, $2:=1+1\neq0$ has the inverse $\frac12$, and from $z_2-z_1=0$ one gets $z_2=z_1$ ([[thm-complex-numbers-form-a-field]], [[def-complex-numbers-and-arithmetic]]).

[L3] The modulus satisfies $|z|\ge0$, $|z|=0\Leftrightarrow z=0$, $|zw|=|z|\,|w|$ and $|z+w|\le|z|+|w|$ for all $z,w\in\mathbb C$, so $|\alpha z_1+\beta z_2|\le|\alpha|\,|z_1|+|\beta|\,|z_2|$ for all scalars $\alpha,\beta$ ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[L4] The topology of $\mathbb C$ is the metric topology of $d_{\mathbb C}(z,w)=|z-w|$, the open balls $B(z,r)=\{w:d_{\mathbb C}(z,w)<r\}$ form a basis of it, and a subset of $\mathbb C$ is open exactly when every point of it has a ball around it inside the set ([[def-complex-metric-convergence-and-continuity]], [[def-metric-ball]], [[def-metric-topology]]). The boxes $U\times V$ with $U,V$ open are a basis of the product topology on $\mathbb C^2$, and for the finite index set $\{0,1\}$ the box topology and the product topology coincide ([[def-product-topology]]).

[L5] A map between spaces is continuous if and only if preimages of the members of some subbasis, and hence of some basis, of the target are open; a map into a product $\prod_i X_i$ is continuous exactly when all its components $\pi_i\circ h$ are continuous ([[thm-continuity-characterisations-top]], [[thm-product-universal-property]], [[def-continuous-map-top]]).



## Verification

**Proof technique:** direct.

1.1 *$\Phi$ is well defined.* Let $(z_1,z_2)\in F_2(\mathbb C)$, so $z_1\ne z_2$. If $z_2-z_1=0$ then adding $z_1$ gives $z_2=z_1$ by [F2], a contradiction; hence $z_2-z_1\ne0$ and $\Phi(z_1,z_2)\in\mathbb C\times\mathbb C^\times$. [F1, F2]

1.2 *$\Psi$ is well defined.* Let $(c,w)\in\mathbb C\times\mathbb C^\times$, so $w\ne0$. The two coordinates of $\Psi(c,w)$ differ by $\bigl(c+\frac w2\bigr)-\bigl(c-\frac w2\bigr)=w\ne0$, hence are distinct, and $\Psi(c,w)\in F_2(\mathbb C)$. [F1, F2]

1.3 *Linear combinations on the plane are continuous.* Let $\alpha,\beta\in\mathbb C$ and consider $L:\mathbb C^2\to\mathbb C$, $L(z_1,z_2):=\alpha z_1+\beta z_2$. Let $x=(x_1,x_2)\in\mathbb C^2$ and $\varepsilon>0$, and put $\delta:=\varepsilon/(1+|\alpha|+|\beta|)>0$, a positive real. If $|z_k-x_k|<\delta$ for $k=1,2$, that is, if $z$ lies in the basic open box $B(x_1,\delta)\times B(x_2,\delta)$ of [L4], then by [L3] $$|L(z)-L(x)|\le|\alpha|\,|z_1-x_1|+|\beta|\,|z_2-x_2|<(|\alpha|+|\beta|)\,\delta\le\varepsilon,$$ with strict inequality $|L(z)-L(x)|<\varepsilon$ in every case: if $|\alpha|+|\beta|=0$ then $L(z)-L(x)=0<\varepsilon$, and otherwise $(|\alpha|+|\beta|)\delta=\varepsilon\,(|\alpha|+|\beta|)/(1+|\alpha|+|\beta|)<\varepsilon$. Hence the preimage of the ball $B(L(x),\varepsilon)$ contains the box $B(x_1,\delta)\times B(x_2,\delta)$ around $x$, and since balls form a basis of the topology of $\mathbb C$ and boxes a basis of the topology of $\mathbb C^2$ [L4], $L$ is continuous by [L5]. [L3, L4, L5, algebra]

2.1 *$\Phi$ and $\Psi$ are mutually inverse, so $\Phi$ is a bijection.* Let $(z_1,z_2)\in F_2(\mathbb C)$ and put $c:=\frac{z_1+z_2}{2}$, $w:=z_2-z_1$. By the field laws of [F2] and $2\cdot\frac12=1$, $$c-\frac w2=\frac{z_1+z_2-(z_2-z_1)}{2}=\frac{2z_1}{2}=z_1,\qquad c+\frac w2=\frac{z_1+z_2+(z_2-z_1)}{2}=\frac{2z_2}{2}=z_2,$$ so $\Psi(\Phi(z_1,z_2))=(z_1,z_2)$. Conversely, for $(c,w)\in\mathbb C\times\mathbb C^\times$ the first coordinate of $\Phi(\Psi(c,w))$ is $\frac{(c-\frac w2)+(c+\frac w2)}{2}=c$ and the second is $\bigl(c+\frac w2\bigr)-\bigl(c-\frac w2\bigr)=w$, so $\Phi(\Psi(c,w))=(c,w)$. Thus $\Phi$ has the two-sided inverse $\Psi$ and is a bijection. [F2, step 1.1, step 1.2]

2.2 *$\Phi$ is continuous.* The two components of $\Phi$ are the restrictions to the subspace $F_2(\mathbb C)\subseteq\mathbb C^2$ of the continuous maps $L_{\frac12,\frac12}(z_1,z_2)=\frac{z_1+z_2}{2}$ and $L_{-1,1}(z_1,z_2)=z_2-z_1$ of step 1.3, hence are continuous by [F1]. The second of them takes all its values in the subspace $\mathbb C^\times\subseteq\mathbb C$ by step 1.1, so it is a continuous map $F_2(\mathbb C)\to\mathbb C^\times$ by the subspace criterion of [F1]; therefore $\Phi$, whose target is the product $\mathbb C\times\mathbb C^\times$, is continuous by the product criterion of [L5]. [F1, L5, step 1.1, step 1.3]

2.3 *$\Psi$ is continuous.* The target $F_2(\mathbb C)$ is a subspace of $\mathbb C^2$, so by the subspace criterion of [F1] it suffices to show that the composite $H:\mathbb C\times\mathbb C^\times\to\mathbb C^2$, $H(c,w)=\bigl(c-\frac w2,c+\frac w2\bigr)$, is continuous. By the product criterion of [L5] it suffices that the two components $L_{1,-\frac12}(c,w)=c-\frac w2$ and $L_{1,\frac12}(c,w)=c+\frac w2$ be continuous as maps into $\mathbb C$. The domain $\mathbb C\times\mathbb C^\times$ is a subspace of $\mathbb C^2$: by [L4] its basic open sets are the boxes $U\times(V\cap\mathbb C^\times)$ with $U,V$ open in $\mathbb C$, and these are exactly the traces $(U\times V)\cap(\mathbb C\times\mathbb C^\times)$ of the boxes $U\times V$ on $\mathbb C^2$, so the two topologies coincide. Hence continuity of the components follows from the continuity of $L_{1,\mp\frac12}$ on $\mathbb C^2$ in step 1.3 together with the restriction clause of [F1]. [F1, L4, L5, step 1.3]

3.1 *Conclusion.* By step 2.1 and step 1.2 the map $\Phi$ is a bijection $F_2(\mathbb C)\to\mathbb C\times\mathbb C^\times$ with inverse $\Psi$; by steps 2.2 and 2.3 both $\Phi$ and $\Psi$ are continuous. Hence $\Phi$ is a homeomorphism and $F_2(\mathbb C)\cong\mathbb C\times\mathbb C^\times$, as claimed. No choice principle was used. [step 2.1, step 2.2, step 2.3, F1] ∎
