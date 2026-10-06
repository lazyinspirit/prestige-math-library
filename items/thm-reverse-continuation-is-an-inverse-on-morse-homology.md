---
id: thm-reverse-continuation-is-an-inverse-on-morse-homology
kind: theorem
title: "Reverse continuation is an inverse on Morse homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuation-composition-law-on-homology, thm-homotopic-continuation-data-give-chain-homotopic-maps, lem-continuation-map-of-constant-data-is-the-identity, def-continuation-chain-map, def-regular-continuation-datum-between-morse-smale-pairs, def-two-parameter-continuation-homotopy, def-morse-homology-of-a-morse-smale-pair, def-axiom-of-choice]
justified_by: []
dependency_level: 12
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (4)-(6) and the key ideas (1): homotopy invariance, the glue of reparametrized homotopies with the consequences [phi^01] o [phi^10] = [phi^00] = identity, and transversality generic in the path s -> g_s, PDF pp. 92-93"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2, final paragraph: taking the third pair to be the first shows the two continuation maps are inverse, p. 4 of the lecture"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Ch. 8, Theorem 8.1(1)-(3): composition, identity and inverse for the canonical isomorphisms, pp. 71 and 78-79"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.4, conclusion: an interpolation from f_1 to f_0 and the constant interpolation give that the two continuation maps induce mutually inverse isomorphisms, printed pp. 72-73, PDF pp. 82-83"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f_s,g_s)$ be a
regular continuation datum from $(f^-,g^-)$ to $(f^+,g^+)$ on a closed manifold
$M$, and let $(\bar f_s,\bar g_s)$ be a regular continuation datum from
$(f^+,g^+)$ to $(f^-,g^-)$ obtained from the **reversed** family
$(f_{-s},g_{-s})$ by a sufficiently small generic perturbation fixing the two
ends (regular data are residual in the space of paths with fixed ends, as
recorded in the definition); denote the continuation maps by $\Phi$ and
$\bar\Phi$
([[def-continuation-chain-map]],
[[def-regular-continuation-datum-between-morse-smale-pairs]]).

Then
$$[\bar\Phi]\circ[\Phi]=\operatorname{id}_{HM_*(f^-,g^-;\Lambda)},\qquad [\Phi]\circ[\bar\Phi]=\operatorname{id}_{HM_*(f^+,g^+;\Lambda)},$$
so $[\Phi]:HM_*(f^-,g^-;\Lambda)\to HM_*(f^+,g^+;\Lambda)$ is an isomorphism
with inverse $[\bar\Phi]$ ([[def-morse-homology-of-a-morse-smale-pair]]). In
particular the Morse homologies of any two Morse--Smale pairs on a closed
manifold are canonically isomorphic by continuation.

## Facts & Assumptions

**Given:** The Axiom of Choice, a regular continuation datum $(f_s,g_s)$ from $(f^-,g^-)$ to $(f^+,g^+)$, and a regular continuation datum $(\bar f_s,\bar g_s)$ from $(f^+,g^+)$ to $(f^-,g^-)$ obtained by a small generic perturbation, fixing the ends, of the reversed family $(f_{-s},g_{-s})$.

[F1] The reversed family $(\bar f_s^{(0)},\bar g_s^{(0)}):=(f_{-s},g_{-s})$ is a continuation datum from $(f^+,g^+)$ to $(f^-,g^-)$: it is smooth, it equals $(f^+,g^+)$ for $s\le-S$ and $(f^-,g^-)$ for $s\ge S$, and its continuation equation is $\partial_sv=-\nabla^{\bar g^{(0)}_s}\bar f^{(0)}_s(v)$. Reversing the parameter in a solution $u$ of the original equation gives $\frac{d}{ds}\bigl(u(-s)\bigr)=+\nabla^{g_{-s}}f_{-s}\bigl(u(-s)\bigr)$, the positive-gradient equation, so the solutions of the reversed family are not the time reversals of the solutions of the original equation and regularity of the reversed family is a separate condition. When both the function path and the metric path may vary, regular data form a residual set with fixed ends. Thus the reversed family can be perturbed arbitrarily little in both components, fixing its two ends, to a regular datum; the datum $(\bar f_s,\bar g_s)$ of the statement is such a perturbation ([[def-regular-continuation-datum-between-morse-smale-pairs]]).

[F2] The composition law: the composite of the continuation maps along a spliced datum is the homology map of that spliced datum, which is independent of the splicing choices ([[thm-continuation-composition-law-on-homology]], [[def-two-parameter-continuation-homotopy]]).

[F3] The spliced datum for the pair of reverse data from $(f^-,g^-)$ back to $(f^-,g^-)$ is joined by a regular two-parameter family to the constant datum, so the two continuation maps are chain homotopic; the constant datum's continuation map is the identity ([[thm-homotopic-continuation-data-give-chain-homotopic-maps]], [[lem-continuation-map-of-constant-data-is-the-identity]]).

[F4] Chain homotopic maps induce the same map on homology, and the identity on a chain complex induces the identity on homology ([[def-morse-homology-of-a-morse-smale-pair]], [[def-continuation-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] $(\bar f_s,\bar g_s)$ is a regular continuation datum from $(f^+,g^+)$ to $(f^-,g^-)$, so both $\Phi$ and $\bar\Phi$ are well-defined continuation maps and induce maps on Morse homology; the argument below uses only that the two data join the same two end pairs, in opposite directions. [F1, given]

2.1 Apply the composition law of [F2] to the pair $(\Phi,\bar\Phi)$ in the order from $(f^-,g^-)$ to $(f^+,g^+)$ and back: there is a regular spliced datum from $(f^-,g^-)$ to itself whose homology map equals $[\bar\Phi]\circ[\Phi]$. [F2, step 1.1]

3.1 Applying [F3] to that spliced datum connects it by a regular two-parameter family to the constant datum; hence $[\bar\Phi]\circ[\Phi]$ equals the homology map of the constant datum, which is the identity. This gives the first identity. [F3, step 2.1]

4.1 The same argument with the roles of the two pairs exchanged gives $[\Phi]\circ[\bar\Phi]=\operatorname{id}_{HM_*(f^+,g^+;\Lambda)}$; the two identities together say that $[\Phi]$ is an isomorphism with inverse $[\bar\Phi]$, which is the last assertion. [F4, step 3.1] ∎
