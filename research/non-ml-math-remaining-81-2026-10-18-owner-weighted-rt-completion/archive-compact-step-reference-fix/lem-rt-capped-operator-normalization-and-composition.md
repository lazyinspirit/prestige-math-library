---
id: lem-rt-capped-operator-normalization-and-composition
kind: lemma
title: "RT capped operators: geometric Gram factors and exact signature gluing"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-rt-state-spaces, lem-colored-fr-surgery-and-coupon-cancellation, def-rigid-object-and-rigid-monoidal-category, def-fusion-and-multifusion-category, thm-basic-properties-of-the-categorical-trace, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Turaev, Quantum Invariants of Knots and 3-Manifolds, IV §§1.4, 1.7–1.8 and 2.1–2.9"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
    - title: "Bakalov–Kirillov, Lectures on Tensor Categories and Modular Functor, §4.4"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

Use the category, $D,d_i,\kappa$ and dualities of [[lem-colored-fr-surgery-and-coupon-cancellation]]. For a connected standard genus-$g$ marked surface $t$, put

$$X_{t,i}=W_1^{\epsilon_1}\otimes\cdots\otimes W_n^{\epsilon_n}\otimes\bigotimes_{r=1}^g(i_r\otimes i_r^*),\qquad V_t=\bigoplus_{i\in I^g}\operatorname{Hom}(\mathbf1,X_{t,i}),\qquad d(i)=\prod_r d_{i_r}.$$

For disjoint surfaces take tensor products and set $V_\varnothing=\mathbb C$. Opposite raw coupon coordinates are $\bigoplus_i\operatorname{Hom}(X_{t,i},\mathbf1)$, with composition pairing. With the standard spine handlebody caps and their reflected opposite caps, the normalized capped-cylinder Gram pairing is

$$Q_t(y_j,x_i)=\delta_{ij}D^{g-1}d(i)^{-1}y_ix_i.$$

Its inverse correction is $N_t|_i=D^{1-g}d(i)1$, extended multiplicatively across surface components. For a fixed special surgery graph $\Omega$ representing a connected parametrized graph bordism $M$, let $m$ and $B$ be its surgery-component count and linking matrix. Define $A_M$ by the raw testing-coupon functional $y(A_Mx)=D^{-m-1}\kappa^{-\sigma(B)}F(\Omega;y,x)$, with finite surgery-color sum understood, and set $Z_\alpha(M)=N_{\Sigma_{\rm out}}A_M$. Then

$$Z_\alpha(M)^j_i=\kappa^{-\sigma(B)}D^{-m-1+\chi(\Sigma_{\rm out})/2}d(j)F_0(\Omega;i,j).$$

Here $\alpha$ denotes the actual reference cap meridians and $F_0$ includes the exact tensor-Hom projections defined below. These fixed-presentation operators satisfy the cylinder, ball, empty and disjoint-union laws. For stacked presentations of composable bordisms,

$$Z_\alpha(M_2M_1)=\kappa^{\sigma(B_1)+\sigma(B_2)-\sigma(B_{\rm comp})}Z_\alpha(M_2)Z_\alpha(M_1).$$

The signatures here are the actual matrices, including the indicated added annuli. No Maslov identification is assumed in this lemma. For disconnected $M$, use the product over its connected components, equivalently the exponent $-m-b_0(M)+\chi(\Sigma_{\rm out})/2$. Independence under a complete relative presentation calculus is a separate theorem; this result proves the exact normalization and algebra of its local cap/stacking models. No unweighted anomaly-free functor is asserted.

## Facts & Assumptions

**Given:** The category, standard spine handlebody caps, finite colored coupon surgery presentations, and fixed boundary parametrizations described in the Statement.

[F1] The full local identity is $R_{ij}(E_{i^*\otimes j})=\delta_{ij}(D^2/d_i)1_{i\otimes i^*}$; $E_X=D^2P_X$ and the finite trace/composition-dual coupon resolutions are proved in [[lem-colored-fr-surgery-and-coupon-cancellation]].

