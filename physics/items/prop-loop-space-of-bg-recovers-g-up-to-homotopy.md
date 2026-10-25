---
id: prop-loop-space-of-bg-recovers-g-up-to-homotopy
kind: proposition
title: The based loop space of BG recovers G weakly
status: published
origin: pipeline
deps: ["thm-milnor-join-model-is-a-contractible-free-g-space", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration", "thm-whitehead-theorem", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Section 8.6, Theorem 8.22 and the extended fiber-sequence discussion, printed pages 217--218
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 19, Theorem 19.1 and the classifying-space discussion, printed pages 62--63
---

## Statement

Assume AC. For a well-pointed topological group $G$ of CW type, path lifting
in Milnor's bundle gives a continuous based endpoint-label map

$$ \varepsilon:\Omega BG\longrightarrow G. $$

Put $\delta=\operatorname{inv}\circ\varepsilon$. Under the canonical
identification $\pi_k(\Omega BG)\cong\pi_{k+1}(BG)$, the maps induced by
$\delta$ are the connecting homomorphisms of Milnor's bundle; on components
they give its connecting pointed-set map. Both $\varepsilon$ and $\delta$ are
weak homotopy equivalences. If $G$ and $\Omega BG$ have CW type, they are based
homotopy equivalences. Thus a chosen homotopy inverse $G\to\Omega BG$ exists
under those stronger hypotheses. No point-set connecting map independent of
the chosen lifting function is asserted.

## Facts & Assumptions

[F1] Milnor's $EG\to BG$ is a numerable principal bundle and $EG$ is contractible ([[thm-milnor-join-model-is-a-contractible-free-g-space]]).

[F2] Assuming AC, a numerable bundle is a Hurewicz fibration, so its lifting function gives a continuous endpoint map on based loops ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).

[F3] The fibration long exact sequence includes $\pi_{k+1}(BG)\to\pi_k(G)\to\pi_k(EG)$ for $k\geq1$ and the exact component segment $\pi_1(EG)\to\pi_1(BG)\to\pi_0(G)\to\pi_0(EG)$. Its boundary is computed by choosing a lift ending at the basepoint and restricting to the opposite face; the resulting class is independent of the lift. Under the library convention its component boundary is the inverse of the forward endpoint label ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F4] Assuming AC, Whitehead promotes a weak equivalence between CW models to a homotopy equivalence ([[thm-whitehead-theorem]]).

[F5] Inversion $g\mapsto g^{-1}$ is a based homeomorphism of a topological group.

[A1] AC is used by the lifting-function and Whitehead suppliers, and nowhere else in this argument ([[def-axiom-of-choice]]).

## Proof

**Given:** The Milnor bundle, based by $e_0\mapsto b_0$ and with its fiber identified by $g\mapsto e_0g$, and [A1].

1.1 By [A1, F1, F2], lift a loop $\gamma$ from $e_0$. Its endpoint lies in $p^{-1}(b_0)$ and is uniquely $e_0g$; define $\varepsilon(\gamma)=g$ and $\delta(\gamma)=g^{-1}$. The lifting function is continuous and sends the constant loop to $e_0$, so both maps are continuous and based. The exact AC expenditure is the well-ordering used by [F2] to construct the lifting function for a numerable bundle. [A1, F1, F2, F5]

2.1 We compare the chosen map $\delta$ with the class-level boundary in [F3]. Let a based $S^k$-family of loops be given. The lifting function produces a continuous family $\widetilde\gamma_s$ starting at $e_0$ and ending at $e_0\varepsilon(\gamma_s)$. Right-translate the whole $s$-th lift by $\varepsilon(\gamma_s)^{-1}$. The translated family still covers $\gamma_s$, now ends at $e_0$, and its initial face is $e_0\delta(\gamma_s)$. This is precisely the lift-and-restrict representative used to define the connecting homomorphism in [F3]. Hence, for every $k\geq1$, $\delta_*$ agrees with the connecting homomorphism after $\pi_k(\Omega BG)\cong\pi_{k+1}(BG)$; the same argument for a single loop gives the asserted map on components. Notice that this compares induced classes, not two point-set maps obtained from unrelated lifting choices. [F1, F2, F3, step 1.1]

3.1 Contractibility gives $\pi_j(EG)=0$ for every $j\geq1$ and one component. Exactness in [F3] therefore makes [F1, F3, step 2.1]

$$ \delta_*:\pi_k(\Omega BG)\cong\pi_{k+1}(BG)\longrightarrow\pi_k(G) $$

an isomorphism for every $k\geq1$, while the component segment makes $\delta_*:\pi_0(\Omega BG)\to\pi_0(G)$ a bijection. Repeating the translated-lift comparison of Step 2.1 after rebasing at a representative loop gives the same isomorphisms at every basepoint. Thus $\delta$ is a weak homotopy equivalence. By [F5], $\varepsilon=\operatorname{inv}\circ\delta$ is one as well. [F1, F3, F5, step 2.1]

4.1 If both spaces have CW type, choose based CW models under [A1]. The induced comparison of models is weak by Step 3.1, so [F4] supplies a based homotopy inverse; transporting it through the model equivalences makes $\delta$ a based homotopy equivalence. Composing with inversion gives the same conclusion for $\varepsilon$. Besides the lifting-function use in Step 1.1, AC is spent here exactly through [F4]. Without those CW-type hypotheses, only the proved weak equivalences are asserted. $\square$ [A1, F4, F5, step 3.1]
