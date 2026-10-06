---
id: thm-the-kernel-map-is-a-homeomorphism-onto-the-primitive-ideal-space
kind: theorem
title: The induced kernel map on weak equivalence classes is a homeomorphism
deps:
  - def-unitary-dual-of-a-locally-compact-group
  - def-primitive-ideal-space-of-a-group-c-star-algebra
  - def-fell-topology-on-the-unitary-dual
  - def-weak-containment-of-unitary-representations
  - def-hilbert-direct-sum-of-unitary-representations
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - thm-weak-containment-is-equivalent-to-kernel-inclusion
  - lem-irreducible-weak-containment-in-a-family-selects-one-coefficient
  - def-quotient-topology
  - thm-quotient-universal-property
  - def-axiom-of-choice
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the representation correspondence, the weak-containment suppliers and the family-selection lemma; the closure, continuity and quotient arguments add no further choice."
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Propositions 8.B.3–8.B.4 and Remark 8.B.6 (statements and comparison; source refers to Dixmier and Folland for proofs)"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Theorem F.4.4 and the discussion of the Jacobson topology"
    - title: "J. M. G. Fell, The dual spaces of C*-algebras (Transactions of the American Mathematical Society 94, 1960)"
      url: "https://www.ams.org/journals/tran/1960-094-03/S0002-9947-1960-0146681-0/S0002-9947-1960-0146681-0.pdf"
      locator: "Attribution only: the general C*-algebra duality results are not consumed; the local closure identity is proved here from the listed suppliers"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group,
$\kappa:\widehat G\to\operatorname{Prim}(C^*(G))$ the kernel map
$\kappa([\pi])=\ker_{C^*(G)}\pi$ of
[[def-primitive-ideal-space-of-a-group-c-star-algebra]], the unitary dual
$\widehat G$ carrying the Fell topology
([[def-fell-topology-on-the-unitary-dual]]) and
$\operatorname{Prim}(C^*(G))$ the Jacobson topology. Then $\kappa$ is
continuous and surjective, its fibres are exactly the weak equivalence classes
of irreducible representations
([[thm-weak-containment-is-equivalent-to-kernel-inclusion]]), and the induced
bijection
$$\bar\kappa:\widehat G/{\sim}\ \longrightarrow\ \operatorname{Prim}(C^*(G))$$
from the set of weak equivalence classes with the quotient Fell topology to
the primitive ideal space is a homeomorphism.

## Facts & Assumptions

**Given:** AC; an LCH group $G$; the unitary dual $\widehat G$; the kernel map $\kappa$; the Fell and Jacobson topologies.

[F1] $\widehat G$ is the set of unitary equivalence classes of irreducible strongly continuous unitary representations; $C^*\!\ker\pi$ denotes the kernel in $C^*(G)$, and primitive ideals and the kernel map are as defined in [[def-primitive-ideal-space-of-a-group-c-star-algebra]] ([[def-unitary-dual-of-a-locally-compact-group]]).

[F2] Representations of $G$ correspond bijectively to nondegenerate star-representations of $C^*(G)$, preserving unitary equivalence and irreducibility; the kernel of the direct sum $\widehat\bigoplus_{\sigma\in S}\sigma$ is $\bigcap_{\sigma\in S}\ker\sigma$ ([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]], [[def-hilbert-direct-sum-of-unitary-representations]]).

[F3] Weak containment and kernel inclusion are equivalent, and for irreducible classes equality of kernels is the same as mutual weak containment; hence the fibres of $\kappa$ are the weak equivalence classes ([[thm-weak-containment-is-equivalent-to-kernel-inclusion]], [[def-weak-containment-of-unitary-representations]]).

