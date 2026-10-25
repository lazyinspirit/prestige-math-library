---
id: thm-qftx-framed-p2-monad-adhm-correspondence
kind: theorem
title: Framed P² monads and stable ADHM data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-linear-data-and-framed-monads
dependency_level: 9
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - lem-adhm-stable-quotient-and-torus-lift
  - lem-qftx-p2-beilinson-diagonal-and-framed-vanishing
  - thm-qftx-adhm-real-complex-quotient-correspondence
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-serre-duality-projective-space-coherent-sheaves
  - def-axiom-of-choice
  - thm-the-complex-numbers-are-algebraically-closed
  - thm-auslander-buchsbaum-formula
  - def-depth-with-respect-to-an-ideal
  - lem-noetherian-local-flatness-criterion-finite-over-target
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  lem-adhm-stable-quotient-and-torus-lift: mathematical-premise
  lem-qftx-p2-beilinson-diagonal-and-framed-vanishing: mathematical-premise
  thm-qftx-adhm-real-complex-quotient-correspondence: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  thm-serre-duality-projective-space-coherent-sheaves: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-the-complex-numbers-are-algebraically-closed: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  def-depth-with-respect-to-an-ideal: mathematical-premise
  lem-noetherian-local-flatness-criterion-finite-over-target: mathematical-premise
  thm-cech-computes-qc-cohomology-separated-scheme-affine-cover: mathematical-premise
axiom_base: ZF + full Axiom of Choice through the stated quotient,
  finite-matrix, local-algebra and projective-cohomology suppliers.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: F. Henni, Monads for framed torsion-free sheaves on multi-blow-ups of the
        projective plane
      url: https://arxiv.org/pdf/0903.3190
      locator: "§§2–3: monad and ADHM constructions; the P² torsion/depth and
        normalized converse are supplied locally here."
    - title: Andrew J. Donaldson, The ADHM construction of Yang–Mills instantons
      url: https://arxiv.org/pdf/2205.08639
      locator: "Printed pp. 3–12: ADHM data, twistor/Ward context and monads; this is
        a roadmap, not the local P² proof."
    - title: Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, PDF pp. 17–19: framed-sheaf conventions and locally-free locus;
        no monad dictionary proof is claimed from this section."
    - title: Nikita A. Nekrasov, Seiberg–Witten Prepotential from Instanton Counting
      url: https://arxiv.org/pdf/hep-th/0206161
      locator: "§§3.1–3.3: ADHM equations, FI levels and framing torus conventions."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume AC. Let $V=\mathbb C^k$, $W=\mathbb C^N$, $N\ge1$, $k\ge0$, and let $(B_1,B_2,I,J)$ satisfy $[B_1,B_2]+IJ=0$ and be stable, meaning that the vectors obtained by applying all words in $B_1,B_2$ to $I(W)$ span $V$. Costable means that no nonzero common $B_1,B_2$-invariant subspace lies in $\ker J$, and regular means stable and costable. On $\mathbb P^2$ with coordinates $[z_0:z_1:z_2]$, define

$$\alpha=\begin{pmatrix}z_0B_1-z_1\\z_0B_2-z_2\\z_0J\end{pmatrix}:V\otimes\mathcal O(-1)\to(V\oplus V\oplus W)\otimes\mathcal O,\qquad \beta=\begin{pmatrix}-z_0B_2+z_2&z_0B_1-z_1&z_0I\end{pmatrix}:(V\oplus V\oplus W)\otimes\mathcal O\to V\otimes\mathcal O(1).$$

