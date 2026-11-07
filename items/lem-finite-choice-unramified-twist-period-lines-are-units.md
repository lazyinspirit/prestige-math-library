---
id: lem-finite-choice-unramified-twist-period-lines-are-units
kind: lemma
title: Unramified-twist period lines are units under countable finite choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-choice-for-pairs-and-countable-finite-choice
  - lem-countable-finite-choice-padic-galois-lifting-and-period-comparison
  - lem-choice-free-period-invariants-from-finite-galois-lifting
  - lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
  - lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants
  - lem-choice-free-identification-of-padic-algebraic-closure-completions
  - lem-perfect-base-witt-frobenius-and-p-adic-completeness
  - thm-absolute-galois-group-of-finite-field-is-procyclic
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice for finite sets orders the finite Frobenius-eigenunit lift fibers; the resulting compatible sequence is then determined recursively. The lifting supplier uses the same weak principle."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
      locator: Proposition 9.1.6; the unramified-character special case is reconstructed below
verification: {}
---

## Statement

Assume $\mathrm{AC}_{\omega,\mathrm{fin}}$. Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C=\widehat F$, a compatible primitive cyclotomic system be GIVEN, and $K\subset F$ finite with residue field $k=\mathbb F_q$ and maximal unramified subfield $K_0$. Let $B$ be either $B_{\mathrm{cris}}$ or $B_{\mathrm{st}}$. Write $a:G_K\to\widehat{\mathbb Z}$ for the residue action, normalized so arithmetic $q$-Frobenius has exponent $1$. Let $0\ne b\in B$ span a stable $\mathbb Q_p$-line with character $\eta$. Suppose there are integers $r>0$, $n$, and a GIVEN continuous character $\bar\eta:\widehat{\mathbb Z}\to\mathbb Z_p^\times$ with $\eta^r\chi^{-n}=\bar\eta\circ a$. Then $b$ is a unit of $B$. This includes unramified twists of cyclotomic-power characters; it does not assert that an arbitrary stable-line character has this form.

## Facts & Assumptions

**Given:** Countable choice for finite sets, the valued closure, completion, cyclotomic system, finite field extension $K/\mathbb Q_p$, and the displayed character factorization.

[A1] $\mathrm{AC}_{\omega,\mathrm{fin}}$ selects one element from each indexed countable family of nonempty finite sets. [[def-choice-for-pairs-and-countable-finite-choice]]

[F1] Under [A1], absolute Galois restriction to every finite Galois subextension is surjective. [[lem-countable-finite-choice-padic-galois-lifting-and-period-comparison]]

[F2] That finite lifting property implies $B_{\mathrm{cris}}^{G_K}=B_{\mathrm{st}}^{G_K}=K_0$. [[lem-choice-free-period-invariants-from-finite-galois-lifting]]

[F3] The element $t$ is invertible in both period rings and satisfies $g(t)=\chi(g)t$. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

[F4] The tilt has the canonical residue-constant embedding $\omega:\overline{k}\to\mathcal O_C^\flat$, with $\overline{k}$ algebraically closed; the ordinary and ball completions agree. [[lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants]] [[lem-choice-free-identification-of-padic-algebraic-closure-completions]]

[F5] Witt Frobenius is coordinatewise Frobenius on a perfect base, and the Witt ring is $p$-adically complete with quotient the truncated Witt ring at each level. [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[F6] Arithmetic $q$-Frobenius topologically generates $\operatorname{Gal}(\overline{k}/k)\cong\widehat{\mathbb Z}$. [[thm-absolute-galois-group-of-finite-field-is-procyclic]]

## Proof

1.1 Put $u=\bar\eta(1)\in\mathbb Z_p^\times$ and write $\phi_q$ for the Witt lift of $q$-Frobenius on $W(\overline{k})$. For $m\ge1$, let $X_m$ be the set of units $x\in W_m(\overline{k})$ with $\phi_q(x)=u x$. The first set is nonempty because $X^{q-1}=\bar u$ has a nonzero root in the algebraically closed residue field. If $x_m\in X_m$, lift it to one Witt vector $w$ and write $\phi_q(w)-uw=p^m z$. The polynomial $Y^q-\bar uY=-\bar z$ has a root $y\in\overline{k}$, and $w+p^m[y]$ is a solution modulo $p^{m+1}$ reducing to $x_m$. Thus all transition maps $X_{m+1}\to X_m$ are surjective. If $x,x'\in X_m$, their quotient is fixed by $\phi_q$, so belongs to the finite unit group $W_m(k)^\times$ by coordinatewise Frobenius. Therefore each $X_m$ is finite and nonempty. [F4, F5, given, construct, algebra]

2.1 The sets of total orderings of the $X_m$ are nonempty and finite. Apply [A1] to choose an ordering at each level, and recursively take the least compatible lift. Witt completeness in [F5] gives a unit $c\in W(\overline{k})^\times$ with $\phi_q(c)=u c$. Through the canonical residue-constant embedding [F4], this unit lies in $W(\mathcal O_C^\flat)\subset B_{\mathrm{cris}}\subset B_{\mathrm{st}}$. The uniqueness of the constant-field section makes it $G_K$-equivariant. The $\widehat{\mathbb Z}$-action on each truncated Witt vector is continuous and factors through a finite Frobenius quotient. By [F6], the identity $\phi_q(c)=u c$ therefore extends from integer powers to $g(c)=\bar\eta(a(g))c$ for every $g\in G_K$. [A1, F4, F5, F6, step 1.1, construct, algebra]

3.1 Put $v=b^rt^{-n}/c\in B$. By [F3], the GIVEN character relation and step 2.1, $v$ is fixed by $G_K$. It is nonzero, so [F1]–[F2] place it in $K_0^\times$. Since $c$ and $t$ are units, $b^r=vc t^n$ is a unit, hence $b$ is a unit with inverse $b^{r-1}(b^r)^{-1}$. This proves exactly the stated unramified-twist case; no characterization of arbitrary characters is inferred. [F1, F2, F3, step 2.1, given, algebra] ∎

## Source notes

The proof constructs the unramified Frobenius eigenunit directly by finite Witt lifts. The explicit countable finite-choice assumption orders the finite solution fibers; neither full Choice nor the general Sen character theorem is imported. Arbitrary crystalline stable-line regularity remains held.
