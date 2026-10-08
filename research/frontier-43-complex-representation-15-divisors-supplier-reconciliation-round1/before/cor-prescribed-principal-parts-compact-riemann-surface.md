---
id: cor-prescribed-principal-parts-compact-riemann-surface
kind: corollary
title: Prescribed principal parts on a compact Riemann surface
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 13
deps:
  - def-axiom-of-choice
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-holomorphic-line-bundle-sections
  - def-isolated-singularity-types
  - def-line-bundle-associated-to-a-divisor
  - def-meromorphic-differential-on-a-riemann-surface
  - def-meromorphic-function-complex-domain
  - def-principal-part-at-an-isolated-point
  - thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
  - thm-residue-pairing-for-line-bundle-cohomology
  - thm-residue-theorem-compact-riemann-surface
  - thm-serre-duality-compact-riemann-surfaces
sources:
  references:
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: https://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Ch. 2 §§18.1–18.2, printed pp. 151–152: a Mittag-Leffler distribution is solvable iff its Čech obstruction class vanishes, and on a compact surface this is equivalent to vanishing of its residue pairing with every holomorphic 1-form. The proof uses Serre duality; this item uses the preceding Hodge-derived duality instead."
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 6 §2, Proposition 6.3 and Theorem 6.4, printed pp. 54–55: the global residue theorem and the converse residue theorem for meromorphic differentials. The latter is not the function-valued criterion proved here."
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 10, 'Mittag–Leffler problems,' Theorem 10.5, printed pp. 89–92: a meromorphic-function Mittag-Leffler problem is solvable iff all residue pairings with holomorphic 1-forms vanish; Ch. 11, Theorem 11.1 and 'Pairings,' pp. 94–96, gives the Serre pairing used for that test. This corrects the scaffold's Ch. 9 locator."
    - title: Anand Deopurkar, Riemann-Roch (MATH 8320/2017 algebraic curves course notes, University of California Davis)
      url: https://ananddeopurkar.org/teaching/2017_algebraic_curves/RR.pdf
      locator: "§2.4, printed p. 6 (PDF p. 6): the residue-pairing interpretation of the function-valued Mittag-Leffler criterion and worked examples; the argument invokes the Serre-duality theorem."
---

## Statement

Assume the full Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface, and fix a supplied finite good cover $\mathfrak U$ by holomorphic coordinate disks and the compatible metrics and comparison data required by [[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]] and the residue pairing of [[thm-residue-pairing-for-line-bundle-cohomology]] ([[def-cech-cohomology-holomorphic-line-bundle-sections]]). Let $P\subset X$ be finite and let
$$\mathcal D=(\eta_p)_{p\in X},\qquad \eta_p\in\mathcal M_p/\mathcal O_p,$$
be a finite-support distribution of principal parts: $\eta_p=0$ for $p\notin P$. Here $\mathcal M_p$ and $\mathcal O_p$ denote the germs of meromorphic and holomorphic functions at $p$; every nonzero $\eta_p$ has a finite Laurent principal part ([[def-principal-part-at-an-isolated-point]], [[def-meromorphic-function-complex-domain]]). A global meromorphic function $f$ **solves** $\mathcal D$ when its germ modulo $\mathcal O_p$ equals $\eta_p$ at every $p\in X$.

1. For each member $U_i$ of the cover choose a meromorphic function $f_i$ on $U_i$ with principal part $\eta_p$ at each $p\in P\cap U_i$. Then $c_{ij}:=f_j-f_i$ is a holomorphic Čech 1-cocycle. Its image under the canonical comparison map defines a class
$$\xi(\mathcal D)\in H^1(X,\mathcal O_X),$$
independent of the local representatives and of the supplied cover.

2. The distribution $\mathcal D$ is solvable if and only if $\xi(\mathcal D)=0$.

