---
id: thm-spin8-tensor-product-decompositions
kind: theorem
title: Spin(8) tensor-product decompositions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
page: st-spin8-representation-mathematics
dependency_level: 3
domain: mathematics
library: physics
deps:
  - def-spin8-vector-and-half-spin-modules
  - lem-spin8-modules-well-defined
  - lem-spin8-four-form-chirality-weights
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - thm-weyl-dimension-formula
  - def-fundamental-weights
  - def-integral-dominant-and-strictly-dominant-weights
  - def-weyl-vector-rho-for-a-chosen-positive-system
  - def-axiom-of-choice
dependency_roles:
  def-spin8-vector-and-half-spin-modules: mathematical-premise
  lem-spin8-modules-well-defined: mathematical-premise
  lem-spin8-four-form-chirality-weights: mathematical-premise
  thm-highest-weight-classification-of-finite-dimensional-irreducible-representations: mathematical-premise
  thm-weyl-dimension-formula: mathematical-premise
  def-fundamental-weights: mathematical-premise
  def-integral-dominant-and-strictly-dominant-weights: mathematical-premise
  def-weyl-vector-rho-for-a-chosen-positive-system: mathematical-premise
  def-axiom-of-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.6, printed pp. 143–145, equations (6.120)–(6.123): vector and spinor tensor products, with the cited representation-theoretic proof limits."
    - title: "Katrin Becker, Melanie Becker, and John H. Schwarz, String Theory and M-Theory: A Modern Introduction"
      url: "https://csp-global.org/download/M-theory-Cambridge-University.pdf"
      locator: "Chapter 5.3, printed pp. 167–169, equation (5.89) and Exercise 5.8: Spin(8) tensor products and the 35- and 56-dimensional summands."
---

## Statement

All representations, tensor products, invariant subspaces, and maps below are real and Spin(8)-equivariant. For a real module $X$, $X\otimes X$ is its tensor square, $\operatorname{Sym}^2(X)$ is the $+1$ eigenspace of the factor-swap map, and $\Lambda^2(X)$ is the $-1$ eigenspace; these split $X\otimes X$ because the scalar field is $\mathbb R$. The symbol $1$ denotes the trivial real line and $28$ the adjoint module of $\mathfrak{so}(8)$, the Lie algebra of skew-adjoint endomorphisms of $V$ with conjugation action. Identify $X\otimes X$ with $\operatorname{End}_{\mathbb R}(X)$ by $x\otimes y\mapsto(z\mapsto\langle y,z\rangle x)$ and use the ordinary linear trace; for $X=8_v,8_s,8_c$, $35_X$ denotes the kernel of this trace on $\operatorname{Sym}^2(X)$. Define $\Lambda^4_\pm V$ as the $\pm1$ Hodge-star eigenspaces for the oriented metric of the preceding lemma. In these fixed conventions, $35_s\cong\Lambda^4_+V$ and $35_c\cong\Lambda^4_-V$ ([[lem-spin8-four-form-chirality-weights]]).

Write $c(v):\Delta^+\oplus\Delta^-\to\Delta^+\oplus\Delta^-$ for the Clifford action of $v\in8_v$. Define $56_c=\ker(8_v\otimes8_s\to8_c)$ and $56_s=\ker(8_v\otimes8_c\to8_s)$ for the maps $v\otimes s\mapsto c(v)s$. Define $\beta:8_s\otimes8_c\to8_v$ by $\langle\beta(s,t),v\rangle=\langle c(v)s,t\rangle$ and put $56_v=\ker\beta$. The following is the exact decomposition interface from the plan; the proof below establishes that these kernels are irreducible and have dimension $56$.

