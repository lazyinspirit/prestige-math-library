---
id: lem-colored-fr-surgery-and-coupon-cancellation
kind: lemma
title: "Colored signed twist surgery, circumcision, and paired-handle cancellation"
status: published
dependency_level: 5
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [lem-multicolored-ribbon-coupon-evaluation, lem-modular-gauss-sums-and-kirby-color, def-modular-ribbon-category-and-hopf-link-data, lem-simple-ribbon-fusion-dimensions-are-nonzero, lem-balancing-and-hopf-link-character-identity, lem-modular-hopf-matrix-squared, def-rigid-object-and-rigid-monoidal-category, thm-basic-properties-of-the-categorical-trace, thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Turaev, Quantum Invariants of Knots and 3-Manifolds, I §3.5, II §3.3, IV §§2.2 and 2.7"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
    - title: "Bakalov–Kirillov, Lectures on Tensor Categories and Modular Functor, Lemma 3.1.5"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

Let $\mathcal C$ be a complex modular spherical ribbon fusion category. Put $D^2=\sum_i d_i^2$, choose $D\ne0$, let $p_\pm=\sum_i\theta_i^{\pm1}d_i^2$, $\kappa=p_+/D$, and $\Omega=\sum_i d_i i$. Write $b_X:\mathbf1\to X\otimes X^*$ and $e_X:X^*\otimes X\to\mathbf1$ for left duality, $r_X=e_{X^*}(j_X\otimes1)$ for right evaluation, and $b_X^R=(1\otimes j_X^{-1})b_{X^*}$ for right coevaluation. For $a:X\otimes Z\to Y\otimes Z$ define

$$\operatorname{ptr}_Z(a)=(1_Y\otimes r_Z)(a\otimes1_{Z^*})(1_X\otimes b_Z),\qquad M_{X,Z}=c_{Z,X}c_{X,Z}.$$

Then $p_+p_-=D^2$, and the following are identities of complete morphisms, valid with arbitrary exterior tensor factors and coupons:

$$K_\pm(X):=\sum_i d_i\theta_i^{\pm1}\operatorname{ptr}_i(M_{X,i}^{\pm1})=p_\pm\theta_X^{\mp1}.$$

The zero-framed meridian operator $E_X=\sum_i d_i\operatorname{ptr}_i(M_{X,i})$ equals $D^2P_X$, where $P_X$ is the projection onto the full unit-isotypic summand. For $a\in\operatorname{End}(i^*\otimes j)$ define

$$R_{ij}(a)=(r_i\otimes1_j\otimes1_{j^*})(1_i\otimes a\otimes1_{j^*})(1_i\otimes1_{i^*}\otimes b_j).$$

The paired-handle/coupon contraction is

$$R_{ij}(E_{i^*\otimes j})=\delta_{ij}\frac{D^2}{d_i}1_{i\otimes i^*}.$$

Thus the normalized graph evaluation $D^{-m-1}\kappa^{-\sigma(B)}F$ is unchanged under a signed generalized Fenn–Rourke twist-surgery move or circumcision adding a framed knot and its small zero-framed meridian. These are local algebraic identities; a complete presentation/move theorem is a separate topological assertion. No positivity, unitary conjugation, or anomaly cancellation is assumed.

## Facts & Assumptions

**Given:** The category and duality conventions in the Statement; the finite colored coupon composites appearing below.

[F1] All $d_i$ and $D$ are nonzero, $d_{i^*}=d_i$, $s^2=D^2C$, and $\operatorname{ptr}_i(M_{j,i})=(s_{ji}/d_j)1_j$ for simple $j$ ([[lem-simple-ribbon-fusion-dimensions-are-nonzero]], [[lem-modular-hopf-matrix-squared]], [[lem-balancing-and-hopf-link-character-identity]]).

[F2] Balancing, naturality, the hexagons, spherical cyclic trace and both duality snakes are the stated ribbon-category axioms and trace identities ([[def-modular-ribbon-category-and-hopf-link-data]], [[def-rigid-object-and-rigid-monoidal-category]], [[thm-basic-properties-of-the-categorical-trace]]).

[F3] The full multicolored coupon evaluator assigns the elementary composites and is invariant under colored graph isotopy ([[lem-multicolored-ribbon-coupon-evaluation]]). The complete Gauss/Kirby data are supplied by [[lem-modular-gauss-sums-and-kirby-color]]; the local composite/signature calculations below are also explicit.

[A1] Countable choice is carried through the framed-tangle evaluation supplier ([[def-countable-choice]]); all decompositions and bases used here are finite.

## Proof

**Given:** The data in the Statement.

1.1 Choose actual finite simple inclusions $u_{k,a}:k\to X$ and projections $v^{k,a}:X\to k$ from a direct sum, with $v^{k,a}u_{l,b}=\delta_{kl}\delta_{ab}1_k$ and $\sum_{k,a}u_{k,a}v^{k,a}=1_X$. Inserting these two identities on either side of any coupon $f:X\to Y$ gives its complete expansion $f=\sum_{k,a,b}u^Y_{k,b}(v_Y^{k,b}fu^X_{k,a})v_X^{k,a}$. Off-diagonal simple terms vanish by Schur's lemma; every remaining middle term is a scalar. Thus this expansion is independent of basis and respects composition/tensor products. Since $\operatorname{tr}_k(v^{k,a}u_{k,b})=d_k\delta_{ab}$, trace-dual projections are $v^{k,a}/d_k$, and the trace-dual resolution is $1_X=\sum_{k,a}d_k u_{k,a}(v^{k,a}/d_k)$. Reversing an edge applies the dual functor and reverses the composite, preserving the identity. [F1, F2, given, algebra]

1.2 Trace multiplicativity and Frobenius reciprocity give $d_id_j=\sum_kN_{ij}^kd_k$ and $\sum_i d_iN_{ij}^k=d_kd_j$. Summing the balancing expression $s_{ij}=(\theta_i\theta_j)^{-1}\sum_kN_{ij}^k\theta_kd_k$ therefore gives $\sum_i\theta_i d_i s_{ij}=p_+\theta_j^{-1}d_j$. Multiply by $s_{j^*,k}$ and sum over $j$. The identity $\sum_js_{ij}s_{j^*,k}=D^2\delta_{ik}$ gives $p_+\sum_j\theta_j^{-1}d_js_{j^*,k}=D^2\theta_kd_k$. At $k=0$, reindexing $j$ by $j^*$ yields $p_+p_-=D^2$. Consequently $p_\pm\ne0$ and $\kappa^{-1}=p_-/D$. [F1, F2, given, algebra]

2.1 For the unit label, put $x_a=u_{0,a}$, $y_a=v^{0,a}$. Then $y_ax_b=\delta_{ab}$ and $P_X=\sum_a x_ay_a$ is the unit-isotypic projector. It is the identity on $\operatorname{Hom}(\mathbf1,X)$ and on the opposite dual pairing, because all nonunit components of a map from or to the simple unit vanish. The bending map $f:k\to X\mapsto(f\otimes1)b_k$ has inverse $z\mapsto(1_X\otimes e_k)(z\otimes1_k)$ by the two snakes. Closing a bent pair $f,g$ gives $\operatorname{tr}_k(gf)$, so the same $d_k$ factors of step 1.1 apply after bending. [F1, F2, step 1.1, algebra]

2.2 The displayed partial trace satisfies $\operatorname{ptr}_Z((f\otimes1)a(g\otimes1))=f\operatorname{ptr}_Z(a)g$ by interchange. Naturality of both braidings consequently makes each $K_+(X)$ natural in $X$. On simple $j$, step 1.2 gives $K_+(j)=p_+\theta_j^{-1}1_j$. Inserting the full direct-sum resolution gives $K_+(X)=\sum_{j,a}u_{j,a}K_+(j)v^{j,a}=p_+\theta_X^{-1}$ for every object. For the negative version, balancing gives $M_{j,i}^{-1}=(\theta_j\otimes\theta_i)\theta_{j\otimes i}^{-1}$, hence $\operatorname{tr}_jK_-(j)=\sum_{i,k}d_i\theta_i^{-1}\theta_j\theta_iN_{ji}^k\theta_k^{-1}d_k=\theta_jd_jp_-$. Divide by $d_j$ and use the same naturality/resolution to obtain $K_-(X)=p_-\theta_X$. [F1, F2, step 1.1, step 1.2, algebra]

3.1 For arbitrary coupons $a:A\to X$ and $b:X\to B$, step 2.2 says $b\theta_X^{\pm1}K_\pm(X)a=p_\pm ba$. Take $X$ to be the tensor product of every oriented strand through the local surgery annulus, using duals for reversed strands. Repeated hexagons expand $M_{X,i}$ into the full encircling strand word; repeated balancing expands $\theta_X$ into all individual twists and pairwise crossings in its full bunch twist. This explicitly identifies the complete signed twist-surgery composite even if exterior coupons join different members of the bunch. If its eliminated framing is $\epsilon=\pm1$ and linking vector is $\ell$, its matrix $B=\left[\begin{smallmatrix}\epsilon&\ell^t\\\ell&A\end{smallmatrix}\right]$ is congruent to $[\epsilon]\oplus(A-\epsilon\ell\ell^t)$ by replacing each remaining vector $z$ with $z-\epsilon\ell_z u$. Thus $m$ decreases by1 and signature by$\epsilon$. Its graph scalar is $p_\epsilon$, and $D^{-1}\kappa^{-\epsilon}p_\epsilon=1$, proving the normalized signed-move equality with its exact framing/signature factors. [F2, F3, A1, step 1.2, step 2.2, algebra]

3.2 The same naturality makes $E_X$ natural. On simple $j$ its scalar is $d_j^{-1}\sum_i d_i s_{ji}=D^2\delta_{j0}$ by $s^2=D^2C$. Inserting step 1.1 proves $E_X=D^2P_X$ on every object, not just a simple strand. Thus $D^{-2}yE_Xx=yx$ for any $x:\mathbf1\to X$, $y:X\to\mathbf1$, with arbitrary coupon networks defining $x,y$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Rigidity gives $\operatorname{Hom}(\mathbf1,i^*\otimes j)\cong\operatorname{Hom}(i,j)$, zero unless $i=j$. When $i=j$ its generator is $b_i^R$, and $e_ib_i^R=d_i$ by sphericality. Hence $P_{i^*\otimes j}=\delta_{ij}b_i^Re_i/d_i$. Insert this into $R_{ij}(E_{i^*\otimes j})$. The right snake $(r_i\otimes1_i)(1_i\otimes b_i^R)=1_i$ retracts its first pair, and the left snake $(e_i\otimes1_{i^*})(1_{i^*}\otimes b_i)=1_{i^*}$ retracts the remaining pair. The resulting full morphism is $\delta_{ij}(D^2/d_i)1_{i\otimes i^*}$. Tensoring $g$ such disjoint pieces gives zero unless the entire color tuples agree and gives $D^{2g}/\prod_r d_{i_r}$ times the identity otherwise, with every multiplicity-space coupon retained. [F1, F2, step 3.2, algebra]

5.1 For circumcision introduce a framed knot $K$ and a small zero-framed meridian $U$ meeting only $K$. In the finite $\Omega$ sum, $U$ acts on the simple $K$-color $j$ by $D^2\delta_{j0}$. The surviving coefficient is $d_0=1$, and the unit-colored knot, with all its framing and crossings, evaluates as the empty graph. Thus the full arbitrary-coupon exterior evaluation is multiplied by exactly $D^2$. If $K$ has framing $f$ and links the old surgery link by $\ell$, the new matrix is $B'=\left[\begin{smallmatrix}A&\ell&0\\\ell^t&f&1\\0&1&0\end{smallmatrix}\right]$. Subtracting $\ell_z$ times the new meridian vector from each old vector gives $B'\cong A\oplus\left[\begin{smallmatrix}f&1\\1&0\end{smallmatrix}\right]$. The last block has determinant$-1$ and signature0. Two new components contribute $D^{-2}$ and cancel $D^2$, with no signature or weight change. This proves the complete stated local identities, while leaving the genuine relative move-completeness theorem separate. [F2, F3, A1, step 3.1, step 3.2, step 4.1, algebra] ∎