Then $\beta\alpha=z_0^2([B_1,B_2]+IJ)=0$, $\alpha$ is injective as a sheaf map, and $\beta$ is surjective at every point. The three-term complex is a monad, meaning it is exact at its first and last terms; its middle cohomology $\mathcal E=\ker\beta/\operatorname{im}\alpha$ is torsion-free of rank $N$, has Hilbert polynomial $N\binom{m+2}{2}-k$, and has a canonical framing $\mathcal E|_{L_\infty}\cong W\otimes\mathcal O_{L_\infty}$. Every framed torsion-free sheaf with this rank, framing and Hilbert polynomial arises uniquely up to simultaneous change of basis in $V$ from this construction. For a finite-type complex scheme $S$, a family of ADHM data consists of a rank-$k$ vector bundle $\mathcal V$ on $S$, the fixed framing bundle $\mathcal W=W\otimes\mathcal O_S$, endomorphisms $B_i\in\operatorname{End}_{\mathcal O_S}(\mathcal V)$, and maps $I:\mathcal W\to\mathcal V$, $J:\mathcal V\to\mathcal W$ satisfying $[B_1,B_2]+IJ=0$ as a section of $\operatorname{End}(\mathcal V)\otimes\mathcal O_S$ and stable on every geometric fiber. Isomorphisms of such data are vector-bundle isomorphisms of $\mathcal V$ intertwining $B_i,I,J$ and acting identically on $\mathcal W$. A framed sheaf family consists of a coherent sheaf $\mathcal E$ on $\mathbb P^2\times S$ flat over $S$, together with a relative framing $\Phi:\mathcal E|_{L_\infty\times S}\xrightarrow{\sim}\mathcal W\otimes\mathcal O_{L_\infty\times S}$; its closed fibers are required to be torsion-free of rank $N$ with the Hilbert polynomial in the Statement. Isomorphisms of framed sheaf families commute with $\Phi$. If the relative cohomology bundles and the canonical base-change maps satisfy the ranks and isomorphism hypotheses of the preceding Beilinson lemma, the monad construction and its inverse are inverse on isomorphism classes of these families, and the monad middle cohomology is flat over $S$.

For a fixed ADHM datum $x=(B_1,B_2,I,J)$ and its framed sheaf $(\mathcal E,\phi)$, let $D=\operatorname{Spec}\mathbb C[\epsilon]/(\epsilon^2)$. A first-order framed ADHM deformation is a family over $D$ with a specified identification of its special fiber with $x$, modulo isomorphisms that induce the identity under this identification and on $W$. A first-order framed sheaf deformation is a framed sheaf family over $D$ as defined above, with a specified special-fiber isomorphism $\theta:\mathcal E_D|_{\mathbb P^2\times\{0\}}\xrightarrow{\sim}\mathcal E$ satisfying $\Phi|_{L_\infty\times\{0\}}=\phi\circ\theta|_{L_\infty}$; its isomorphisms commute with $\Phi$ and induce the identity under $\theta$. Every first-order framed-sheaf family over $D$ satisfies the relative cohomology-bundle and base-change hypotheses of the preceding Beilinson lemma, as proved in step 5.1. Consequently, the first-order correspondence gives inverse maps on all the identified-special-fiber deformation classes defined here and on their tangent vector spaces. Explicitly, define $d_1:\operatorname{End}_{\mathbb C}(V)^2\times\operatorname{Hom}_{\mathbb C}(W,V)\times\operatorname{Hom}_{\mathbb C}(V,W)\to\operatorname{End}_{\mathbb C}(V)$ by

$$d_1(\dot B_1,\dot B_2,\dot I,\dot J)=[\dot B_1,B_2]+[B_1,\dot B_2]+\dot I J+I\dot J,$$

and define $d_0:\operatorname{End}_{\mathbb C}(V)\to\operatorname{End}_{\mathbb C}(V)^2\times\operatorname{Hom}_{\mathbb C}(W,V)\times\operatorname{Hom}_{\mathbb C}(V,W)$ by $d_0(\xi)=([\xi,B_1],[\xi,B_2],\xi I,-J\xi)$. A direct expansion of the ADHM equation gives $d_1\circ d_0=0$. The ADHM first-order tangent vector space is $\ker d_1/\operatorname{im}d_0$. Within the stated family range, the first-order correspondence identifies the corresponding ADHM tangent classes with the tangent vector space of the framed-sheaf deformation classes just specified. The sheaf is locally free exactly when the ADHM datum is costable; hence the regular locus is the locally-free sheaf locus. Combined with the real/complex quotient theorem, positive-FI data correspond to all such framed torsion-free sheaves, while the zero-FI real quotient corresponds to the locally-free locus. The framing representation has character $\sum_{a=1}^N e_a^{-1}$ and the dual framing has character $\sum_{a=1}^N e_a$.

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

[F6] Algebraic closedness gives an eigenvalue $\lambda$ of an endomorphism $A$ of a nonzero finite-dimensional complex space. If $AB=BA$, then $\ker(A-\lambda I)$ is nonzero and $B$-invariant; an eigenvector of the restriction of $B$ to this space is a common eigenvector. This proves the commuting-pair assertion used below, including for dual spaces. [[thm-the-complex-numbers-are-algebraically-closed]]