For the real irreducible Spin(8) modules defined in def-spin8-vector-and-half-spin-modules, $Sym^2(8_v)$ is isomorphic to 1 direct-sum $35_v$ and $\Lambda ^2(8_v)$ to 28; $Sym^2(8_s)$ is 1 direct-sum $35_s$ and $\Lambda ^2(8_s)$ is 28; $Sym^2(8_c)$ is 1 direct-sum $35_c$ and $\Lambda ^2(8_c)$ is 28. The mixed products are $8_s$ tensor $8_c=8_v$ direct-sum $56_v$, $8_v$ tensor $8_s=8_c$ direct-sum $56_c$, and $8_v$ tensor $8_c=8_s$ direct-sum $56_s$. Here $35_v$ is the traceless symmetric rank-two tensor module; $35_s$ and $35_c$ are the traceless complements to the scalar in the corresponding symmetric squares; each 56 is the irreducible 56-dimensional summand.
## Statement references

[[def-spin8-vector-and-half-spin-modules]]

[[lem-spin8-modules-well-defined]]

[[lem-spin8-four-form-chirality-weights]]

## Facts & Assumptions

**Given:** The oriented positive-definite $V=\mathbb R^8$ and the real Spin(8) modules $8_v,8_s,8_c$ of the preceding definition.

[F1] The complexified Lie algebra is simple of type $D_4$, with positive roots $\xi_i\pm\xi_j$ for $i<j$, Euclidean inner product $(\xi_i,\xi_j)=\delta_{ij}$, fundamental weights $\lambda_1,\lambda_2,\lambda_3,\lambda_4$ dual to the simple coroots, dominant integral weights their nonnegative integral combinations, Weyl vector $\rho=\frac12\sum_{\alpha\in\Phi^+}\alpha=(3,2,1,0)$, module highest weights $\lambda_1,\lambda_4,\lambda_3$ for $8_v,8_s,8_c$, invariant positive-definite inner products, and the equivariant Clifford action ([[lem-spin8-modules-well-defined]], [[def-fundamental-weights]], [[def-integral-dominant-and-strictly-dominant-weights]], [[def-weyl-vector-rho-for-a-chosen-positive-system]]). The vector representation is $g\mapsto\rho_g$ and the spin action is induced by Clifford multiplication ([[def-spin8-vector-and-half-spin-modules]]).

[F2] For a finite-dimensional complex semisimple Lie algebra, finite-dimensional irreducible modules are classified by dominant integral highest weights; the Axiom of Choice is an explicit hypothesis ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).

[F3] If $\mu$ is dominant integral then $\dim L(\mu)=\prod_{\alpha\in\Phi^+}(\mu+\rho,\alpha)/(\rho,\alpha)$; this imported formula explicitly assumes the Axiom of Choice ([[thm-weyl-dimension-formula]]).

[F4] The oriented Hodge-star eigenspaces $\Lambda^4_+V,\Lambda^4_-V$ are irreducible of highest weights $2\lambda_4,2\lambda_3$ and real dimension $35$ ([[lem-spin8-four-form-chirality-weights]]).

[A1] The Axiom of Choice, as defined in [[def-axiom-of-choice]], is assumed for the Lie-theory and dominant-integral conventions in [F1] and exactly to use [F2] and [F3].

## Proof

1.1 Write the positive roots as $\xi_i-\xi_j$ and $\xi_i+\xi_j$ for $i<j$, with $\rho=(3,2,1,0)$ and $\lambda_1=\xi_1$, $\lambda_2=\xi_1+\xi_2$, $\lambda_3=(\xi_1+\xi_2+\xi_3-\xi_4)/2$, $\lambda_4=(\xi_1+\xi_2+\xi_3+\xi_4)/2$, as fixed in [F1]. Pairing the six roots for each $i<j$ in [F3] gives denominator $(3^2-2^2)(3^2-1^2)(3^2-0^2)(2^2-1^2)(2^2-0^2)(1^2-0^2)=5\cdot8\cdot9\cdot3\cdot4\cdot1=4320$, so $$d(\mu)=\frac{\prod_{i<j}((\mu_i+\rho_i)^2-(\mu_j+\rho_j)^2)}{4320}.$$ For $\lambda_1,\lambda_3,\lambda_4$, the shifted-coordinate squares are respectively $(16,4,1,0)$, $(49,25,9,1)/4$, and $(49,25,9,1)/4$, giving numerator products $34560,34560,34560$ and dimensions $8,8,8$. For $\lambda_2$, the squares are $(16,9,1,0)$, giving $7\cdot15\cdot16\cdot8\cdot9\cdot1=120960$ and dimension $28$. For $2\lambda_1,2\lambda_3,2\lambda_4$, the squares are $(25,4,1,0)$, $(16,9,4,1)$, $(16,9,4,1)$, giving numerator products $151200,151200,151200$ and dimensions $35,35,35$. For $\lambda_1+\lambda_3,\lambda_1+\lambda_4$, the squares are $(81,25,9,1)/4$ in both cases, giving $14\cdot18\cdot20\cdot4\cdot6\cdot2=241920$ and dimension $56$; for $\lambda_3+\lambda_4$, the squares are $(16,9,4,0)$, giving $7\cdot12\cdot16\cdot5\cdot9\cdot4=241920$ and dimension $56$. Each weight is dominant integral because it is a nonnegative integral combination of the displayed fundamental weights. [F1, F3, A1, algebra]

