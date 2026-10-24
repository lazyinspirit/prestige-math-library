---
id: thm-qftx-framed-p2-monad-adhm-correspondence
kind: theorem
title: "Framed P² monads and stable ADHM data"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-linear-data-and-framed-monads
dependency_level: 3
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - lem-adhm-stable-quotient-and-torus-lift
  - lem-qftx-p2-beilinson-diagonal-and-framed-vanishing
  - thm-qftx-adhm-real-complex-quotient-correspondence
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-serre-duality-projective-space-coherent-sheaves
  - def-axiom-of-choice
  - thm-the-complex-numbers-are-algebraically-closed
  - thm-auslander-buchsbaum-serre-regularity-criterion
  - lem-noetherian-local-flatness-criterion-finite-over-target
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  lem-adhm-stable-quotient-and-torus-lift: mathematical-premise
  lem-qftx-p2-beilinson-diagonal-and-framed-vanishing: mathematical-premise
  thm-qftx-adhm-real-complex-quotient-correspondence: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  thm-serre-duality-projective-space-coherent-sheaves: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-the-complex-numbers-are-algebraically-closed: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  lem-noetherian-local-flatness-criterion-finite-over-target: mathematical-premise
axiom_base: "ZF + full Axiom of Choice through the stated quotient, finite-matrix, local-algebra and projective-cohomology suppliers."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "F. Henni, Monads for framed torsion-free sheaves on multi-blow-ups of the projective plane"
      url: https://arxiv.org/pdf/0903.3190
      locator: "§§2–3: monad and ADHM constructions; the P² torsion/depth and normalized converse are supplied locally here."
    - title: "Andrew J. Donaldson, The ADHM construction of Yang–Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "Printed pp. 3–12: ADHM data, twistor/Ward context and monads; this is a roadmap, not the local P² proof."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, PDF pp. 17–19: framed-sheaf conventions and locally-free locus; no monad dictionary proof is claimed from this section."
    - title: "Nikita A. Nekrasov, Seiberg–Witten Prepotential from Instanton Counting"
      url: https://arxiv.org/pdf/hep-th/0206161
      locator: "§§3.1–3.3: ADHM equations, FI levels and framing torus conventions."
verification:
  precheck: pending
---

## Statement

Assume AC. Let $V=\mathbb C^k$, $W=\mathbb C^N$, $N\ge1$, $k\ge0$, and let $(B_1,B_2,I,J)$ satisfy $[B_1,B_2]+IJ=0$ and be stable, meaning that the vectors obtained by applying all words in $B_1,B_2$ to $I(W)$ span $V$. Costable means that no nonzero common $B_1,B_2$-invariant subspace lies in $\ker J$, and regular means stable and costable. On $\mathbb P^2$ with coordinates $[z_0:z_1:z_2]$, define

$$\alpha=\begin{pmatrix}z_0B_1-z_1\\z_0B_2-z_2\\z_0J\end{pmatrix}:V\otimes\mathcal O(-1)\to(V\oplus V\oplus W)\otimes\mathcal O,\qquad \beta=\begin{pmatrix}-z_0B_2+z_2&z_0B_1-z_1&z_0I\end{pmatrix}:(V\oplus V\oplus W)\otimes\mathcal O\to V\otimes\mathcal O(1).$$

Then $\beta\alpha=z_0^2([B_1,B_2]+IJ)=0$, $\alpha$ is injective as a sheaf map, and $\beta$ is surjective at every point. The three-term complex is a monad, meaning it is exact at its first and last terms; its middle cohomology $\mathcal E=\ker\beta/\operatorname{im}\alpha$ is torsion-free of rank $N$, has Hilbert polynomial $N\binom{m+2}{2}-k$, and has a canonical framing $\mathcal E|_{L_\infty}\cong W\otimes\mathcal O_{L_\infty}$. Every framed torsion-free sheaf with this rank, framing and Hilbert polynomial arises uniquely up to simultaneous change of basis in $V$ from this construction. For a finite-type complex scheme $S$, a family of ADHM data is a rank-$k$ vector bundle with endomorphisms and framing maps satisfying the equation and stable on every geometric fiber; its monad cohomology is flat over $S$, and the two constructions are inverse on those families for which the relative cohomology bundles and base-change maps in the preceding Beilinson lemma have the stated ranks and are isomorphisms. A first-order framed deformation means an isomorphism class of such a family over $\mathbb C[\epsilon]/(\epsilon^2)$ with its special fiber identified; the correspondence induces inverse maps on those deformation spaces and their tangent vector spaces. The sheaf is locally free exactly when the ADHM datum is costable; hence the regular locus is the locally-free sheaf locus. Combined with the real/complex quotient theorem, positive-FI data correspond to all such framed torsion-free sheaves, while the zero-FI real quotient corresponds to the locally-free locus. The framing representation has character $\sum_{a=1}^N e_a^{-1}$ and the dual framing has character $\sum_{a=1}^N e_a$.

