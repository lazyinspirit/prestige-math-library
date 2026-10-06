---
id: cex-an-hone-atom-need-not-be-smooth
kind: counterexample
title: "An $H^1$ atom need not be smooth or continuous"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-hp-atom-with-moment-order, def-multidimensional-rectangle-and-volume, thm-lebesgue-measure-of-a-box-of-every-kind, def-continuous-map-top, def-countable-choice]
justified_by: []
aliases: []
landmark: false
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Definition 7.34 and the discussion before Proposition 7.35, printed p. 40: atoms are $L^2$ functions with no regularity hypothesis"
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 2, pp. 17-18: continuous atoms are a strictly smaller class used only to repair the $q=\\infty$ extension theorem"
verification:
  precheck: pass
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]). The claim refuted is that every $(1,\infty,0)$-atom is continuous (or smooth).
Let $Q\subseteq\mathbb R^n$ be a nondegenerate closed axis-parallel cube and let
$Q^+,Q^-$ be the two halves of $Q$ cut by a coordinate hyperplane through the
centre $c_Q$ of $Q$; write
$$a=|Q|^{-1}\bigl(\mathbf 1_{Q^+}-\mathbf 1_{Q^-}\bigr).$$
Then $a$ is a $(1,\infty,0)$-atom
([[def-hp-atom-with-moment-order]]) but is discontinuous at every point of the
relative interior of the cutting slice $Q\cap H$, where $H$ is that hyperplane, so no continuity or smoothness may
be assumed of a general atom.

## Facts & Assumptions

**Given:** Countable Choice and $n\ge1$, a nondegenerate closed axis-parallel cube $Q$ with centre $c_Q$ and volume $|Q|$, the halving hyperplane $H=\{x:x_0=c_{Q,0}\}$ through the centre, and the sets $Q^+=Q\cap\{x_0>c_{Q,0}\}$, $Q^-=Q\cap\{x_0<c_{Q,0}\}$.

[L1] A $(1,\infty,0)$-atom is a measurable $a$ with $\operatorname{supp}a\subseteq Q$, $|a|\le|Q|^{-1}$ a.e. and $\int a=0$; no regularity is required ([[def-hp-atom-with-moment-order]]).

[F1] $Q^\pm$ are axis-parallel boxes each of volume $|Q|/2$, and $Q$ is the disjoint union of $Q^+$, $Q^-$ and $Q\cap H$ up to a Lebesgue-null set; consequently $\int_{Q^\pm}\mathbf 1=|Q|/2$ ([[def-multidimensional-rectangle-and-volume]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F2] A function $g:\mathbb R^n\to\mathbb C$ is continuous at $z$ if and only if for every neighbourhood $V$ of $g(z)$ there is a neighbourhood $U$ of $z$ with $g[U]\subseteq V$ ([[def-continuous-map-top]]).



The witness is $a=|Q|^{-1}(\mathbf 1_{Q^+}-\mathbf 1_{Q^-})$.

## Counterexample

**Proof technique:** direct.

1.1 **$a$ is a $(1,\infty,0)$-atom.** Clearly $\operatorname{supp}a\subseteq Q$ and $|a|\le|Q|^{-1}$ almost everywhere. For the zeroth moment, [F1] gives $\int a=|Q|^{-1}(|Q|/2-|Q|/2)=0$. Hence $a$ satisfies [L1] and is a $(1,\infty,0)$-atom. [L1, F1, algebra]

2.1 **$a$ is discontinuous across the cutting hyperplane.** Fix $z\in H\cap\operatorname{int}Q$ and let $r>0$ be smaller than the distance from $z$ to $\partial Q$; then $z+se_0\in Q^+$ and $z-se_0\in Q^-$ for every $0<s<r$, and $a(z+se_0)=|Q|^{-1}$, $a(z-se_0)=-|Q|^{-1}$. Both sequences tend to $z$, so continuity of $a$ at $z$ would force the two values to be equal: by [F2] applied to the neighbourhood $V=\{w:|w-a(z)|<|Q|^{-1}/2\}$ of $a(z)$, every point of a sufficiently small neighbourhood $U$ of $z$ would satisfy $a(z+se_0)\in V$ and $a(z-se_0)\in V$, which is impossible because the two values differ by $2|Q|^{-1}>|Q|^{-1}$. Hence $a$ is discontinuous at every $z\in H\cap\operatorname{int}Q$, which is the relative interior of the cutting slice, and in particular is not continuous, hence not smooth. [step 1.1, F2, given, algebra]

3.1 **Conclusion.** Step 1.1 exhibits a $(1,\infty,0)$-atom and step 2.1 shows that it has a jump discontinuity on the cutting hyperplane; therefore the atomic size and cancellation conditions do not imply continuity or smoothness, and no regularity of atoms may be assumed in the atomic characterisation. In particular a proof producing $L^\infty$ atoms with jumps is not deficient on that account. [step 1.1, step 2.1] ∎
