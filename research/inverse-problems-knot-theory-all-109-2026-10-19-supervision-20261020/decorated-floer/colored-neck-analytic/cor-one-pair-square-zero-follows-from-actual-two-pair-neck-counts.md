---
id: cor-one-pair-square-zero-follows-from-actual-two-pair-neck-counts
kind: corollary
title: One-pair square zero follows from actual two-pair neck counts
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-colored-special-connected-sum-has-the-actual-two-color-neck-differential
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
sources:
  references: []
---

## Statement

Let an actual singly paired balanced knot diagram in an arbitrary oriented three-manifold have a finite regular full-marked disk-count operator $D$ over $R=\mathbb F_2[U_{w'},V_{z'}]$, with the ordinary Fredholm and compactness data needed for the special-connected-sum count. Do not assume $D^2=0$, an old curvature formula, or a count of singly pointed boundary degenerations.

Suppose that actual insertion of the new adjacent pair $w,z$ has been carried out, over $S=R[U_w,V_z]$, with the following two operations realized on the SAME representative. First, the marked target-neck construction gives the actual disk-count matrix
$$D_+=\begin{pmatrix}D&a\\b&D\end{pmatrix},\qquad a=U_w+U_{w'},\quad b=V_z+V_{z'}.$$
Its analytic count uses only the stated finite regular old count and its strip compactness, not an old curvature identity. Second, the actual compactified index-two count for that two-pair diagram, using its two-region unit boundary-degeneration normalization, gives its scalar adjacency curvature. Then $D^2=0$ over $R$.

Thus a proved two-region normalization and the actual target-neck count suffice to construct the singly paired square-zero complex. This corollary does not prove that singly pointed unit boundary-degeneration moduli are empty or have count zero.

## Statement references

[[thm-colored-special-connected-sum-has-the-actual-two-color-neck-differential|Actual marked count matrix and its old-input scope]]

## Facts & Assumptions

**Given:** The same actual inserted diagram and its actual count operator satisfy both hypotheses. Every old and new marking variable is independent.

[F1] The count construction in [[thm-colored-special-connected-sum-has-the-actual-two-color-neck-differential]] uses ordinary old-strip regularity, positive-domain finiteness and compactness, plus the new unit-region and root-response operators. It does not use $D^2$ in its index classification, root matching, off-diagonal counts or curve exhaustion. Its scalar old-curvature clause is only a subsequent conditional consequence. Here only that count construction and its operator identity are used.

[A1] For the same actual two-pair representative the compactified index-two boundary calculation has established the adjacency curvature. This is a separate supplied two-region operation; it is not inferred from the existence of the matrix. The only cyclic adjacency monomials on this one component after insertion are $U_{w'}V_z$, $U_wV_z$, $U_wV_{z'}$, and $U_{w'}V_{z'}$.

## Proof

1.1 Extend the old finite free module and $D$ to $S$. Direct multiplication of its ACTUAL count matrix gives zero off-diagonal terms, since $D$ is $S$-linear and the characteristic is two. Each diagonal term is $D^2+ab$. No square-zero property of the old operator was used in obtaining this identity or, by [F1], its actual count matrix. On the other hand [A1] gives $D_+^2=\omega_+ I$, where
$$\omega_+=U_{w'}V_z+U_wV_z+U_wV_{z'}+U_{w'}V_{z'}=(U_w+U_{w'})(V_z+V_{z'})=ab.$$
The two calculations concern the same disk-count operator, rather than homotopy equivalent operators with unexamined identifications. [given, F1, A1, algebra]

2.1 Comparing either diagonal block yields $D^2+ab=ab$, hence $D^2=0$ over $S$. The polynomial inclusion $R\hookrightarrow S$ is injective, and the old module has its actual free generator basis, so every coefficient of $D^2$ already vanishes over $R$. This constructs the old square-zero count without assuming its conclusion or any singly pointed boundary normalization. It proves exactly the stated complex-level conclusion; it makes no claim that individual singly pointed degeneration moduli are empty. [step 1.1, given, algebra] ∎