[F4] The Jacobson topology has as its closed sets the $h(J)=\{I\in\operatorname{Prim}(C^*(G)):I\supseteq J\}$ for closed two-sided ideals $J$; the closure of a subset $T$ is $h\bigl(\bigcap_{I\in T}I\bigr)$, with $\bigcap_{I\in\varnothing}I=C^*(G)$ and $h(C^*(G))=\varnothing$ because every irreducible representation is nonzero ([[def-primitive-ideal-space-of-a-group-c-star-algebra]]).

[F5] Fell basis: a basic neighbourhood of $[\pi]$ consists of the classes admitting coefficient approximations to finitely many functions of positive type associated to $\pi$, uniformly on a compact set, within $\epsilon$ ([[def-fell-topology-on-the-unitary-dual]]).

[F6] Family selection: if $\pi$ is irreducible, $\pi\prec\widehat\bigoplus_{s\in S}\rho_s$ for a family of nonzero unitary representations, then for all finitely many vectors of $H_\pi$, every compact $Q$ and $\epsilon>0$ there are a single $s$ and vectors in $H_{\rho_s}$ approximating the corresponding coefficients within $\epsilon$ on $Q$ ([[lem-irreducible-weak-containment-in-a-family-selects-one-coefficient]]).

[F7] For a surjection $q:X\to Y$ with $Y$ carrying the quotient topology, a map $f:Y\to Z$ is continuous if and only if $f\circ q$ is continuous; closedness of $g:X\to Z$ passes to the induced map on the quotient when the quotient map is surjective ([[def-quotient-topology]], [[thm-quotient-universal-property]]).

[F8] Weak containment $\pi\prec\rho$ means that every function of positive type associated to $\pi$ is a compact-uniform limit of finite sums of functions of positive type associated to $\rho$ ([[def-weak-containment-of-unitary-representations]]).

## Proof

**Proof technique:** direct.

**Given:** AC, an LCH group $G$, its unitary dual with the Fell topology and $\operatorname{Prim}(C^*(G))$ with the Jacobson topology.

1.1 $\kappa$ is well defined, surjective, and its fibres are the weak equivalence classes. If $[\pi]=[\rho]$ then $\pi$ and $\rho$ are unitarily equivalent, hence have equal kernels, so $\kappa$ is well defined. A primitive ideal is by definition the kernel of an irreducible nondegenerate star-representation of $C^*(G)$; by [F2] it is the kernel of the extension of an irreducible unitary representation $\pi$ of $G$, so it equals $\kappa([\pi])$, proving surjectivity. Finally $\kappa([\pi])=\kappa([\rho])$ means $\ker\pi=\ker\rho$, which by [F3] is equivalent to $\pi\sim\rho$. [F1, F2, F3]

1.2 If $\pi\in\overline S$ for $S\subseteq\widehat G$, then $\pi\prec\widehat\bigoplus_{\sigma\in S}\sigma$. Every standard Fell neighbourhood of $\pi$ meets $S$ by definition of the closure [F5]; given a function of positive type $\phi$ associated to $\pi$, a compact $Q$ and $\epsilon>0$, the neighbourhood $W(\pi;\phi,Q,\epsilon)$ contains some $\sigma\in S$, so $\phi$ is within $\epsilon$ on $Q$ of a finite sum of functions of positive type associated to $\sigma$, hence of a finite sum of functions of positive type associated to the direct sum; this is the defining approximation for weak containment [F8]. (For $S=\varnothing$ the hypothesis $\pi\in\overline S$ is false, so there is nothing to prove.) [F5, F8]

1.3 If $\pi\prec\widehat\bigoplus_{\sigma\in S}\sigma$ for $S\subseteq\widehat G$, then $\pi\in\overline S$. Apply [F6] to the family of representatives of the classes in $S$ and to each standard test: for finitely many tested single coefficients $\phi_i(g)=\langle\pi(g)\xi_i,\xi_i\rangle$, compact $Q$ and $\epsilon>0$, the simultaneous selection yields a single $s\in S$ and vectors $\eta_i\in H_{\sigma_s}$ with $\sup_Q|\phi_i(g)-\langle\sigma_s(g)\eta_i,\eta_i\rangle|<\epsilon$. Each approximating coefficient is an allowed one-term sum; hence $\sigma_s$ lies in the tested neighbourhood and every Fell neighbourhood of $\pi$ meets $S$. (When $S=\varnothing$ the weak containment $\pi\prec0$ is impossible, since it would force the kernel $C^*(G)$ of the zero representation into $\ker\pi$ and $\pi=0$, contrary to irreducibility.) [F2, F3, F5, F6]

