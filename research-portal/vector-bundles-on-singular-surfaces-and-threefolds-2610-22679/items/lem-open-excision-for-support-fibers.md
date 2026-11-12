---
id: lem-open-excision-for-support-fibers
kind: lemma
title: Open excision for a descent theory
status: published
domain: mathematics
deps:
  - def-supported-complex-indexing
  - def-stable-spectra-interface
  - math:def-scheme
  - math:def-axiom-of-choice
dependency_roles:
  def-supported-complex-indexing: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct-proof
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 12
---

## Statement
For the spectrum-valued assertion, assume the Axiom of Choice and the fixed universe and smallness conventions of the stable spectra interface. The explicit cochain-complex assertion uses only the supplied complexes and maps.

Let $X$ be a scheme, $T\subseteq X$ a closed subset, $W\subseteq X$ an open subset containing $T$, $U=X\setminus T$, and $V=W\cap U=W\setminus T$. Suppose a contravariant spectrum-valued theory $E$ is defined on these four opens, with coherent restriction maps, and that its restriction square
$$\begin{matrix} E(X)&\longrightarrow&E(W)\\ \downarrow&&\downarrow\\ E(U)&\longrightarrow&E(V) \end{matrix}$$
is homotopy cartesian: the induced map $E(X)\to E(W)\times_{E(V)}E(U)$ is an equivalence, where the product is a homotopy pullback. Define $E_T(X)=\operatorname{fib}(E(X)\to E(U))$ and $E_T(W)=\operatorname{fib}(E(W)\to E(V))$. Restriction induces an equivalence $E_T(X)\simeq E_T(W)$. It is natural for compatible maps of such coherent squares, and the square formed by the support-to-global maps and restriction to $W$ commutes coherently.

The same conclusion holds for cochain complexes of abelian groups, with equivalence replaced by quasi-isomorphism, under the following explicit form of two-open descent. Write $A=C(X)$, $B=C(W)$, $C=C(U)$, and $D=C(V)$, and suppose the restriction square is strictly commutative. If $u:B\to D$ and $v:C\to D$ are its lower restriction maps, require the canonical map
$$A\longrightarrow P:=\operatorname{fib}\bigl(B\oplus C\xrightarrow{u-v}D\bigr),\qquad a\longmapsto (a|_W,a|_U,0),$$
to be a quasi-isomorphism, using the explicit fiber complex specified in [F2]. Then restriction induces a quasi-isomorphism $C_T(X)\to C_T(W)$, compatible with the support-to-global maps and natural for maps of such squares. In particular it induces isomorphisms on supported cohomology in every degree. A quasi-isomorphism is a cochain map inducing isomorphisms on all cohomology groups.

These are conditional excision statements: a particular theory must supply the indicated restriction data and descent hypothesis, as well as any quasi-compactness, size, or other conditions required for that hypothesis. No descent property is asserted merely from the existence of a support fiber.

## Statement references

[[math:def-scheme]]

[[def-stable-spectra-interface]]