## Statement references

[Henni, §§2–3](https://arxiv.org/pdf/0903.3190)

[Donaldson, printed pp. 3–12](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1](https://arxiv.org/pdf/math/0311058)

[Nekrasov, §§3.1–3.3](https://arxiv.org/pdf/hep-th/0206161)

## Facts & Assumptions

**Given:** The finite-dimensional data and conventions in the Statement. For analytic interpretations, use only the conditional projective GAGA interface in [F3]; no analytic family algebraization is assumed.

[F1] The raw ADHM equations, stability, costability and torus conventions are exactly those of the local definition. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] The stable complex quotient has word-frame charts, is a geometric quotient, and has tangent space $\ker d_1/\operatorname{im}d_0$. [[lem-adhm-stable-quotient-and-torus-lift]]

[F3] The preceding lemma supplies the exact P² diagonal monad and its framed vanishings under the stated cohomology/base-change assumptions; its algebraic/analytic family comparison uses the exact projective GAGA interface and the stated base-change hypotheses. [[lem-qftx-p2-beilinson-diagonal-and-framed-vanishing]]

[F4] At positive real FI, stable complex orbits correspond to the real unitary quotient; at zero FI the real unitary quotient corresponds exactly to stable and costable data. [[thm-qftx-adhm-real-complex-quotient-correspondence]]

[F5] The coherent-sheaf Serre pairing for $H^2$ and the projective twisting-sheaf cohomology have the exact P² hypotheses used here. [[thm-serre-duality-projective-space-coherent-sheaves]], [[thm-cohomology-projective-space-twisting-sheaves]]

[F6] A commuting pair of complex endomorphisms of a nonzero finite-dimensional complex vector space has a common eigenvector. [[thm-the-complex-numbers-are-algebraically-closed]]

[F7] For a nonzero finite module of projective dimension at most one over a regular local surface ring, the Auslander–Buchsbaum formula gives depth at least one. Such a module has no nonzero finite-length submodule; torsion-freeness additionally requires excluding torsion supported in dimension one, as checked in step 3.1. [[thm-auslander-buchsbaum-serre-regularity-criterion]]

[F8] For a finite module over a Noetherian local algebra, if its residue fiber is flat over the residue field and the maximal-ideal multiplication map is injective, then it is flat over the base local ring; vanishing of the residue-field Tor group gives that injection. [[lem-noetherian-local-flatness-criterion-finite-over-target]]

## Proof

**Given:** The Statement's data. Let $k>0$ until the separate $k=0$ check.

1.1 Direct multiplication gives $\beta\alpha=(-z_0B_2+z_2)(z_0B_1-z_1)+(z_0B_1-z_1)(z_0B_2-z_2)+z_0^2IJ=z_0^2([B_1,B_2]+IJ)=0$. The $z_0z_1$ and $z_0z_2$ cross terms cancel pairwise, and the $z_1z_2$ terms cancel. On $L_\infty$, $\alpha=(-z_1,-z_2,0)^T$ is injective at every point because $z_1,z_2$ are not simultaneously zero. Thus $\alpha$ has full rank generically; its sheaf kernel is a torsion subsheaf of the locally free source, and hence is zero. [F1, algebra]

1.2 Conversely, let $\mathcal E$ be a framed torsion-free sheaf with the stated Hilbert polynomial. The preceding Beilinson lemma constructs its monad, with terms $V_1\mathcal O(-1)$, $M\mathcal O$, and $V_2\mathcal O(1)$ of ranks $k,2k+N,k$. Its restriction to $L_\infty$ remains exact at the ends because $\mathcal E$ is locally free there. Put $K=\ker\beta|_{L_\infty}$. The sequence $0\to V_1\mathcal O(-1)\to K\to W\mathcal O\to0$ splits since $\operatorname{Ext}^1(W\mathcal O,V_1\mathcal O(-1))=V_1\otimes W^*\otimes H^1(\mathcal O(-1))=0$. [F3, F5]

2.1 At a point of $L_\infty$, $\beta=(z_2,-z_1,0)$ is onto. At an affine point $[1:u_1:u_2]$, failure of surjectivity would give a nonzero $\lambda\in V^*$ with $\lambda B_1=u_1\lambda$, $\lambda B_2=u_2\lambda$, and $\lambda I=0$. Then $\lambda$ annihilates every vector $B_{i_1}\cdots B_{i_m}I(w)$, contradicting stability. Hence $\beta$ is everywhere onto, so $K=\ker\beta$ is a vector bundle of rank $k+N$. [F1, step 1.1, algebra]

2.2 A fiber kernel of $\alpha$ over $[1:u_1:u_2]$ is a nonzero vector $v$ with $B_1v=u_1v$, $B_2v=u_2v$, and $Jv=0$. Each $u_i$ must be an eigenvalue of the fixed matrix $B_i$, so the rank-drop locus is contained in the finite product of the two finite spectra. Such a vector spans a common invariant line in $\ker J$, so costability fails. Conversely, if costability fails, choose a nonzero common invariant subspace $S\subseteq\ker J$. On $S$, the complex equation implies $[B_1,B_2]|_S=-IJ|_S=0$, so the restrictions commute. By [F6] they have a common eigenvector; its eigenvalues give an affine point where $\alpha$ has a fiber kernel. Therefore $\alpha$ has full fiber rank everywhere exactly for costable data. [F1, F6, step 1.1, algebra]

2.3 The remaining line extension $0\to V_1\mathcal O(-1)\oplus W\mathcal O\to M\mathcal O\to V_2\mathcal O(1)\to0$ has class in $\operatorname{Hom}(V_2,V_1)\otimes H^1(\mathcal O(-2))$, since $H^1(\mathcal O(-1))=0$. Twist by $\mathcal O(-1)$ and take cohomology. The connecting map $V_2\to V_1\otimes H^1(\mathcal O(-2))$ is an isomorphism: the adjacent groups $H^0(\mathcal O(-1))$ and $H^1(\mathcal O(-1))$ vanish, while $H^1(\mathcal O(-2))\cong\mathbb C$. Thus $V_2$ is identified with $V_1$ by this canonical extension class. Choosing a basis of $V_1$ and using the fixed framed basis of $W$ identifies $M=V\oplus V\oplus W$ and the line maps with the two Euler blocks in the Statement. Any other such choice differs by one simultaneous element of $GL(V)$. [F3, F5, step 1.2, algebra]

3.1 The sequence $0\to V\mathcal O(-1)\xrightarrow{\alpha}K\to\mathcal E\to0$ has locally free first two terms. Away from the finite rank-drop set of step 2.2, $\mathcal E$ is locally free; hence any torsion is supported at finitely many points. At such a point, the local ring is regular of dimension two and this sequence gives $\operatorname{pd}\mathcal E\le1$. The Auslander–Buchsbaum formula [F7] gives $\operatorname{depth}\mathcal E\ge1$. A nonzero finite-length torsion submodule would force depth zero, so no such torsion exists. Thus $\mathcal E$ is torsion-free of rank $(2k+N)-k-k=N$. The rank drops only off $L_\infty$, so $\mathcal E$ is locally free near the framing line. [F7, step 1.1, step 2.1, step 2.2, algebra]

3.2 The remaining coefficients of the two linear maps are their $z_0$ coefficients, so write $\alpha=(z_0B_1-z_1,z_0B_2-z_2,z_0J)^T$ and $\beta=(-z_0C_1+z_2,z_0C_2-z_1,z_0I)$. The coefficients of $z_0z_1$ and $z_0z_2$ in $\beta\alpha=0$ force $C_1=B_2$ and $C_2=B_1$; the $z_0^2$ coefficient is then $[B_1,B_2]+IJ=0$. This recovers the stated ADHM form. The surjectivity of $\beta$ implies stability: if $U=\operatorname{span}\{B_{i_1}\cdots B_{i_m}I(W)\}$ were proper, it is invariant and the induced $B_1,B_2$ on $V/U$ commute because $[B_1,B_2]=-IJ$ has image in $U$. Their dual actions on the nonzero annihilator $U^\perp\subset V^*$ commute, so [F6] gives a common eigen-covector $\lambda\ne0$ with $\lambda I=0$. At the corresponding affine point, $\lambda\beta=0$, contradicting surjectivity. [F1, F3, F6, step 2.1, step 2.3, algebra]

4.1 On $L_\infty$, the complex is $0\to V\mathcal O_{L_\infty}(-1)\xrightarrow{(-z_1,-z_2,0)^T}(V\oplus V\oplus W)\mathcal O_{L_\infty}\xrightarrow{(z_2,-z_1,0)}V\mathcal O_{L_\infty}(1)\to0$. The first two $V$ summands form the Euler resolution of the zero sheaf on the line, while the $W$ summand passes unchanged to middle cohomology. The framing is therefore the canonical identification $\mathcal E|_{L_\infty}=W\otimes\mathcal O_{L_\infty}$. In the Grothendieck group, the monad gives $[\mathcal E]=[(V\oplus V\oplus W)\mathcal O]-[V\mathcal O(-1)]-[V\mathcal O(1)]$. Taking Euler characteristics after twisting by $\mathcal O(m)$ and using $\chi(\mathcal O(d))=\binom{d+2}{2}$ yields $\chi(\mathcal E(m))=N\binom{m+2}{2}-k$. [F5, step 1.1, step 2.1, step 3.1, algebra]

4.2 The Beilinson construction is natural under framed sheaf isomorphisms, so an isomorphism of framed sheaves induces maps on the cohomology vector spaces used in steps 1.2–6.2 and hence a single change of basis $g\in GL(V)$; the normalized Euler blocks force the recovered tuples to differ by $g\cdot(B_1,B_2,I,J)$. Conversely such a $g$ is an isomorphism of monads acting trivially on $W$, and therefore induces a framed sheaf isomorphism. This proves the pointwise inverse equivalence modulo $GL(V)$. For a finite-type data family, step 2.1 makes $\beta$ surjective on the total space, so $K=\ker\beta$ is locally free. The sequence $0\to V\mathcal O(-1)\to K\to\mathcal E\to0$ is exact and its terms before $\mathcal E$ are flat over the base. After tensoring with any residue field of the base, the first map remains sheaf-injective by step 1.1; hence $\operatorname{Tor}_1(k(s),\mathcal E)=0$. Since $\mathcal E$ is finite over each local ring of $\mathbb P^2\times S$ and its residue fiber is a vector space over the residue field, [F8] gives flatness over $S$. Under the stated relative cohomology and base-change hypotheses, the same constructions use vector bundles and are inverse for families. [F2, F3, F8, step 1.1, step 2.1, step 1.2, step 2.3, step 3.2, algebra]

4.3 Step 2.2 proves that costability is equivalent to fiberwise injectivity of $\alpha$. Since $\beta$ is surjective and $K$ is locally free, the quotient $K/\operatorname{im}\alpha$ is locally free exactly when $\alpha$ has constant full rank; failure at any point gives a fiber dimension jump. Hence the locally-free sheaf locus is precisely the regular ADHM locus. Combining this with [F4] gives the positive-FI and zero-FI identifications in the Statement. [F1, F4, step 2.1, step 2.2, step 3.1]

5.1 Apply the family equivalence to $S=\operatorname{Spec}\mathbb C[\epsilon]/(\epsilon^2)$. A first-order deformation of the ADHM data is $(\dot B_1,\dot B_2,\dot I,\dot J)$ satisfying $d\mu_{\mathbb C}=0$; infinitesimal changes of basis are $d_0(\xi)=([\xi,B_1],[\xi,B_2],\xi I,-J\xi)$. Differentiating the monad gives the chain perturbation $(\dot\alpha,\dot\beta)$ with $\beta\dot\alpha+\dot\beta\alpha=0$, and a change by $d_0(\xi)$ is the corresponding chain homotopy. Since the family construction and its inverse commute with this dual-number base change, they induce inverse linear maps on first-order framed deformations and on the quotient tangent spaces $\ker d_1/\operatorname{im}d_0$. [F2, F3, step 4.2, algebra]

5.2 Let the rotation torus act on homogeneous coordinates with characters $1,t_1,t_2$, and let $h=\operatorname{diag}(e_1^{-1},\ldots,e_N^{-1})$ act on $W$. On the monad vector spaces choose characters $V(t_1t_2)^{-1}$ in the source, $Vt_2^{-1}\oplus Vt_1^{-1}\oplus Wh$ in the middle, and $V$ in the target, with the natural linearizations of $\mathcal O(-1)$ and $\mathcal O(1)$. The first and second blocks are equivariant because the ratios of middle to source characters are respectively $t_1,t_2$; the $J$ block has ratio $t_1t_2h$; in $\beta$, the first two ratios are $t_2,t_1$ and the framing block ratio is $h^{-1}$. These are exactly the raw transformations in [F1]. On $L_\infty$ the Euler blocks cancel, leaving the framing factor $Wh$; its character is $\sum_a e_a^{-1}$ and its dual has character $\sum_a e_a$. Thus the monad correspondence is torus-equivariant in the specified dual-framing convention. [F1, step 4.1, algebra]

6.1 If $k=0$, $V=0$, all four maps and both equations are the unique zero-dimensional maps, stability and costability are vacuous, and the monad is $0\to W\mathcal O\to0$. Its middle cohomology is the framed bundle $W\mathcal O$ with Hilbert polynomial $N\binom{m+2}{2}$. Conversely, [F3] constructs this same zero-term monad from every framed sheaf with that polynomial, so the framing identifies each such sheaf with $W\mathcal O$. Thus both moduli spaces are points, and all empty-matrix and Euler-block conventions are satisfied. [F1, F3, F5, algebra] ∎
