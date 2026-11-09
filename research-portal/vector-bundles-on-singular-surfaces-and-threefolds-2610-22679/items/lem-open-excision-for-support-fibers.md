---
id: lem-open-excision-for-support-fibers
kind: lemma
title: Open excision for a descent theory
status: published
domain: mathematics
deps:
  - def-supported-complex-indexing
  - def-stable-spectra-interface
dependency_roles:
  def-supported-complex-indexing: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
proof_strategy: direct-proof
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 13
---

## Statement
Let $X$ be a scheme, $T\subseteq X$ a closed subset, $W\subseteq X$ an open subset containing $T$, $U=X\setminus T$, and $V=W\cap U=W\setminus T$. Suppose a contravariant spectrum-valued theory $E$ is defined on these four opens, with coherent restriction maps, and that its restriction square
$$\begin{matrix} E(X)&\longrightarrow&E(W)\\ \downarrow&&\downarrow\\ E(U)&\longrightarrow&E(V) \end{matrix}$$
is homotopy cartesian: the induced map $E(X)\to E(W)\times_{E(V)}E(U)$ is an equivalence, where the product is a homotopy pullback. Define $E_T(X)=\operatorname{fib}(E(X)\to E(U))$ and $E_T(W)=\operatorname{fib}(E(W)\to E(V))$. Restriction induces an equivalence $E_T(X)\simeq E_T(W)$. It is natural for compatible maps of such coherent squares, and the square formed by the support-to-global maps and restriction to $W$ commutes coherently.

The same conclusion holds for cochain complexes of abelian groups, with equivalence replaced by quasi-isomorphism, under the following explicit form of two-open descent. Write $A=C(X)$, $B=C(W)$, $C=C(U)$, and $D=C(V)$, and suppose the restriction square is strictly commutative. If $u:B\to D$ and $v:C\to D$ are its lower restriction maps, require the canonical map
$$A\longrightarrow P:=\operatorname{fib}\bigl(B\oplus C\xrightarrow{u-v}D\bigr),\qquad a\longmapsto (a|_W,a|_U,0),$$
to be a quasi-isomorphism, using the explicit fiber complex of [[def-supported-complex-indexing]]. Then restriction induces a quasi-isomorphism $C_T(X)\to C_T(W)$, compatible with the support-to-global maps and natural for maps of such squares. In particular it induces isomorphisms on supported cohomology in every degree. A quasi-isomorphism is a cochain map inducing isomorphisms on all cohomology groups.

These are conditional excision statements: a particular theory must supply the indicated restriction data and descent hypothesis, as well as any quasi-compactness, size, or other conditions required for that hypothesis. No descent property is asserted merely from the existence of a support fiber.

## Facts & Assumptions

**Given:** The opens and either a coherent spectrum square or a strictly commutative cochain-complex square as in the statement, satisfying the corresponding displayed descent hypothesis.

**Goal:** Prove the restriction equivalence or quasi-isomorphism of support fibers and its stated compatibility and naturality.

[F1] In the stable spectra interface, fibers and products over a common object are coherent homotopy pullbacks, characterized by their universal properties. [[def-stable-spectra-interface]]

[F2] For a cochain map $f:M\to N$, the support-fiber model has degree-$n$ group $M^n\oplus N^{n-1}$ and differential $(m,n)\mapsto(d_Mm,f(m)-d_Nn)$. A commutative square of cochain maps induces a map of these fibers, and if its two vertical maps are quasi-isomorphisms then so is the induced map on fibers. The support-to-global map is projection to the first factor. [[def-supported-complex-indexing]]

## Proof

**Proof technique:** Paste homotopy pullbacks for spectra; for complexes, compare the explicit descent model with the fiber over the target complex.

1.1 In the spectrum case, the descent hypothesis identifies $E(X)$ with $E(W)\times_{E(V)}E(U)$, compatibly with its two projections. Taking the homotopy pullback of the projection to $E(U)$ along $0\to E(U)$ gives $E_T(X)\simeq (E(W)\times_{E(V)}E(U))\times_{E(U)}0 \simeq E(W)\times_{E(V)}0=E_T(W).$ The middle equivalence follows by the universal property of the homotopy pullback: a map into either side is a map into $E(W)$ together with a coherent nullhomotopy of its composite to $E(V)$. The displayed equivalence is the one induced by restriction. [F1, given]

2.1 The same universal property makes this construction natural for compatible maps of the coherent squares. Its projection to $E(W)$ is the composite of the projection $E_T(X)\to E(X)$ with restriction $E(X)\to E(W)$, with the coherence inherited from the pullback diagram. This proves the support-to-global compatibility. [F1, step 1.1]

3.1 In the complex case, let $q:A\to P$ be the descent quasi-isomorphism and let $p:P\to C$ be projection. The equality $pq=A\to C$ gives a commutative square with vertical maps $q$ and $\operatorname{id}_C$. By [F2], it induces a quasi-isomorphism $\operatorname{fib}(A\to C)\to\operatorname{fib}(P\to C)$. [F2, given, step 2.1]

4.1 Write an element of $\operatorname{fib}(P\to C)^n$ as $(b,c,d,t)$, with $b\in B^n$, $c\in C^n$, $d\in D^{n-1}$ and $t\in C^{n-1}$. Its differential is $(db,dc,ub-vc-dd,c-dt),$ where each $d$ on the right denotes the differential of the appropriate complex. The map $(b,c,d,t)\longmapsto(b,d+vt)$ to $\operatorname{fib}(B\to D)$ is a cochain map: the second component of the differential becomes $ub-d_D(d+vt)$. It is split surjective as a cochain map, with section $(b,z)\mapsto(b,0,z,0)$. [F2, given, construct, step 3.1]

5.1 Its kernel consists of $(0,c,-vt,t)$ and is isomorphic to $\operatorname{fib}(\operatorname{id}_C)$, with differential $(c,t)\mapsto(dc,c-dt)$. This kernel is contractible: the degree-minus-one map $(c,t)\mapsto(t,0)$ satisfies $dh+hd=\operatorname{id}$. Hence the split surjective map in step 4.1 is a quasi-isomorphism. [step 4.1, construct]

6.1 The composite of the maps in steps 3.1 and 4.1 sends $(a,t)$ to $(a|_W,t|_V)$, exactly the restriction map between the two support-fiber models. It is therefore a quasi-isomorphism. The formula also shows that it commutes strictly with projection to $A$ and $B$ and is natural for maps of the given commutative squares. Taking cohomology gives the stated supported-cohomology isomorphisms. [F2, step 3.1, step 5.1]

7.1 Steps 1.1–2.1 and 3.1–6.1 establish both forms of open excision under their respective descent hypotheses. [step 2.1, step 6.1] ∎