[F7] For a nonzero finite module $M$ of finite projective dimension over a nonzero Noetherian local ring $R$, the Auslander–Buchsbaum formula states $\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$. Depth is the supremum of lengths of $M$-regular sequences in the maximal ideal, where each successive multiplication is injective on the preceding nonzero quotient. At a closed point of $\mathbb P^2$ the two affine coordinate parameters form an $R$-regular sequence, so $\operatorname{depth}R\ge2$. Thus a module with $\operatorname{pd}_RM\le1$ has depth at least one. The exclusion of finite-length submodules is proved in step 3.1. [[thm-auslander-buchsbaum-formula]], [[def-depth-with-respect-to-an-ideal]]

[F8] For a finite module over a Noetherian local algebra, if its residue fiber is flat over the residue field and the maximal-ideal multiplication map is injective, then it is flat over the base local ring; vanishing of the residue-field Tor group gives that injection. [[lem-noetherian-local-flatness-criterion-finite-over-target]]

[F10] Assume AC. On $\mathbb P^2_A$ for an affine base $\operatorname{Spec}A$, the three standard affine charts and their affine intersections form an acyclic cover for every quasi-coherent sheaf. Its ordered Čech complex computes sheaf cohomology and has no terms above degree two. This applies to $A=\mathbb C$ and $A=\mathbb C[\epsilon]/(\epsilon^2)$. [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]

## Proof

**Given:** The Statement's data. Let $k>0$ until the separate $k=0$ check.

1.1 Direct multiplication gives $\beta\alpha=(-z_0B_2+z_2)(z_0B_1-z_1)+(z_0B_1-z_1)(z_0B_2-z_2)+z_0^2IJ=z_0^2([B_1,B_2]+IJ)=0$. The $z_0z_1$ and $z_0z_2$ cross terms cancel pairwise, and the $z_1z_2$ terms cancel. On $L_\infty$, $\alpha=(-z_1,-z_2,0)^T$ is injective at every point because $z_1,z_2$ are not simultaneously zero. Thus $\alpha$ has full rank generically; its sheaf kernel is a torsion subsheaf of the locally free source, and hence is zero. [F1, algebra]

1.2 Conversely, let $\mathcal E$ be a framed torsion-free sheaf with the stated Hilbert polynomial. The preceding Beilinson lemma constructs its monad, with terms $V_1\mathcal O(-1)$, $M\mathcal O$, and $V_2\mathcal O(1)$ of ranks $k,2k+N,k$. Its restriction to $L_\infty$ remains exact at the ends because $\mathcal E$ is locally free there. Put $K=\ker\beta|_{L_\infty}$. The sequence $0\to V_1\mathcal O(-1)\to K\to W\mathcal O\to0$ splits since $\operatorname{Ext}^1(W\mathcal O,V_1\mathcal O(-1))=V_1\otimes W^*\otimes H^1(\mathcal O(-1))=0$. [F3, F5]

2.1 At a point of $L_\infty$, $\beta=(z_2,-z_1,0)$ is onto. At an affine point $[1:u_1:u_2]$, failure of surjectivity would give a nonzero $\lambda\in V^*$ with $\lambda B_1=u_1\lambda$, $\lambda B_2=u_2\lambda$, and $\lambda I=0$. Then $\lambda$ annihilates every vector $B_{i_1}\cdots B_{i_m}I(w)$, contradicting stability. Hence $\beta$ is everywhere onto, so $K=\ker\beta$ is a vector bundle of rank $k+N$. [F1, step 1.1, algebra]

2.2 A fiber kernel of $\alpha$ over $[1:u_1:u_2]$ is a nonzero vector $v$ with $B_1v=u_1v$, $B_2v=u_2v$, and $Jv=0$. Each $u_i$ must be an eigenvalue of the fixed matrix $B_i$, so the rank-drop locus is contained in the finite product of the two finite spectra. Such a vector spans a common invariant line in $\ker J$, so costability fails. Conversely, if costability fails, choose a nonzero common invariant subspace $S\subseteq\ker J$. On $S$, the complex equation implies $[B_1,B_2]|_S=-IJ|_S=0$, so the restrictions commute. By [F6] they have a common eigenvector; its eigenvalues give an affine point where $\alpha$ has a fiber kernel. Therefore $\alpha$ has full fiber rank everywhere exactly for costable data. [F1, F6, step 1.1, algebra]

