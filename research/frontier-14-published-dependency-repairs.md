# frontier-14 — published-dependency repairs

**No published item was repaired on this run.** This file exists because the
obvious-published-dependency delegation was *considered* once and declined, and
a declined use is worth a durable record: the next session should not rediscover
the question and reach a different answer silently.

Checked mechanically at step 6c: `git status` over `items/` shows **zero
modified files carrying `status: published`**. All 338 scoped items and the 18
page files touched by this run are drafts. Groups a, b and c each state the same
in their own reports.

---

## Considered and declined — `cor-functor-categories-inherit-completeness-and-cocompleteness`

**Raised by** the `refuter-b6-aft` read-only refuter (GPT 5.6 Sol), confirmed by
group Alpha b, referred to the lead Alpha at 6c because a published-item
restatement is not a group Alpha's call.

**The finding, and it is real.** The item's title reads

> If A is small, then [A,C] is complete or cocomplete whenever C is respectively
> complete or cocomplete

with no choice hypothesis, while its own Statement opens **"Assume Choice"** and
its step 1.1 selects pointwise limits simultaneously across a set-indexed family.
Read alone, the title asserts more than the item proves. That is the run's
declared fatal class, and it is the class the step-7 judges structurally cannot
see, because they read Statements.

**Disposition: not repaired. Two independent reasons, either sufficient.**

1. **Out of the delegation's scope.** The delegation covers "a published item the
   current level depends on". Nothing in this run depends on it any more.
   Group b's R6-18 repair had added it as a fact to
   `cor-a-complete-locally-small-category-with-a-small-coseparating-set-and-saft-intersections-is-cocomplete`;
   the `refuter-b6-aft` finding then removed both the fact and the dependency,
   because that corollary assumes no Choice and must not lean on a
   Choice-assuming one. Verified at 6c by grep over all 4,646 items: the only
   file mentioning this id is the item itself. It is currently cited by nothing.

2. **It is a debatable restatement, not an unambiguous falsehood.** The
   delegation requires either the exact source statement or a directly checkable
   elementary correction. The source is Riehl, *Category Theory in Context*,
   Corollary 3.3.3, which states the result **without** a choice hypothesis — so
   "check it against a reputable source" argues *for* the present title, not
   against it. What is actually wrong is narrower and harder: the library's
   chosen *proof route* spends Choice on a simultaneous selection of pointwise
   limits, and whether the theorem needs Choice at all is a question about the
   route, not about the statement. Resolving it means either adding the
   hypothesis to the title (making the library's claim weaker than its source's)
   or rewriting the published proof to avoid the selection. Both are owner
   decisions.

**For the owner.** The cheap, honest fix is to add "Assuming Choice," to the
title so it matches the item's own Statement, and to record in the item that
Riehl states it without the hypothesis and that the gap is in the route. The
alternative — removing the selection from the proof — is a mathematical question
about whether pointwise limits can be chosen canonically, and is not something I
should decide inside a build. Either way the item is currently orphaned, so
nothing is blocked by leaving it as it is.

---

## Certification

Not applicable: no repair was applied, so there is nothing for a second party to
certify. Had one been applied, this run's certifier would have had to be someone
other than its author — group b raised it and I adjudicated it, which satisfies
that separation for the *decision*, and the decision was to make no change.
