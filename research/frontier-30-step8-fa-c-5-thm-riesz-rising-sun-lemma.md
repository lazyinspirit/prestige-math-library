# Final-adjudicator evidence: `thm-riesz-rising-sun-lemma`

Disposition: `repaired`.

## Material independently reviewed

I read the current theorem and all four direct dependencies; the measure-theory
A/B pages; the batch-3 manifest, coverage and notes; both proof contracts; the
moderate-risk result; the group-c load-bearing and impact records; both frozen
judge rejections; both confirmed-fatal adjudications; and both Alpha repairs.

The first rejection correctly identified an invalid continuity inference in the
old endpoint proof. Alpha correctly replaced it with a tail-maximum argument.
The second rejection correctly observed that an open subset of the subspace
$[a,b)$ may have a component $(a,d)$ when $a\notin E$. Alpha correctly allowed
$c=a$ in the open-component alternative while retaining $[a,d)$ when $a\in E$.

## Authoritative source verification

I opened and checked both full scholarly PDFs.

Frigyes Riesz, *Sur l'existence de la dérivée des fonctions monotones et sur
quelques problèmes qui s'y rattachent*, Section 2:

https://real.mtak.hu/214055/1/math_005_208-221.pdf

On printed page 210 / PDF page 2, Riesz defines the shadow set, proves it open,
decomposes it into disjoint open intervals, obtains the endpoint inequality,
and notes that equality holds except possibly when the component's left endpoint
is the interval's initial endpoint. This supports the current statement and its
endpoint caveat.

Terence Tao, *An Introduction to Measure Theory*, Lemma 1.6.17 and its proof:

https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf

On printed pages 144--145 / PDF pages 158--159, Tao states the same compact
rising-sun conclusion, with equality unless the left endpoint is $a$, and
constructs the intervals as the components of the open shadow set. His proof
also records that noninitial component endpoints lie outside the shadow set and
uses a genuine supremal argument to establish the right-endpoint dominance.

## Mathematical check

For $x\in E$, a witness $y>x$ with $F(y)>F(x)$ and continuity at $x$ give a
subspace neighborhood still shadowed by $y$, so $E$ is open. Its components are
$[a,d)$ if they contain $a$, and otherwise $(c,d)$; the latter includes
$(a,d)$ when $a\notin E$.

Fix $x$ in a component and let $t$ maximize $F$ on $[x,b]$. Membership of $x$
in $E$ forces $t>x$ and $F(t)>F(x)$. Since nothing to the right of a tail
maximizer has greater value, $t\notin E$, so $t\ge d$. If $d<b$ and
$F(t)>F(d)$, then $t>d$ would itself witness $d\in E$, contradicting that $d$
is the component endpoint. If $d=b$, then $t=d$ directly. Hence
$F(x)<F(d)$ for every $x$ in the component. Letting $x$ approach $c$ gives
$F(c)\le F(d)$; when $c>a$, the fact that $c\notin E$ gives the reverse
inequality and therefore equality. This validates Alpha's repaired item.

## Independent metadata and contract repair

Although the item itself is correct, the manifest still omitted the newly used
extreme-value theorem, and both proof contracts still contained the first
rejected continuity argument and still excluded the repaired $(a,d)$ component.
I synchronized the manifest strategy and dependency, regenerated both contract
derivations, and corrected the empty-set, degenerate-interval, endpoint, and
nonempty-witness boundary rows. No dependency item was changed, so no
owner-prerequisite-repair licence is required.

## Focused checks on final bytes

- Item precheck: pass (`1 checked, 0 failing`).
- Batch and merged strict proof contracts for this id: pass with zero errors and
  warnings.
- Batch and merged risk reports: moderate score 4, zero errors.
- Batch manifest dependency check: `33 item(s), 0 normalized, 0 error(s)`.
- Batch content policy: `33 scoped item(s), 0 error(s), 0 warning(s)`.
- Boundary audit: no contradicted dispositions.
- Item and both companion-page render checks: pass under real YAML and KaTeX.
