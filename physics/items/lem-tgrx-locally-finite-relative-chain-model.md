---
id: lem-tgrx-locally-finite-relative-chain-model
kind: lemma
title: Ambient locally finite mod-two relative chains for candidate regions
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-borel-moore-homology
  - def-relative-singular-homology
  - def-singular-chain-complex-of-a-pair
  - lem-singular-boundary-descends-to-relative-chains
  - thm-the-singular-boundary-squares-to-zero
  - thm-local-homology-detects-interior-points-boundary-points-and-dimension
  - def-relative-fundamental-class-and-boundary-orientation
  - def-simplicial-subcomplex-star-closure-and-link
  - thm-excision-for-singular-homology
dependency_roles:
  def-borel-moore-homology: mathematical-premise
  def-relative-singular-homology: mathematical-premise
  def-singular-chain-complex-of-a-pair: mathematical-premise
  lem-singular-boundary-descends-to-relative-chains: mathematical-premise
  thm-the-singular-boundary-squares-to-zero: mathematical-premise
  thm-local-homology-detects-interior-points-boundary-points-and-dimension: mathematical-premise
  def-relative-fundamental-class-and-boundary-orientation: mathematical-premise
  def-simplicial-subcomplex-star-closure-and-link: mathematical-premise
  thm-excision-for-singular-homology: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, relative chains and manifold local homology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: The existing pinned relative-chain and local-homology suppliers are used below. The ambient locally finite quotient and the sufficient construction with supplied local certificates are proved locally; no new external full-text reading is claimed.
---

## Statement

Let $\Sigma$ be a locally compact Hausdorff space and $B\subseteq\Sigma$ closed. Use $\mathbb Z_2=\{0,1\}$ with addition modulo two. A chain in $C_k^{\mathrm{lf}}(\Sigma)$ is a formal sum of continuous singular $k$-simplex maps with mod-two coefficients such that every point of $\Sigma$ has a neighborhood meeting only finitely many nonzero simplex images. Put $C_k^{\mathrm{lf}}(\Sigma)=0$ for $k<0$. Let $C_k^{\mathrm{lf}}(\Sigma;B)$ be the subgroup of these **ambient** chains whose simplex images are contained in $B$, and set
$$C_k^{\mathrm{lf}}(\Sigma,B):=C_k^{\mathrm{lf}}(\Sigma)/C_k^{\mathrm{lf}}(\Sigma;B).$$
The face boundary, with all signs equal to plus in $\mathbb Z_2$, is well-defined and locally finite, preserves the $B$-supported subgroup, and induces $\bar\partial^2=0$ on this quotient. Define
$$H_k^{\mathrm{lf}}(\Sigma,B):=\ker\bar\partial_k/\operatorname{im}\bar\partial_{k+1}.$$
For ambient locally finite chains $a,x$ with boundaries supported in $B$, the equality $[a]=[x]$ holds exactly when there is $r\in C_{k+1}^{\mathrm{lf}}(\Sigma)$ with $\partial r+a+x\in C_k^{\mathrm{lf}}(\Sigma;B)$. Changing representatives by quotient boundaries or $B$-supported chains preserves this criterion. Finite ordinary chains are allowed; on compact $\Sigma$ this is precisely the ordinary relative singular chain model.

Here is an explicit meaning of supplied fundamental-chain data. Let $Y\subseteq\Sigma$ be an embedded $n$-manifold with boundary, $n\ge1$. An **ambient locally finite mod-two fundamental chain for $Y$** is a chain $c\in C_n^{\mathrm{lf}}(\Sigma)$ whose simplex maps land in $Y$, whose boundary maps land in $\partial Y$, and which satisfies the following local condition. For each $p\in Y\setminus\partial Y$, retain the finitely many simplices of $c$ whose images contain $p$, obtaining an ordinary finite chain $c_p$ in $Y$. Its class in $H_n(Y,Y\setminus\{p\};\mathbb Z_2)$ is the unique nonzero element. The boundary of $c_p$ avoids $p$, so this class is defined. The local group is $\mathbb Z_2$, without an orientation choice. These are explicit conditions on supplied chains, not an assertion that arbitrary nonproper embeddings push intrinsic locally finite chains into $\Sigma$.