2.3 The remaining line extension $0\to V_1\mathcal O(-1)\oplus W\mathcal O\to M\mathcal O\to V_2\mathcal O(1)\to0$ has class in $\operatorname{Hom}(V_2,V_1)\otimes H^1(\mathcal O(-2))$, since $H^1(\mathcal O(-1))=0$. Twist by $\mathcal O(-1)$ and take cohomology. The connecting map $V_2\to V_1\otimes H^1(\mathcal O(-2))$ is an isomorphism: the adjacent groups $H^0(\mathcal O(-1))$ and $H^1(\mathcal O(-1))$ vanish, while $H^1(\mathcal O(-2))\cong\mathbb C$. Thus $V_2$ is identified with $V_1$ by this canonical extension class. Choosing a basis of $V_1$ and using the fixed framed basis of $W$ identifies $M=V\oplus V\oplus W$ and the line maps with the two Euler blocks in the Statement. Any other such choice differs by one simultaneous element of $GL(V)$. [F3, F5, step 1.2, algebra]

3.1 The sequence $0\to V\mathcal O(-1)\xrightarrow{\alpha}K\to\mathcal E\to0$ has locally free first two terms. Away from the finite rank-drop set of step 2.2, $\mathcal E$ is locally free; hence any torsion is supported at finitely many points. At such a point, the local ring is regular of dimension two and this sequence gives $\operatorname{pd}\mathcal E\le1$. The Auslander–Buchsbaum formula [F7] gives $\operatorname{depth}\mathcal E\ge1$. If a nonzero finite-length submodule $T$ existed, choose the least $n\ge1$ with $\mathfrak m^nT=0$. A nonzero element of $\mathfrak m^{n-1}T$ is killed by all of $\mathfrak m$; hence no element of $\mathfrak m$ acts injectively on $\mathcal E$, contradicting depth at least one. Thus no such torsion exists. Thus $\mathcal E$ is torsion-free of rank $(2k+N)-k-k=N$. The rank drops only off $L_\infty$, so $\mathcal E$ is locally free near the framing line. [F7, step 1.1, step 2.1, step 2.2, algebra]

3.2 The remaining coefficients of the two linear maps are their $z_0$ coefficients, so write $\alpha=(z_0B_1-z_1,z_0B_2-z_2,z_0J)^T$ and $\beta=(-z_0C_1+z_2,z_0C_2-z_1,z_0I)$. The coefficients of $z_0z_1$ and $z_0z_2$ in $\beta\alpha=0$ force $C_1=B_2$ and $C_2=B_1$; the $z_0^2$ coefficient is then $[B_1,B_2]+IJ=0$. This recovers the stated ADHM form. The surjectivity of $\beta$ implies stability: if $U=\operatorname{span}\{B_{i_1}\cdots B_{i_m}I(W)\}$ were proper, it is invariant and the induced $B_1,B_2$ on $V/U$ commute because $[B_1,B_2]=-IJ$ has image in $U$. Their dual actions on the nonzero annihilator $U^\perp\subset V^*$ commute, so [F6] gives a common eigen-covector $\lambda\ne0$ with $\lambda I=0$. At the corresponding affine point, $\lambda\beta=0$, contradicting surjectivity. [F1, F3, F6, step 2.1, step 2.3, algebra]

4.1 On $L_\infty$, the complex is $0\to V\mathcal O_{L_\infty}(-1)\xrightarrow{(-z_1,-z_2,0)^T}(V\oplus V\oplus W)\mathcal O_{L_\infty}\xrightarrow{(z_2,-z_1,0)}V\mathcal O_{L_\infty}(1)\to0$. The first two $V$ summands form the Euler resolution of the zero sheaf on the line, while the $W$ summand passes unchanged to middle cohomology. The framing is therefore the canonical identification $\mathcal E|_{L_\infty}=W\otimes\mathcal O_{L_\infty}$. In the Grothendieck group, the monad gives $[\mathcal E]=[(V\oplus V\oplus W)\mathcal O]-[V\mathcal O(-1)]-[V\mathcal O(1)]$. Taking Euler characteristics after twisting by $\mathcal O(m)$ and using $\chi(\mathcal O(d))=\binom{d+2}{2}$ yields $\chi(\mathcal E(m))=N\binom{m+2}{2}-k$. [F5, step 1.1, step 2.1, step 3.1, algebra]