1.2 Define $\beta:8_s\otimes8_c\to8_v$ by $\langle\beta(s,t),v\rangle=\langle c(v)s,t\rangle$. It is Spin-equivariant: for $g\in\operatorname{Spin}(8)$, Clifford conjugation sends $c(v)$ to $c(\rho_gv)$ and the three inner products are invariant by [F1]. It is nonzero because for a unit $v$ and nonzero $s$, Clifford multiplication gives a nonzero $c(v)s\in8_c$, and choosing $t=c(v)s$ makes $\langle\beta(s,t),v\rangle=\|c(v)s\|^2>0$. Since $8_v$ is irreducible by [F1], $\beta$ is onto and its kernel has dimension $64-8=56$. [F1, algebra]

2.1 The invariant real inner products in [F1] complexify to invariant Hermitian inner products on each tensor representation. Taking orthogonal complements repeatedly therefore decomposes each complexified representation into irreducible Spin(8)-submodules. By [F1], the group is generated by plane-rotation exponentials and its central kernel. The vector action in [[def-spin8-vector-and-half-spin-modules]] is conjugation, so $-1$ acts trivially on $8_v$; the spin action is left Clifford multiplication, so $-1$ acts as $-I$ on $8_s,8_c$. It therefore acts scalarly on every tensor product here. Hence a subspace is Spin(8)-invariant exactly when it is invariant under the complexified rotation Lie algebra. The highest-weight vector of weight $\lambda$ in one factor tensored with the highest-weight vector of weight $\mu$ in another is nonzero, has weight $\lambda+\mu$, and is killed by every positive-root operator because such an operator acts on a tensor as the sum of its actions on the factors. Every tensor-product weight is at most $\lambda+\mu$. Projections onto the irreducible summands commute with the Lie algebra action, so a nonzero projection of this vector is a highest-weight vector of weight $\lambda+\mu$ in one summand. Its highest weight is dominant integral, and [F2] identifies that summand as $L(\lambda+\mu)$; its dimension is the value computed in step 1.1 by [F3]. [F1, F2, F3, A1, step 1.1, algebra]

3.1 The trace map $\operatorname{Sym}^2(8_v)\to\mathbb R$ is onto because the invariant metric tensor has trace $8$, and its real kernel has dimension $8\cdot9/2-1=35$. The square of a highest-weight vector of weight $\lambda_1$ is highest of weight $2\lambda_1$; its irreducible summand from step 2.1 has dimension $35$. The trace map vanishes on that summand: a nonzero equivariant map from a $35$-dimensional irreducible module to the one-dimensional trivial module would have zero kernel and hence impossible image dimension. Thus the complexified summand equals the complexification of the real trace-free kernel, proving that kernel irreducible; the invariant metric splits off the real trivial line. Also $\Lambda^2(8_v)$ identifies with $\mathfrak{so}(8)$ by $u\wedge v\mapsto(x\mapsto\langle v,x\rangle u-\langle u,x\rangle v)$; this is an equivariant isomorphism onto the $28$-dimensional adjoint module, irreducible by the simplicity in [F1]. [F1, F2, F3, step 2.1, algebra]