3. Let $K_X=\Lambda^{1,0}T^*X$ and let $B_0$ be the residue pairing of [[thm-residue-pairing-for-line-bundle-cohomology]] for $D=0$, using $\mathcal O_X(0)\cong\mathcal O_X$ ([[def-line-bundle-associated-to-a-divisor]]). For every $\omega\in H^0(X,K_X)$,
$$B_0(\xi(\mathcal D),\omega)=\sum_{p\in P}\operatorname{Res}_p(\widetilde\eta_p\,\omega),$$
where $\widetilde\eta_p\in\mathcal M_p$ is any representative of $\eta_p$; the sum is finite and independent of those representatives. Consequently, $\mathcal D$ is solvable if and only if this sum is zero for every holomorphic differential $\omega\in H^0(X,K_X)$ ([[def-meromorphic-differential-on-a-riemann-surface]], [[thm-residue-theorem-compact-riemann-surface]], [[thm-serre-duality-compact-riemann-surfaces]]).

## Facts & Assumptions

**Given:** Full AC; a compact Riemann surface $X$; the supplied finite good cover of holomorphic coordinate disks and comparison data; a finite set $P$; and principal-part classes $\eta_p\in\mathcal M_p/\mathcal O_p$ supported in $P$.

[F1] Full AC is the stated hypothesis of the Čech–Dolbeault comparison, residue-pairing theorem, and Serre duality chain; this proof makes no additional choice beyond finite selections from $P$ ([[def-axiom-of-choice]]).

[F2] For the supplied finite good cover, $\check H^1(\mathfrak U,\mathcal O_X)$ is the cocycles modulo coboundaries, with $\delta^0(a)_{ij}=a_j-a_i$ for $i<j$ ([[def-cech-cohomology-holomorphic-line-bundle-sections]], [[def-cech-cochain-complex-open-cover]]). The cover definition and its in-pair use remain escalated; the convention here is provisional.

[F3] The canonical comparison identifies fixed-cover Čech $H^1$ with sheaf $H^1(X,\mathcal O_X)$ and is natural in refinements; A4's item decision is stale/owner-held, so this use is provisional ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).

[F4] A prescribed principal part is a finite negative-power Laurent polynomial in any centred local coordinate; meromorphic functions on a coordinate domain have only isolated finite-order poles ([[def-principal-part-at-an-isolated-point]], [[def-meromorphic-function-complex-domain]], [[def-isolated-singularity-types]]).

[F5] The A11 theorem identifies the residue pairing with the sum of residues for a Čech cocycle $c_{ij}=g_{ij}s_D$ when $g_{ij}=\eta_j-\eta_i$. At $D=0$, $s_0=1$, so the pairing $B_0$ on $H^1(X,\mathcal O_X)\times H^0(X,K_X)$ is given by that same local formula. A11's receipt is stale and owner-held; the use is provisional ([[thm-residue-pairing-for-line-bundle-cohomology]]).

[F6] For $D=0$, A13 states that the residue pairing $H^1(X,\mathcal O_X)\times H^0(X,K_X)\to\mathbb C$ is perfect, in particular the induced map $H^1(X,\mathcal O_X)\to H^0(X,K_X)^*$ is injective. A13 is escalated on the missing Hodge suppliers; this use is provisional ([[thm-serre-duality-compact-riemann-surfaces]]).

[F7] The divisor-bundle construction gives $\mathcal O_X(0)\cong X\times\mathbb C$ and canonical section $s_0=1$ ([[def-line-bundle-associated-to-a-divisor]]). A3 remains escalated.

[F8] A global meromorphic differential on a compact Riemann surface has only finitely many nonzero residues and their sum is zero ([[thm-residue-theorem-compact-riemann-surface]]).

[F9] The residue of a meromorphic differential vanishes when it is holomorphic at the point ([[def-meromorphic-differential-on-a-riemann-surface]]).

## Proof