2.1 Closure identity: for every $S\subseteq\widehat G$, $\overline S=\kappa^{-1}\bigl(\overline{\kappa(S)}^{\mathrm{Jac}}\bigr)$. By steps 1.2 and 1.3, $\overline S=\{\pi:\pi\prec\widehat\bigoplus_{\sigma\in S}\sigma\}$; by [F3] and the kernel computation of [F2], $\pi\prec\widehat\bigoplus_{\sigma\in S}\sigma$ is equivalent to $\bigcap_{\sigma\in S}\kappa(\sigma)\subseteq\kappa(\pi)$; and by [F4] the set of primitive ideals containing $\bigcap_{\sigma\in S}\kappa(\sigma)$ is exactly the Jacobson closure of $\kappa(S)$ (for $S=\varnothing$ both sides are empty, since $\bigcap_{\varnothing}=C^*(G)$ and no primitive ideal contains $C^*(G)$, by [F4], while $\overline\varnothing=\varnothing$). [F2, F3, F4, step 1.2, step 1.3]

3.1 $\kappa$ is continuous. Let $D\subseteq\operatorname{Prim}(C^*(G))$ be Jacobson closed and put $S:=\kappa^{-1}(D)$. Then $\kappa(S)=D$ by the surjectivity of step 1.1, so by step 2.1 $\overline S=\kappa^{-1}\bigl(\overline{D}^{\mathrm{Jac}}\bigr)=\kappa^{-1}(D)=S$; hence $\kappa^{-1}(D)$ is Fell closed and $\kappa$ is continuous. [step 1.1, step 2.1]

3.2 $\kappa$ is closed. Let $S\subseteq\widehat G$ be Fell closed, so $\overline S=S$; by step 2.1, $S=\kappa^{-1}\bigl(\overline{\kappa(S)}^{\mathrm{Jac}}\bigr)$, and applying the surjective $\kappa$ to both sides gives $\kappa(S)=\kappa\bigl(\kappa^{-1}\bigl(\overline{\kappa(S)}^{\mathrm{Jac}}\bigr)\bigr)=\overline{\kappa(S)}^{\mathrm{Jac}}$ by step 1.1; hence $\kappa(S)$ is Jacobson closed. [step 1.1, step 2.1]

4.1 The induced bijection is a homeomorphism. The fibres of $\kappa$ are the weak equivalence classes by step 1.1, so $\kappa$ induces a bijection $\bar\kappa$ from the set of classes, equipped with the quotient Fell topology along $q:\widehat G\to\widehat G/{\sim}$, onto $\operatorname{Prim}(C^*(G))$. Since $\kappa=\bar\kappa\circ q$ is continuous by step 3.1, the universal property of the quotient topology [F7] makes $\bar\kappa$ continuous. If $E\subseteq\widehat G/{\sim}$ is closed, then $q^{-1}(E)$ is Fell closed by definition of the quotient topology and $\bar\kappa(E)=\kappa(q^{-1}(E))$ (as $q$ is surjective) is Jacobson closed by step 3.2; hence $\bar\kappa$ is a continuous closed bijection, that is, a homeomorphism. [F7, step 1.1, step 3.1, step 3.2]

5.1 The Axiom of Choice is inherited from the representation correspondence, the weak-containment suppliers and the family-selection lemma; the closure identity, the topology argument and the quotient identification add no further choice ([[def-axiom-of-choice]]). [given] ∎ 