3.2 For $X=8_s$ or $8_c$, the invariant metric gives an onto trace map $\operatorname{Sym}^2(X)\to\mathbb R$ with real kernel dimension $8\cdot9/2-1=35$. The square of a highest-weight vector has highest weight $2\lambda_4$ for $X=8_s$ and $2\lambda_3$ for $X=8_c$; step 2.1 supplies an irreducible $35$-dimensional complex summand. Its trace is zero because a nonzero equivariant map from this irreducible $35$-dimensional summand to the trivial line would be injective and exceed the target dimension. Hence it equals the complexification of the real trace-free kernel, proving that kernel irreducible; the metric tensor splits off the real trivial line. For either chirality, call the real trace-free kernel $X_0$ and the corresponding real Hodge eigenspace from [F4] $Y_0$. Their complexifications are irreducible of the same highest weight, so [F2] gives a complex Lie-algebra intertwiner $\phi:(X_0)_\mathbb C\to(Y_0)_\mathbb C$ that is an isomorphism. For each coordinate-plane infinitesimal rotation $T$, the identity $\phi T_X=T_Y\phi$ gives $\phi\exp(tT_X)=\exp(tT_Y)\phi$ by the convergent matrix-exponential series. These exponentials are the actions of the rotation lifts from [F1]. The kernel element $-1$ acts trivially on $X_0$, as a subspace of a half-spin tensor square, and on $Y_0$, whose action factors through $SO(8)$. Rotation lifts and this kernel generate Spin(8) by [F1], so $\phi$ intertwines the full group actions. Let $\sigma_X,\sigma_Y$ be the conjugations whose fixed spaces are $X_0,Y_0$. The map $d=\phi^{-1}\sigma_Y\phi$ is a conjugate-linear equivariant involution on $(X_0)_\mathbb C$, and $d\sigma_X$ is a complex-linear equivariant endomorphism; by Schur's lemma it is $aI$ (a complex endomorphism has an eigenvalue, whose nonzero eigenspace is invariant, hence the whole irreducible module). Since $d=a\sigma_X$ and $d^2=I$, $|a|=1$. Choose $c\in\mathbb C$ with $c/\overline c=a$; then $\sigma_Y(c\phi)=\overline c\,a\phi\sigma_X=c\phi\sigma_X$, so $c\phi$ restricts to a real equivariant isomorphism $X_0\cong Y_0$. Thus $35_s\cong\Lambda^4_+V$ and $35_c\cong\Lambda^4_-V$ in these orientation and chirality conventions. [F1, F2, F3, F4, step 2.1, algebra]

3.3 The tensor of highest-weight vectors in the complexification of $8_s\otimes8_c$ has highest weight $\lambda_4+\lambda_3$; step 2.1 gives an irreducible $56$-dimensional summand of that weight. Its restriction under the complexified $\beta$ is zero: a nonzero map from an irreducible $56$-dimensional module to the irreducible $8$-dimensional module would be injective and have image dimension $56$, impossible. Thus this summand equals the complexified kernel, since the real kernel has dimension $56$ by step 1.2 and complexification preserves dimension. Hence the real kernel is irreducible, because any real invariant subspace complexifies to an invariant subspace of this irreducible complexification. The invariant real orthogonal complement of $\ker\beta$ maps isomorphically to $8_v$: it has dimension $8$, intersects the kernel trivially, and $\beta$ is onto. Therefore $8_s\otimes8_c\cong8_v\oplus56_v$ as real modules. [F1, step 2.1, step 1.2, algebra]