[[def-supported-complex-indexing]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The opens and either a coherent spectrum square or a strictly commutative cochain-complex square as in the statement, satisfying the corresponding displayed descent hypothesis, with the stated spectral foundations when using spectra.

**Goal:** Prove the restriction equivalence or quasi-isomorphism of support fibers and its stated compatibility and naturality.

[F1] In the stable spectra interface, fibers and products over a common object are coherent homotopy pullbacks, characterized by their universal properties. [[def-stable-spectra-interface]]

[F2] For a cochain map $f:M\to N$, the support-fiber model has degree-$n$ group $M^n\oplus N^{n-1}$ and differential $(m,n)\mapsto(d_Mm,f(m)-d_Nn)$. A commutative square of cochain maps induces a map of these fibers, and if its two vertical maps are quasi-isomorphisms then so is the induced map on fibers. The support-to-global map is projection to the first factor. [[def-supported-complex-indexing]]

[F3] Schemes, including their underlying topological spaces, are as in [[math:def-scheme]]. The closed subset, open neighbourhood, complements and intersection in the Statement refer to that underlying topology; no scheme-theoretic structure on the closed subset is used.

[A1] The spectrum-valued assertion uses the assumed [[math:def-axiom-of-choice]] and the fixed universe and smallness conventions of [[def-stable-spectra-interface]]. These are the foundations of the supplied coherent spectra and pullbacks in [F1]. The cochain-complex assertion uses only the explicit complex, cohomology and cochain-homotopy conventions in [F2], without invoking derived sections or spectral realization.

## Proof

**Proof technique:** Paste homotopy pullbacks for spectra; for complexes, compare the explicit descent model with the fiber over the target complex and give a split contraction.

1.1 Use the opens of [F3]. In the spectrum case, under [A1], the descent hypothesis identifies $E(X)$ with $E(W)\times_{E(V)}E(U)$, compatibly with its two projections. Taking the homotopy pullback of the projection to $E(U)$ along $0\to E(U)$ gives $E_T(X)\simeq (E(W)\times_{E(V)}E(U))\times_{E(U)}0\simeq E(W)\times_{E(V)}0=E_T(W)$. The middle equivalence follows by the universal property of homotopy pullbacks: a map into either side is a map into $E(W)$ together with a coherent nullhomotopy of its composite to $E(V)$. This is the restriction-induced equivalence. The universal property makes it natural for compatible maps of coherent squares. Its projection to $E(W)$ is the composite of the projection $E_T(X)\to E(X)$ with restriction $E(X)\to E(W)$, coherently as part of the pullback diagram. This gives the required support-to-global compatibility. [F1, F3, A1, given]

2.1 For complexes, let $q:A\to P$ be the descent quasi-isomorphism and $p:P\to C$ the projection. The equality $pq=A\to C$ gives a commutative square with vertical maps $q$ and $\operatorname{id}_C$. By [F2], its map $\operatorname{fib}(A\to C)\to\operatorname{fib}(P\to C)$ is a quasi-isomorphism. Write an element of $\operatorname{fib}(P\to C)^n$ as $(b,c,z,t)$ in $B^n\oplus C^n\oplus D^{n-1}\oplus C^{n-1}$. Its differential is $\delta(b,c,z,t)=(d_Bb,d_Cc,u(b)-v(c)-d_Dz,c-d_Ct)$. Define $r(b,c,z,t)=(b,z+v(t))$ in $\operatorname{fib}(B\to D)^n$. This is a cochain map, since the second component after applying $r\delta$ is $u(b)-d_D(z+v(t))$. It is split surjective as a cochain map with section $s(b,z)=(b,0,z,0)$. Its kernel consists of $(0,c,-v(t),t)$, so identifies with $\operatorname{fib}(\operatorname{id}_C)$ with differential $(c,t)\mapsto(d_Cc,c-d_Ct)$. The degree-minus-one map $h(c,t)=(t,0)$ satisfies $dh+hd=\operatorname{id}$ on this kernel. More explicitly, on the whole source let $H(b,c,z,t)=(0,t,0,0)$; direct substitution gives $\delta H+H\delta=\operatorname{id}-sr$, while $rs=\operatorname{id}$. Hence $r$ and $s$ induce inverse cohomology maps: cochain-homotopic maps agree on cohomology because their difference on a cocycle is a coboundary. Thus $r$ is a quasi-isomorphism. The composite with the map induced by $q$ sends $(a,t)$ to $(a|_W,v(t))$, exactly restriction between the support-fiber models. It is a quasi-isomorphism, commutes strictly with the support-to-global projections and restriction $A\to B$, and is natural for maps of the given strictly commutative squares. Taking cohomology gives the claimed isomorphisms in every degree. Together with step 1.1 this proves both conditional assertions. [F2, F3, given, construct, algebra, step 1.1] ∎