[F2] Finite semisimplicity and the duality snakes give perfect composition pairing between $\operatorname{Hom}(\mathbf1,X)$ and $\operatorname{Hom}(X,\mathbf1)$ ([[def-fusion-and-multifusion-category]], [[def-rigid-object-and-rigid-monoidal-category]]).

[F3] The state spaces are the finite Hom spaces of [[def-rt-state-spaces]]. All linking matrices are allowed to be singular; signatures ignore zero eigenvalues.

[A1] Countable choice is carried from the tangle-evaluation supplier through [[lem-colored-fr-surgery-and-coupon-cancellation]]. All state-space bases and sums below are finite.

## Proof

**Given:** The data in the Statement.

1.1 Represent a standard cap by a ball containing one coupon and its marked strands, with one attached solid cylinder for each handle; the two bases of its handle arc are adjacent on the coupon. Reverse the coupon for the opposite raw cap. For a cylinder take two such disjoint standard handlebody neighborhoods in $S^3$ and, for each handle, a zero-framed surgery annulus surrounding its two opposed handle arcs. Choose mutually disjoint products $D_r\times[-1,1]$; inside each, the two handle arcs occupy small cylinders $B_r^-\times[-1,1]$, $B_r^+\times[-1,1]$ in an interior disk $D'_r\subset D_r$. Its surgery annulus is $D_r\setminus\operatorname{Int}D'_r$. Zero-framed surgery replaces its thickening by $D^2\times S^1$, attaching so that each $\partial D'_r\times\{t\}$ bounds a disk. That disk joined to the pair-of-pants $D'_r\setminus\operatorname{Int}(B_r^-\cup B_r^+)$ is an annulus between the two handle boundaries. As $t$ varies these are an annulus product, and the complementary portion of the filling solid torus leaves the ordinary cylinder between the punctured sphere boundaries. The product structures use the same $t$ coordinate on their collars, so they glue to $\Sigma_t\times I$ with its original parametrizations. This is a local coordinate proof of this particular cylinder presentation, not a completeness assertion. Its $g$ surgery annuli are zero-framed and mutually unlinked, so $m=g$, $\sigma(B)=0$. [F3, given, construct]

2.1 Reading the oriented two opposed arcs in each disk product gives exactly $R_{ij}(E_{i^*\otimes j})$ of [F1]: the two bends are its specified $b_j,r_i$, and the surrounding annulus is its specified partial-trace meridian. Thus the complete graph word vanishes unless both handle tuples agree, and on $i=j$ it is $D^{2g}/d(i)$ times the identity of $X_{t,i}$. Arbitrary testing coupons give $F_{\rm cyl}(y_j,x_i)=\delta_{ij}D^{2g}d(i)^{-1}y_ix_i$. Multiplying by the actual closed normalization $D^{-g-1}$ gives precisely $Q_t$. Its matrix in composition-dual bases is diagonal, with nonzero entries $D^{g-1}/d(i)$, so its inverse is the stated $N_t$. In particular its geometrically dual testing coupon to a raw basis vector $x_{i,a}$ is $D^{1-g}d(i)y^{i,a}$. This is a computation of the geometric Gram form, rather than confusing $\operatorname{tr}(1_{i\otimes i^*})=d_i^2$ with the cup/cap composition $r_ib_i=d_i$. [F1, F2, step 1.1, algebra]

3.1 The raw pairing is perfect because a finite simple decomposition of $X$ has a unit-isotypic basis $x_a:\mathbf1\to X$, $y_a:X\to\mathbf1$ with $y_ax_b=\delta_{ab}$, and all nonunit summands contribute zero. Thus every capped multilinear functional defines a unique map $A_M$. Multiplying its outgoing block $j$ by $N_{\Sigma_{\rm out}}=D^{\sum_q(1-g_q)}d(j)=D^{\chi(\Sigma_{\rm out})/2}d(j)$ gives the exact block formula in the Statement. Empty output has correction1. For disconnected bordisms the caps and all normalizations multiply, yielding the exponent $-m-b_0(M)+\chi_{\rm out}/2$. The distinction between raw and geometrically dual cap coordinates is essential: one either inserts $N$ explicitly or absorbs it into the opposite cap basis. [F2, F3, step 2.1, algebra]