3.4 The map $\gamma_-:8_v\otimes8_c\to8_s$, $v\otimes t\mapsto c(v)t$, is equivariant and onto because $c(v_0)^2=I$ for a fixed unit vector $v_0$; its real kernel has dimension $56$. The complexified highest-weight tensor has weight $\lambda_1+\lambda_3$, whose irreducible summand has dimension $56$ by step 2.1. Equivariance and the unequal target dimension make its image zero, so it is the full complexified kernel; therefore the real kernel is irreducible. Its invariant real orthogonal complement has dimension $8$, intersects the kernel trivially, and maps onto $8_s$ because $\gamma_-$ is surjective. Hence $8_v\otimes8_c\cong8_s\oplus56_s$. [F1, step 2.1, algebra]

4.1 For either real half-spin module $X$, the invariant inner product identifies $\Lambda^2X$ equivariantly with the skew-adjoint endomorphisms $\mathfrak{so}(X)$. The plane-rotation infinitesimal action from [F1] maps $\mathfrak{so}(8)\to\mathfrak{so}(X)$, and its complexification is nonzero because $X_\mathbb C$ has highest weight $\lambda_3$ or $\lambda_4$. Its complexified kernel is an ideal in the simple algebra $\mathfrak{so}(8,\mathbb C)$, so it is zero; hence the real map is injective. Both real Lie algebras have dimension $8\cdot7/2=28$, so it is onto and intertwines their adjoint actions. A real invariant subspace of this adjoint module complexifies to an ideal in $\mathfrak{so}(8,\mathbb C)$, so simplicity makes it zero or the whole space. Therefore $\Lambda^2X\cong28$ irreducibly. [F1, step 3.2, algebra]

4.2 Clifford multiplication defines an equivariant real map $\gamma_+:8_v\otimes8_s\to8_c$, $v\otimes s\mapsto c(v)s$. It is onto because for any fixed unit $v_0$, $c(v_0)^2=I$ maps $8_s$ bijectively to $8_c$, so its kernel has real dimension $64-8=56$. In the complexification, the tensor of highest-weight vectors has weight $\lambda_1+\lambda_4$; step 2.1 supplies an irreducible $56$-dimensional summand. Its map under the complexified $\gamma_+$ is zero by the same injectivity-and-dimension argument as in step 3.3, so it equals the complexified real kernel. Hence the real kernel is irreducible. Its invariant real orthogonal complement has dimension $8$, intersects the kernel trivially, and maps onto $8_c$; this gives $8_v\otimes8_s\cong8_c\oplus56_c$ over $\mathbb R$. [F1, step 2.1, step 3.3, algebra]

5.1 Steps 3.1, 3.2, and 4.1 prove all symmetric- and exterior-square decompositions, and steps 1.2, 3.3, 3.4, and 4.2 prove all mixed products with the kernels named in the Statement. Reversing chirality exchanges $\lambda_3$ and $\lambda_4$ by [F1] and therefore exchanges the corresponding $s,c$ labels without altering any dimension. [F1, step 3.1, step 3.2, step 4.1, step 1.2, step 3.3, step 4.2, step 3.4] ∎

## Remarks

The $35_s$ and $35_c$ names in this item mean the trace-free symmetric squares; under the explicit orientation and chirality convention of the Statement they identify with the self-dual and anti-self-dual four-form modules. The source literature may attach opposite Hodge-star signs when its chirality or orientation convention differs, so those signs must not be transferred without converting conventions. The representation-theoretic argument uses the local Clifford maps and highest-weight dimensions, not a string-spectrum interpretation.

```tikzcd
0 \arrow[r] & 56_c \arrow[r, hook] & 8_v\otimes8_s \arrow[r, "c"] & 8_c \arrow[r] & 0 \\
0 \arrow[r] & 56_s \arrow[r, hook] & 8_v\otimes8_c \arrow[r, "c"] & 8_s \arrow[r] & 0 \\
0 \arrow[r] & 56_v \arrow[r, hook] & 8_s\otimes8_c \arrow[r, "\beta"] & 8_v \arrow[r] & 0
```

Each row summarizes the exact sequence proved in steps 1.2, 3.3, 3.4, and 4.2: the first two maps labelled $c$ are Clifford multiplication and the last map is the bilinear map $\beta$ defined in the Statement. Exactness is established by the surjectivity and kernel arguments in the proof; the diagram is only a summary.