A sufficient construction is as follows. Supply a pure $n$-dimensional ordered-vertex locally finite triangulation of $Y$, with boundary a subcomplex, whose realized simplex maps into $\Sigma$ form a locally finite family. Proper inclusion of a locally finite triangulated $Y$ into $\Sigma$ is sufficient for this ambient condition. Require that each interior codimension-one face has two incident top simplices and each boundary face has one. For every interior point $p$, supply a finite subcomplex neighborhood $N_p$ which is a compact $n$-manifold with boundary, with $p$ in its interior, such that the sum of its parametrized top simplices represents its compact mod-two relative fundamental class. A compact manifold ball or star with its verified relative fundamental chain supplies such a local certificate; no claim about an arbitrary triangulation's local stars is made. Then the sum of **all** top simplices, parametrized in the supplied vertex order, is an ambient locally finite fundamental chain for $Y$. In degree $n-1$, a supplied triangulated $n$-dimensional region with ambient top chain $r$ gives the displayed relative-chain criterion for boundary chains $a,x\in C_{n-1}^{\mathrm{lf}}(\Sigma)$ when $\partial r=a+x+b$ for some $b\in C_{n-1}^{\mathrm{lf}}(\Sigma;B)$ and both $\partial a$ and $\partial x$ lie in $C_{n-2}^{\mathrm{lf}}(\Sigma;B)$. These last conditions make $a$ and $x$ relative cycles, while the displayed decomposition supplies the relative boundary witness. No existence of a triangulation, a region, a chain certificate or an admissible candidate is asserted.

## Statement references

[[def-borel-moore-homology]]

[[def-relative-singular-homology]]

[[def-relative-fundamental-class-and-boundary-orientation]]

## Facts & Assumptions

**Given:** The space, closed subspace, mod-two coefficients and supplied chains; the additional local triangulation and compact certificate hypotheses only in the sufficient-construction clause.

[F1] [[def-borel-moore-homology]] defines locally finite singular sums and their face boundaries on locally compact Hausdorff spaces. Proper maps push such chains forward because inverse images of compact neighborhoods are compact.

[F2] [[def-singular-chain-complex-of-a-pair]], [[lem-singular-boundary-descends-to-relative-chains]] and [[def-relative-singular-homology]] give the quotient-chain and kernel/image construction for ordinary finite chains.

[F3] [[thm-the-singular-boundary-squares-to-zero]] proves face cancellation and $\partial^2=0$ on each finite singular simplex.

[F4] [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]] gives $H_n(Y,Y\setminus\{p\};\mathbb Z_2)\cong\mathbb Z_2$ at interior points. [[def-relative-fundamental-class-and-boundary-orientation]] specifies the compact relative fundamental class by these local generators. Over $\mathbb Z_2$ the nonzero local element is unique, so no sign or orientability choice is needed.

[F5] [[def-simplicial-subcomplex-star-closure-and-link]] defines subcomplexes. In the sufficient construction, local finiteness, the boundary-face incidence counts, the ordered simplex parametrizations and the finite compact relative fundamental-chain certificates are actual supplied hypotheses.

[F6] [[thm-excision-for-singular-homology]] states that inclusion $(T\setminus Z,D\setminus Z)\to(T,D)$ induces relative homology isomorphisms whenever $\overline Z\subseteq\operatorname{int}_T D$.

## Proof

1.1 Fix an ambient locally finite chain $c$. In a neighborhood meeting only finitely many of its simplex images, every contributing face comes from one of that finite list and each parent has finitely many faces. Consequently every coefficient of $\partial c$ is a finite mod-two sum and the resulting chain is locally finite. Applying the boundary twice near any point therefore reduces to finitely many parents; [F3] cancels their codimension-two faces in pairs. Thus $\partial^2c=0$. Every face of a simplex mapping into $B$ still maps into $B$, so the $B$-supported groups form a subcomplex. Hence $[c]\mapsto[\partial c]$ is well-defined on the quotient, squares to zero and supplies the displayed homology groups, by the same quotient argument as [F2]. [given, F1, F2, F3, algebra]