4.1 In the cylinder formula the coefficient is $D^{-g-1+(1-g)}d(i)=D^{-2g}d(i)$, and the graph word is $D^{2g}/d(i)$ by step1.2. Hence $Z_\alpha(\mathrm{cyl})=1$ on every color/multiplicity block. The outgoing empty-graph ball has $m=\sigma=0$ and $\chi_{\rm out}/2=1$, so its vector is1. The incoming ball has empty output and is multiplication by $D^{-1}$. Gluing them gives $D^{-1}=\tau(S^3)$, and the sphere cylinder has raw functional $D^{-1}yx$ corrected by $N_{S^2}=D$. Inserting an arbitrary handlebody coupon $x$ below the cylinder graph gives the decorated handlebody; the same local cancellation sends it to $x$. Thus every vector of the stated Hom space is realized. Tensoring gives the disconnected cylinder law. The empty bordism gives1, and disjoint union tensors the states, caps, $N$ factors and closed graph evaluations, proving its law. [F1, F2, step 1.1, step 2.1, step 3.1, algebra]

4.2 For $r$ connected boundary tensor objects $X_q$ choose unit-channel composition-dual bases $x_{q,a},y_q^a$. Define $\iota(\bigotimes_qx_q)=\bigotimes_qx_q$ from $\bigotimes_q\operatorname{Hom}(\mathbf1,X_q)$ to $\operatorname{Hom}(\mathbf1,\bigotimes_qX_q)$, and define $\pi(z)=\sum_{a_1,\ldots,a_r}(\bigotimes_qx_{q,a_q})[(\bigotimes_qy_q^{a_q})z]$. Kronecker contraction gives $\pi\iota=1$, while $\iota\pi(z)=(P_{X_1}\otimes\cdots\otimes P_{X_r})z=D^{-2r}(E_{X_1}\otimes\cdots\otimes E_{X_r})z$. These maps are independent of the chosen unit bases because their object-level projectors are. For a special graph with disconnected input/output set $F_0=\pi_{\rm out}\operatorname{Hom}(\mathbf1,F)\iota_{\rm in}$ before the finite surgery-color sum. This retains precisely the required tensor-product channels; the larger Hom of the object tensor product is not silently identified with that tensor product of Hom spaces. [F1, F2, step 3.1, algebra]

5.1 First suppose $M_1,M_2$ are connected and the common surface is connected of genus $G$. Stack their special graphs across a separating sphere. Each pair of matching open handle arcs joins to a surgery annulus, adding exactly $G$ components. A neighborhood of the separating sphere and the joined arcs is a sphere product with $2G$ one-handles; the disk/annulus surgery model of step1.1 turns it into the product of the common genus-$G$ surface with an interval. Its complementary two pieces are the original bordisms with their cap parametrizations unchanged. Thus the stacked graph presents their glued bordism. If the middle color tuple is $j$, its new annulus weight is $d(j)$; categorical composition and the complete unit-channel resolutions therefore give $F_0(\Omega)^l_i=\sum_j d(j)F_0(\Omega_2)^l_jF_0(\Omega_1)^j_i$. This identity includes the sum over a full basis of every multiplicity Hom space, namely $\sum_ax_{j,a}y^{j,a}=P_{X_j}$ acting as the identity on its Hom from the unit. [F1, F2, step 1.1, step 4.2, construct]

