---
id: rem-completeness-routes
kind: remark
title: "Two independent proofs that $\\mathbb{R}$ is Cauchy complete, and why the library records both"
status: draft
origin: session
deps: [thm-cauchy-criterion-via-lub, thm-reals-cauchy-complete, thm-bolzano-weierstrass, thm-nested-interval-property, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 and §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §1.1 and §2.4"
      url: "https://www.jirka.org/ra/"
---

This library now contains **two proofs of the same sentence**, that every Cauchy
sequence of reals converges, and they have almost nothing in common. This remark
says what each one actually establishes, why neither makes the other redundant,
and which further statements about completeness are *not* proved here.

**Route 1: from the construction.** [[thm-reals-cauchy-complete]] lives on the
Cauchy-construction page. There $\mathbb{R}$ is built as equivalence classes of
Cauchy sequences of rationals, and completeness is proved by a diagonal argument
on representatives: given a Cauchy sequence of reals, one picks a rational close
to each term and shows the resulting rational sequence is Cauchy, so it *is* a
real, and it is the limit. That argument is about the objects the construction
produced, and every step of it mentions representatives.

**Route 2: from the axioms.** [[thm-cauchy-criterion-via-lub]], proved on this
page, uses only that $\mathbb{R}$ is a complete ordered field
([[def-complete-ordered-field]]). It goes through boundedness of Cauchy
sequences, [[thm-bolzano-weierstrass]], and the upgrade of a convergent
subsequence to a convergent sequence. Nothing in it refers to a construction, and
it therefore proves the statement for **every** complete ordered field, however
that field was obtained: by Dedekind cuts, by Cauchy sequences, or by fiat as an
axiom system.

**Why both are kept.** The two are not the same theorem with two proofs; they are
two theorems that happen to have the same words. Route 1 is a fact about the
object this library built. Route 2 is a fact about the axioms, and it is the one
that transfers. A reader who takes $\mathbb{R}$ axiomatically, as most courses
do, has no access to Route 1 at all, and a reader following the construction gets
Route 1 several pages before the machinery of Route 2 exists. Keeping only one
would either strand a reader or hide the fact that the axioms alone suffice.

The uniqueness of the complete ordered field up to isomorphism means the two
statements are about the same field, so no inconsistency is possible between
them; but uniqueness is itself a theorem, and it does not turn one proof into
the other.

**Which implication is being proved, and which is not.** Everything above proves

$$\text{least upper bound property} \;\Longrightarrow\; \text{Cauchy completeness}.$$

The converse is **false as stated**: Cauchy completeness alone does not imply the
least-upper-bound property, and the standard counterexamples are non-Archimedean
ordered fields that are Cauchy complete and not Dedekind complete. What is true
is that Cauchy completeness *together with the Archimedean property* implies the
least-upper-bound property. **That implication is not proved anywhere in this
library as things stand.** It belongs to the page on the equivalent forms of
completeness, which is planned and not yet written, and no item here may be cited
for it.

The same holds for the nested interval property. [[thm-nested-interval-property]]
is proved here *from* the least-upper-bound property. The converse route, that
nested intervals together with the Archimedean property give back the
least-upper-bound property, is again a genuine theorem and again is not proved
here. The reason for the recurring Archimedean hypothesis is worth stating
plainly: monotone convergence, nested intervals and Cauchy completeness are all
statements about *sequences*, and a non-Archimedean field has elements that no
sequence of naturals can reach, so sequential statements cannot see them. The
least-upper-bound property can.

**What this page does establish about the relationships.** Reading the items in
order, the least-upper-bound property gives monotone convergence
([[thm-monotone-convergence]]), which gives both the nested interval property
and, through the peak lemma, Bolzano-Weierstrass
([[thm-bolzano-weierstrass]]), which gives the Cauchy criterion
([[thm-cauchy-criterion-via-lub]]). That is a chain of implications from one
axiom, not an equivalence, and every arrow in it is proved here.
