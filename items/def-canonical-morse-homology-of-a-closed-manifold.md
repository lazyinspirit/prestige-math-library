---
id: def-canonical-morse-homology-of-a-closed-manifold
kind: definition
title: "Canonical Morse homology of a closed manifold"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morse-homology-of-a-morse-smale-pair, cor-every-compact-smooth-manifold-admits-an-excellent-morse-function, thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function, prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold, thm-continuation-composition-law-on-homology, thm-reverse-continuation-is-an-inverse-on-morse-homology, thm-homotopic-continuation-data-give-chain-homotopic-maps, def-morse-smale-pair, def-axiom-of-choice]
justified_by: []
dependency_level: 13
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 4 Sec. 4.1 (the notation for the data-independent homology) and Ch. 3 Sec. 3.4 (independence of function and field), printed pp. 71-78 and 83-85, PDF pp. 81-88 and 93-95"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Ch. 8, Theorem 8.1: after defining the maps and their inverses one may denote the groups by H_*(M), pp. 78-80"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2, conclusion: H_*(X,f,g) is independent of the Morse--Smale pair, p. 4 of the lecture"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed
smooth manifold and $\Lambda=\mathbb Z/2$ or $\mathbb Z$. Choose an excellent
Morse function $f:M\to\mathbb R$
([[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]])
and a Riemannian metric $g$ for which $(f,g)$ is Morse--Smale
([[thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function]];
equivalently use
[[prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold]]
and the perturbation theorem for gradient-like fields,
[[def-morse-smale-pair]]). In the integral branch, also choose a positive ray in the
orientation line at each critical point, as required by
[[def-morse-homology-of-a-morse-smale-pair]]. Define the **canonical Morse homology**
$$HM_k(M;\Lambda):=HM_k(f,g;\Lambda)$$
([[def-morse-homology-of-a-morse-smale-pair]]).

For two Morse--Smale pairs $(f_0,g_0)$ and $(f_1,g_1)$ the regular
continuation maps give isomorphisms
$HM_k(f_0,g_0;\Lambda)\to HM_k(f_1,g_1;\Lambda)$ that are independent of the
chosen regular continuation datum
([[thm-homotopic-continuation-data-give-chain-homotopic-maps]]), with
identity and composition laws
([[thm-continuation-composition-law-on-homology]]) and inverses given by the
reverse continuation ([[thm-reverse-continuation-is-an-inverse-on-morse-homology]]).
Hence the chosen pair determines $HM_*(M;\Lambda)$ only up to a canonical
isomorphism, and the notation is unambiguous in that sense; taking homology of a supplied finite complex makes no further choice,
while existence of the pairs, the moduli-space finiteness, and the
continuation comparisons use the stated Axiom of Choice in both coefficient
branches.