2.1 Relative cycles are exactly chains with boundary supported in $B$. In the quotient, $[a]=[x]$ in homology means $a+x$ is a quotient boundary, which says exactly that $a+x=\partial r+b$ for some ambient locally finite $r$ and some $B$-supported $b$. Over $\mathbb Z_2$ this is the displayed condition. Adding quotient boundaries to $a$ or $x$ merely adds the corresponding chains to $r$; adding $B$-supported chains changes only $b$, proving representative invariance. If $\Sigma$ is compact, finitely many of the neighborhoods in the local-finiteness definition cover it. Their finite union meets every nonzero simplex, so only finitely many nonzero simplex images occur. Thus the ambient groups, their $B$-supported subgroups, boundaries and quotient homology are the ordinary finite ones in [F2]. Every finite chain remains locally finite even when $\Sigma$ is not compact; no assertion that the two homology theories then coincide is needed. [given, F1, F2, step 1.1, algebra]

2.2 For the fundamental-chain local condition, ambient local finiteness makes the list of simplices containing a fixed $p$ finite. Since all their images lie in the embedded subspace $Y$, they are singular simplices of $Y$ itself. Any face whose image contains $p$ comes from a parent containing $p$. Its coefficient in $\partial c_p$ therefore equals its coefficient in $\partial c$. When $p$ is an interior point of $Y$, the latter boundary has no such face, by the stated boundary-support condition. Thus $\partial c_p$ is a finite chain in $Y\setminus\{p\}$, and its ordinary point-local relative class is defined. By [F4] the prescribed nonzero element is unambiguous over $\mathbb Z_2$, regardless of orientability. This establishes a precise, internally consistent local test for the supplied chain data; it does not assume their existence. [given, F1, F2, F4, step 1.1, algebra]

3.1 In the sufficient triangulated construction, parametrize every simplex by listing its vertices in the supplied increasing order. A common face then has literally the same singular parametrization from either incident top simplex. The ambient local-finiteness hypothesis makes the top-simplex sum a chain in $C_n^{\mathrm{lf}}(\Sigma)$. Interior faces occur twice and cancel modulo two, while boundary faces occur once, so its boundary is supported in $\partial Y$. Proper inclusion is sufficient for the required ambient local finiteness by the compact-neighborhood argument in [F1]; it is not imposed on other supplied chains in the general branch. For an interior point $p$, the finite compact certificate $N_p$ contains a neighborhood of $p$. Local finiteness ensures that, after shrinking that neighborhood, no top simplex outside its finite subcomplex meets it: among the finitely many nearby closed simplex images, none outside that subcomplex can contain $p$, because its interior would then approach $p$ from outside the neighborhood contained in $N_p$. Hence the point-local chain obtained from the global sum is exactly the point-local chain of the compact certificate. Its class in $H_n(N_p,N_p\setminus\{p\};\mathbb Z_2)$ is nonzero by the supplied compact relative fundamental-class property and [F4]. Set $Z:=Y\setminus N_p$. Since $N_p$ contains a neighborhood of $p$, $p\notin\overline Z$; since $Y$ is Hausdorff, $Y\setminus\{p\}$ is open. Thus $\overline Z\subseteq\operatorname{int}_Y(Y\setminus\{p\})$. By [F6], inclusion $(N_p,N_p\setminus\{p\})\to(Y,Y\setminus\{p\})$ induces an isomorphism. It sends the certificate class to the global point-local class, which is therefore nonzero. Step 2.2 therefore certifies the entire global top chain as fundamental. For an $n$-dimensional region with $\partial r=a+x+b$, $b$ supported in $B$, and $\partial a,\partial x$ supported in $B$, face cancellation supplies the witness and $a,x$ are relative cycles. Step 2.1 then gives $[a]=[x]$. This proves the sufficient construction without a universal triangulation or candidate-existence theorem. [given, F1, F3, F4, F5, F6, step 2.1, step 2.2, construct, algebra] ∎