4.2 The Beilinson construction is natural under framed sheaf isomorphisms, so an isomorphism of framed sheaves induces maps on the cohomology vector spaces used in steps 1.2, 2.3 and 3.2 and hence a single change of basis $g\in GL(V)$; the normalized Euler blocks force the recovered tuples to differ by $g\cdot(B_1,B_2,I,J)$. Conversely such a $g$ is an isomorphism of monads acting trivially on $W$, and therefore induces a framed sheaf isomorphism. This proves the pointwise inverse equivalence modulo $GL(V)$. For a finite-type data family, step 2.1 makes $\beta$ surjective on the total space, so $K=\ker\beta$ is locally free. To establish total-space injectivity of $\alpha$, trivialize $\mathcal V$ over an affine base $\operatorname{Spec}A$. On $z_0\ne0$ its first square block is $B_1-u_1I$, with determinant monic up to sign in $u_1$ over $A[u_2]$. On $z_1\ne0$ its second block is $aB_2-bI$, where $a=z_0/z_1$, $b=z_2/z_1$; its determinant is monic up to sign in $b$ over $A[a]$. On $z_2\ne0$ use the first block $aB_1-bI$, with $a=z_0/z_2$, $b=z_1/z_2$. Multiplication by any of these determinants is injective on the polynomial coordinate module by the highest nonzero coefficient, even when $A$ has nilpotents. The adjugate identity then makes each square block, and hence $\alpha$, sheaf-injective; localization preserves this. The sequence $0\to\mathcal V\mathcal O(-1)\to K\to\mathcal E\to0$ is therefore exact and its terms before $\mathcal E$ are flat over the base. After tensoring with any residue field of the base, the first map remains sheaf-injective by step 1.1; hence $\operatorname{Tor}_1(k(s),\mathcal E)=0$. Since $\mathcal E$ is finite over each local ring of $\mathbb P^2\times S$ and its residue fiber is a vector space over the residue field, [F8] gives flatness over $S$. Under the stated relative cohomology and base-change hypotheses, the same constructions use vector bundles and are inverse for families. [F2, F3, F8, step 1.1, step 2.1, step 1.2, step 2.3, step 3.2, algebra]

4.3 Step 2.2 proves that costability is equivalent to fiberwise injectivity of $\alpha$. Since $\beta$ is surjective and $K$ is locally free, the quotient $K/\operatorname{im}\alpha$ is locally free exactly when $\alpha$ has constant full rank; failure at any point gives a fiber dimension jump. Hence the locally-free sheaf locus is precisely the regular ADHM locus. Combining this with [F4] gives the positive-FI and zero-FI identifications in the Statement. [F1, F4, step 2.1, step 2.2, step 3.1]

