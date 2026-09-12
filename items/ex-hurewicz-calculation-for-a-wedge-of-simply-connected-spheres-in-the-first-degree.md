---
id: "ex-hurewicz-calculation-for-a-wedge-of-simply-connected-spheres-in-the-first-degree"
kind: "example"
title: "Hurewicz calculation for a wedge of simply connected spheres"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-absolute-hurewicz-theorem","lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis","lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis","def-hurewicz-homomorphism","def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: May Hurewicz wedge lemma, Chapter 15 §1
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Assume the Axiom of Choice. Let $n\ge2$, let $J$ be a nonempty finite set, and let $W=\bigvee_{j\in J}S^n_j$ be the CW wedge of oriented based spheres with common vertex $b$. Then $W$ is $(n-1)$-connected and
$$\pi_n(W,b)\cong\bigoplus_{j\in J}\mathbb Z,$$
with basis the classes of the inclusions $\iota_j:S^n_j\to W$. Under Hurewicz, this basis is carried to the corresponding sphere orientation classes in $H_n(W;\mathbb Z)$.

## Facts & Assumptions

[F1] [[thm-absolute-hurewicz-theorem]] supplies the first nonzero-degree isomorphism for an $(n-1)$-connected CW complex, assuming AC when $n\ge2$.

[F2] [[lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis]] constructs the CW wedge, its inclusions and collapsing projections $p_j$, proves path connectedness and lower homotopy vanishing, and gives the finite-support integer group model. Only these structural and connectivity clauses are needed for the Hurewicz calculation below.

[F3] [[lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis]] proves that $e_j=(\iota_j)_*[S^n_j]$ form an integral homology basis, with coordinate inverse given by $(p_j)_*$. Its proof derives the finite splitting from the pair sequence and the actual CW quotient comparison.

[F4] [[def-hurewicz-homomorphism]] gives the formula $h([u])=u_*[S^n]$, its additivity and its naturality with the supplied orientations.

[A1] [[def-axiom-of-choice]] is assumed through [F1], whose proof uses arbitrary-cell approximation and selection of compression disks for its relative model equivalence. No additional choice is made for the finite wedge or its supplied sphere orientations.

## Verification

**Given:** The nonempty finite indexing set $J$, integer $n\ge2$, and based oriented spheres as above. Coefficients throughout are integers.

1.1 By [F2], $W$ has a CW structure with one vertex and one $n$-cell for each $j$, each attached by its constant boundary. It is path connected, and $\pi_i(W,b)=0$ for $0<i<n$. Thus $W$ is $(n-1)$-connected and meets [F1]'s CW and nonemptiness hypotheses. In particular $n=2$ gives simple connectivity, rather than assuming it from an unstated wedge principle. By [A1] and [F1], $h:\pi_n(W,b)\to H_n(W;\mathbb Z)$ is an isomorphism. [F1, F2, A1, given]

2.1 Formula [F4] gives $$h([\iota_j])=(\iota_j)_*[S^n_j]=e_j.$$ Since $h$ is a homomorphism, it follows for every integer vector $a=(a_j)_{j\in J}$ that $$h\left(\sum_{j\in J}a_j[\iota_j]\right)=\sum_{j\in J}a_je_j.$$ The sum on the left is well defined: $h$ is an injective homomorphism into the abelian homology group, so its source is abelian (the image of each commutator is zero, hence the commutator itself is the identity). Finite sums are therefore independent of the order, and negative coefficients mean inverse classes. [F1, F2, F3, F4, step 1.1]

3.1 For $\alpha\in\pi_n(W,b)$ define $c_j(\alpha)$ by $$(p_j)_*h(\alpha)=c_j(\alpha)[S^n_j].$$ These integers are unique by [F3], and they form a vector in the finite direct sum because $J$ is finite. Let $T(a)=\sum_j a_j[\iota_j]$. The two composites are identities: step 2.1 and the coordinate inverse of [F3] give $c(T(a))=a$; conversely [F3] expresses $h(\alpha)=\sum_j c_j(\alpha)e_j=h(T(c(\alpha)))$, and injectivity of $h$ gives $T(c(\alpha))=\alpha$. Both maps are homomorphisms by [F3], [F4] and finite additivity. This proves the stated isomorphism with precisely the inclusion basis, not just an abstract equality of ranks. [F2, F3, F4, step 1.1, step 2.1]

4.1 A singleton $J$ recovers one sphere and its identity generator. The zero vector corresponds to the constant class; negative vectors correspond to inverse classes by step 2.1. Empty $J$ is excluded in the stated example, although [F2] and [F3] consistently assign it a point and a zero positive group. The restriction $n\ge2$ is required for [F1]'s higher Hurewicz isomorphism; no free-abelian claim for a wedge of circles is being made. The AC cost of this derivation is exactly [A1]; choosing an ordering of every finite set or a family of orientation representatives was not used. The claimed connectivity and both inverse formulas are now proved. [F1, F2, F3, F4, A1, step 1.1, step 2.1, step 3.1] ∎