6.1 Write $m_1,m_2$ for the old component counts and $\sigma_1,\sigma_2,\sigma$ for the actual old/stacked matrix signatures. Here $m=m_1+m_2+G$. The product of the two block coefficients of step1.3 has $D$ exponent $-m_2-1+\chi_{\rm out}/2-m_1-1+(1-G)=-m_1-m_2-G-1+\chi_{\rm out}/2$, exactly that of the composite. Its remaining factors are exactly $d(l)d(j)$ as in step3.1. The sole discrepancy is therefore $\kappa^{\sigma_1+\sigma_2-\sigma}$, proving the stated formula without assuming a Maslov theorem. [step 3.1, step 5.1, algebra]

6.2 If the middle surface has $r\ge1$ components and total genus $G$, add $r-1$ zero-framed family-meridians at the separating sphere, each surrounding all arcs in one specified middle family. After the $G$ handle-annulus surgeries, the separating cylinder is the connected genus-$G$ surface product. Each family-meridian surgery compresses along its separating circle: remove $S^1\times I\times I$ and attach the two products $D^2\times I$ using the original collars. The $r-1$ disjoint compressions split it into exactly the $r$ prescribed middle surface products, so that graph presents the actual composite. If instead all $r$ family-meridians are added, the last one bounds a disk in one of those products and its surgery adds a separated $S^1\times S^2$ connected-sum factor. This proves the local graph-stacking model, including the previously missing disconnected families; it does not assert that all surgery diagrams of a bordism can be connected by these models. [step 1.1, step 5.1, construct]

7.1 Use the all-$r$ graph, with $m^+=m_1+m_2+G+r$. Step2.2 says its meridian sum inserts $D^{2r}$ times exactly the necessary $\iota\pi$ between the two exterior maps. Thus $F_0(\Omega^+)^l_i=D^{2r}\sum_jd(j)F_0(\Omega_2)^l_jF_0(\Omega_1)^j_i$. The closed connected-sum rule is $\tau(N\#P)=D\tau(N)\tau(P)$: place the two surgery links in disjoint balls; their component counts and signatures add, while the product normalization has one additional $D^{-1}$. The same argument holds for external cap graphs away from the sum balls. Since $\tau(S^1\times S^2)=1$, the extra factor is $D$ and must be divided out. The resulting $D$ exponent is $-m_1-m_2-G-r-2+\chi_{\rm out}/2+2r=-m_1-m_2-G+r-2+\chi_{\rm out}/2$. The product coefficients give exactly the same exponent because $\chi_{\rm middle}/2=r-G$. Every $d(j),d(l)$ also matches. The redundant final zero-framed trace component has signature0, so the actual signatures yield the same discrepancy $\kappa^{\sigma_1+\sigma_2-\sigma}$. [F1, step 3.1, step 4.2, step 6.1, step 6.2, algebra]

8.1 For disconnected $M_1,M_2$, decompose their bipartite component incidence graph, with edges the middle surface components. Isolated vertices simply tensor with the rest. In a connected incidence component with $a$ lower and $b$ upper vertices, connect-sum the lower pieces along $a-1$ pairs of interior balls and the upper pieces along $b-1$ pairs, avoiding all ribbon graphs. Their maps are multiplied by $D^{a-1}$ and $D^{b-1}$. In the already connected glued composite each such neck joins two balls in the same component, producing a connected sum with $S^1\times S^2$, and so multiplies its map by the same total $D^{a+b-2}$. The elementary neck is obtained by removing the two balls and joining their sphere boundaries by $S^2\times I$; it is the ordinary connected sum for balls in different components and the punctured $S^1\times S^2$ operation for balls in the same component. These added trace blocks have signature0. Apply the connected proof of steps3.2 and4.2 and cancel the common nonzero $D$ power, proving the general composition formula componentwise. Together with step2.1 this completes the cylinder, ball, tensor and empty laws and all normalized gluing scalars. A complete relative presentation theorem and the separate signature-to-Maslov comparison are still required before these fixed-presentation calculations are asserted as the full RT functor. [F3, A1, step 4.1, step 6.1, step 7.1, algebra] ∎