5.1 Let $D=\operatorname{Spec}A$ for $A=\mathbb C[\epsilon]/(\epsilon^2)$, and let $\mathcal F$ be any first-order framed-sheaf family in the Statement, with special fiber $\mathcal E$. Put $Q_1=\mathcal O(-2)$, $Q_2=\Omega^1$, and $Q_3=\mathcal O(-1)$ on $\mathbb P^2$, and set $\mathcal F_i=\mathcal F\otimes\operatorname{pr}_1^*Q_i$ and $\mathcal E_i=\mathcal E\otimes Q_i$. Each $\mathcal F_i$ is flat over $A$. If $i_0:\mathbb P^2_{\mathbb C}\hookrightarrow\mathbb P^2_D$ is the special-fiber inclusion, flatness gives the exact sequence of sheaves on $\mathbb P^2_D$
$$0\longrightarrow(i_0)_*\mathcal E_i\longrightarrow\mathcal F_i\longrightarrow(i_0)_*\mathcal E_i\longrightarrow0,$$
where the last map is reduction modulo $\epsilon$ and the first identifies the special fiber with $\epsilon\mathcal F_i$. The closed-immersion pushforward is exact and $H^q(\mathbb P^2_D,(i_0)_*\mathcal E_i)=H^q(\mathbb P^2,\mathcal E_i)$, so this sequence gives the corresponding long exact cohomology sequence. The absolute Beilinson conclusions give $H^0(\mathbb P^2,\mathcal E_i)=H^2(\mathbb P^2,\mathcal E_i)=0$ and $h^1(\mathbb P^2,\mathcal E_i)=d_i$; [F10] also gives $H^q(\mathbb P^2,\mathcal E_i)=0$ for $q>2$, with $(d_1,d_2,d_3)=(k,2k+N,k)$. The long exact sequence therefore gives $H^0(\mathbb P^2_D,\mathcal F_i)=H^2(\mathbb P^2_D,\mathcal F_i)=0$ and
$$0\longrightarrow H^1(\mathbb P^2,\mathcal E_i)\longrightarrow M_i:=H^1(\mathbb P^2_D,\mathcal F_i)\longrightarrow H^1(\mathbb P^2,\mathcal E_i)\longrightarrow0.$$
The three standard affine opens of $\mathbb P^2_D$ and their affine intersections form a finite cover; the separated-scheme ordered-\v{C}ech theorem [F10] computes quasi-coherent cohomology and gives $H^q(\mathbb P^2_D,\mathcal F_i)=0$ for $q>2$. By the cohomology-presheaf description of $R^qp_*$ and the fact that $D$ has one topological point, $R^qp_*\mathcal F_i$ corresponds to the $A$-module $H^q(\mathbb P^2_D,\mathcal F_i)$. Multiplication by $\epsilon$ on $\mathcal F_i$ factors as reduction followed by the first inclusion; since reduction is surjective on $H^1$, the displayed sequence identifies $\epsilon M_i$ with its left term and $M_i/\epsilon M_i$ with its right term. Thus $M_i$ has complex dimension $2d_i$ and $M_i/\epsilon M_i\cong H^1(\mathbb P^2,\mathcal E_i)$. Lifting a basis of this quotient gives a surjection $A^{d_i}\to M_i$ by Nakayama; both sides have complex dimension $2d_i$, so it is an isomorphism. Hence $R^1p_*\mathcal F_i$ is locally free of rank $d_i$, $R^0p_*\mathcal F_i=R^2p_*\mathcal F_i=0$, and all three canonical derived base-change maps in degrees $0,1,2$ are isomorphisms: in degree one the map is the displayed reduction isomorphism, and in degrees zero and two both sides vanish. This proves the preceding Beilinson family hypotheses for every first-order framed-sheaf family. The ADHM family construction has flat middle cohomology by step 4.2 and retains the relative framing; applying this argument to its sheaf family puts every first-order ADHM deformation in the same range.
Expanding $\mu_{\mathbb C}(x+\epsilon\dot x)=0$ gives $d_1(\dot x)=0$. A change of basis $1+\epsilon\xi$, which is the identity on the identified special fiber and on $W$, changes $\dot x$ by $d_0(\xi)$. Thus the data-side tangent vector space is $\ker d_1/\operatorname{im}d_0$. Differentiating the relative monad maps gives $\beta\dot\alpha+\dot\beta\alpha=0$; a change by $d_0(\xi)$ induces the corresponding chain homotopy fixing the relative framing and special-fiber identification. By the family equivalence in step 4.2, now applicable by the preceding base-change verification, the two constructions commute with the dual-number base change, preserve the specified identifications, and induce inverse linear maps on first-order deformation classes and tangent vector spaces. [F2, F3, F8, F10, step 4.2, algebra]

5.2 Let the rotation torus act on homogeneous coordinates with characters $1,t_1,t_2$, and let $h=\operatorname{diag}(e_1^{-1},\ldots,e_N^{-1})$ act on $W$. On the monad vector spaces choose characters $V(t_1t_2)^{-1}$ in the source, $Vt_2^{-1}\oplus Vt_1^{-1}\oplus Wh$ in the middle, and $V$ in the target, with the natural linearizations of $\mathcal O(-1)$ and $\mathcal O(1)$. The first and second blocks are equivariant because the ratios of middle to source characters are respectively $t_1,t_2$; the $J$ block has ratio $t_1t_2h$; in $\beta$, the first two ratios are $t_2,t_1$ and the framing block ratio is $h^{-1}$. These are exactly the raw transformations in [F1]. On $L_\infty$ the Euler blocks cancel, leaving the framing factor $Wh$; its character is $\sum_a e_a^{-1}$ and its dual has character $\sum_a e_a$. Thus the monad correspondence is torus-equivariant in the specified dual-framing convention. [F1, step 4.1, algebra]

6.1 If $k=0$, $V=0$, all four maps and both equations are the unique zero-dimensional maps, stability and costability are vacuous, and the monad is $0\to W\mathcal O\to0$. Its middle cohomology is the framed bundle $W\mathcal O$ with Hilbert polynomial $N\binom{m+2}{2}$. Conversely, [F3] constructs this same zero-term monad from every framed sheaf with that polynomial, so the framing identifies each such sheaf with $W\mathcal O$. Thus both moduli spaces are points, and all empty-matrix and Euler-block conventions are satisfied. [F1, F3, F5, algebra] ∎