The local Laurent data gives a Čech cocycle because its poles cancel on overlaps. Serre duality tests the resulting cohomology class against holomorphic differentials, and the residue formula computes those tests.

1.1 For each $U_i$, use its disc coordinate $z_i$ and for every $p\in P\cap U_i$ write a finite Laurent representative of $\eta_p$ in $z_i-z_i(p)$. Let $f_i$ be the sum of these finitely many principal-part representatives on $U_i$; it is meromorphic and has exactly the prescribed principal parts at points of $P\cap U_i$. If $q\in U_i\cap U_j$ is outside $P$, both $f_i$ and $f_j$ are holomorphic near $q$. If $q\in P\cap U_i\cap U_j$, their germs have the same class $\eta_q$ modulo holomorphic germs, so $f_j-f_i$ is holomorphic near $q$ as well. Thus $c_{ij}=f_j-f_i$ is a holomorphic 1-cochain; the identity $(f_k-f_j)+(f_j-f_i)=f_k-f_i$ makes it a cocycle. By [F3], its fixed-cover class maps to $\xi(\mathcal D)\in H^1(X,\mathcal O_X)$. If the representatives are changed, each $f_i$ changes by a holomorphic $a_i$, and $c$ changes by the coboundary $a_j-a_i$. If the supplied cover changes, the local lifts still differ by holomorphic functions on overlaps because they have the same principal-part germs; naturality and refinement compatibility in [F3] identify the resulting classes. [F1, F2, F3, F4, given]

2.1 Take $D=0$ in [F5]. The local cochain $c_{ij}=f_j-f_i$ has the residue-pairing form $g_{ij}=\eta_j-\eta_i$ with $\eta_i=f_i$ and $s_0=1$. For $\omega\in H^0(X,K_X)$, [F5] therefore gives $B_0(\xi(\mathcal D),\omega)=\sum_{q\in X}\operatorname{Res}_q(f_i\omega)$. If $q\in P$, the germ of $f_i$ has principal part $\eta_q$, so $f_i-\widetilde\eta_q$ is holomorphic at $q$ and [F9] gives $\operatorname{Res}_q(f_i\omega)=\operatorname{Res}_q(\widetilde\eta_q\omega)$. If $q\notin P$, $f_i$ and $\omega$ are holomorphic at $q$, so the residue is zero. This proves the displayed sum over $P$. Replacing $\widetilde\eta_q$ by another representative adds a holomorphic germ, whose product with $\omega$ has zero residue by [F9]. The sum is finite because $P$ is finite. [F5, F7, F9, step 1.1, given]

2.2 If a global meromorphic solution $f$ exists, then $a_i:=f_i-f$ is holomorphic on every $U_i$, since its principal parts cancel at every point. Hence $c_{ij}=a_j-a_i$ is a coboundary and $\xi(\mathcal D)=0$. Conversely, if $\xi(\mathcal D)=0$, the comparison in [F3] is an isomorphism, so $c$ is a coboundary on $\mathfrak U$: there are holomorphic $a_i$ with $f_j-f_i=a_j-a_i$. Then $f_i-a_i=f_j-a_j$ on each overlap, so these meromorphic functions glue to a global meromorphic $f$ whose principal parts are those of $f_i$, namely $\mathcal D$. [F2, F3, step 1.1, algebra]

3.1 Fix an arbitrary $\omega\in H^0(X,K_X)$. If $f$ solves $\mathcal D$, then $f\omega$ is a global meromorphic differential whose residues are the summands in step 2.1 at points of $P$ and zero elsewhere; [F8] gives that their sum is zero. Conversely, if every displayed residue sum is zero, step 2.1 says $B_0(\xi(\mathcal D),\omega)=0$ for every such $\omega$. The injectivity in [F6] forces $\xi(\mathcal D)=0$, and step 2.2 supplies a global meromorphic solution. Thus the residue condition is necessary and sufficient. [F1, F6, F8, step 2.1, step 2.2, algebra] ∎
