# Step 5 repair: impact-initial-pass-2, round 1, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/impact-initial-pass-2-1.json.







Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-pass-2-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"impact-initial-pass-2",round:1,unit:"1",input_sha256:"9486c45430eaa9ad5d183caf06d299d28abc52ae47c783b4265429b59b94168d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Explicit native pending consumer work (read the unchanged original report and examine actual current supplier effects): [{"id":"cex-it-asymptotic-source-channel-threshold-does-not-give-zero-error-at-finite-blocklength","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]]: for the BSC with crossover probability $1/4$, each coordinate transition probability is either $1/4$ or $3/4$, so every output word has positive probability under every input word."},{"id":"cex-it-expected-random-code-error-does-not-give-maximal-error","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: Expected average error tending to zero for singleton random-code ensembles on finite DMCs forces the corresponding maximal errors to tend to zero."},{"id":"def-discrete-memoryless-channel-information-capacity","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: For an input probability vector $P_X$ on $\\mathcal X$ ([[def-finite-probability-vector]]), let $P_{XY}(x,y):=P_X(x)W(y\\mid x)$ and $Q_{P_X}(y):=\\sum_xP_X(x)W(y\\mid x)$. Write $I(P_X;W):=I(X;Y)$ for this joint law, using [[def-it-finite-mutual-information]]. The **single-letter information capacity** is\n$$C(W):=\\sup_{P_X} I(P_X;W),$$\nmeasured in nats per channel use. The finite-dimensional maximum is attained, as proved in [[lem-discrete-memoryless-channel-capacity-is-attained]]."},{"id":"def-discrete-memoryless-channel-information-density","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: Given an input law $P_X$, let $Q_{P_X}=P_XW$ be its output law. The **information density** is\n$$\\imath_{P_X}(x;y):=\\ln\\frac{W(y\\mid x)}{Q_{P_X}(y)}$$\nwhen $P_X(x)W(y\\mid x)>0$, and is $-\\infty$ otherwise. For block sequences define $\\imath_{P_X}(x^n;y^n):=\\sum_{i=1}^n\\imath_{P_X}(x_i;y_i)$, with any sum containing $-\\infty$ equal to $-\\infty$. On the support of the induced joint law, both numerator and denominator are positive, and the value is finite."},{"id":"def-discrete-memoryless-channel-operational-capacity","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: A rate $R\\ge0$ is **average-error achievable** for $W$ if there are length-$n$ codes for all sufficiently large $n$ with\n$$\\liminf_{n\\to\\infty}\\frac{\\ln M_n}{n}\\ge R,\\qquad \\varepsilon_{\\rm av}(n)\\longrightarrow0.$$\nIt is **maximal-error achievable** if the same condition holds with $\\varepsilon_{\\max}(n)\\to0$. Define $C_{\\rm av}(W)$ and $C_{\\max}(W)$ as the suprema of the respective achievable-rate sets. Rates use nats per channel use."},{"id":"def-finite-dmc-cost-model","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Let $W(y\\mid x)$ be a finite DMC with nonempty finite input alphabet $\\mathcal X$ ([[def-discrete-memoryless-channel]]). A **letter cost** is a supplied function $c:\\mathcal X\\to[0,\\infty)$ with finite real values. Define\n$$c_{\\min}:=\\min_{x\\in\\mathcal X}c(x),\\qquad c_{\\max}:=\\max_{x\\in\\mathcal X}c(x),\\qquad \\bar c(P_X):=\\sum_{x\\in\\mathcal X}P_X(x)c(x)$$\nfor each input probability vector $P_X$ ([[def-finite-probability-vector]]). A real number $\\Gamma$ is a **feasible cost budget** when $\\Gamma\\ge c_{\\min}$. Costs and budgets are per channel use; all logarithms and rates in this pair use natural units [[def-natural-logarithm]]."},{"id":"def-finite-dmc-feedback-code","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Let $W(y\\mid x)$ be the finite DMC [[def-discrete-memoryless-channel]] and $c:\\mathcal X\\to[0,\\infty)$ the finite input cost from [[def-finite-dmc-cost-model]], with feasible budget $\\Gamma$ from [[def-cost-constrained-dmc-code-and-capacity]]. For an integer $n\\ge1$, a deterministic length-$n$ feedback code with $M\\ge1$ equiprobable messages consists of causal maps\n$$f_t:[M]\\times\\mathcal Y^{t-1}\\to\\mathcal X\\quad(1\\le t\\le n)$$\nand a decoder $g:\\mathcal Y^n\\to[M]$. Given message $m$, its channel law is the product of the row probabilities $W(y_t\\mid f_t(m,y^{t-1}))$. Its expected average cost is\n$$\\frac1n\\sum_{t=1}^n\\mathbb E[c(X_t)],$$\nwhere the expectation is over the uniform message and channel outputs. It is feasible when this quantity is at most $\\Gamma$; its average error is $\\Pr[g(Y^n)\\ne M]$ and its rate is $n^{-1}\\ln M$ nats per use. The feedback operational capacity $C_{\\rm fb}(\\Gamma)$ is the supremum of rates for which feasible codes for all sufficiently large blocklengths have average error tending to zero and limiting inferior rate at least the stated rate. The no-feedback subclass consists of encoders $f_t$ that do not depend on $y^{t-1}$; it includes every ordinary"},{"id":"def-fixed-length-channel-code","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"For a finite DMC $W$, a **length-$n$ code with $M$ messages** is a pair of maps $e:[M]\\to\\mathcal X^n$ and $d:\\mathcal Y^n\\to[M]$, where $n,M\\ge1$ and $[M]:=\\{1,\\ldots,M\\}$. A message $m$ is encoded as $e(m)$, passed through the block kernel $W^n$ of [[def-discrete-memoryless-channel]], and decoded as $d(Y^n)$. The encoder and decoder are deterministic; there is no feedback, and no input-cost constraint is imposed."},{"id":"def-fixed-length-channel-code-errors","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: For a length-$n$ code $(e,d)$, let\n$$e_m:=W^n\\{y^n:d(y^n)\\ne m\\mid e(m)\\}.$$\nIts **average error** is $\\varepsilon_{\\rm av}:=M^{-1}\\sum_{m=1}^M e_m$, corresponding to a uniform message, and its **maximal error** is $\\varepsilon_{\\max}:=\\max_{1\\le m\\le M}e_m$."},{"id":"def-frobenius-object-and-knowledgeable-sewing-data","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"For each $a,b\\in S$, define the open pairing\n$$\nb_{ab}:A_{ab}\\otimes A_{ba}\\to k,\\qquad b_{ab}:=\\epsilon_a\\circ\\mu_{aba}.\n$$\nThe cyclic trace equation above identifies $b_{ab}$ with the reversed pairing $b_{ba}\\circ\\tau_{A_{ab},A_{ba}}$. The equations do not impose nondegeneracy as a separate axiom: [[lem-frobenius-sewing-derived-moves]] proves that both induced maps to algebraic duals are isomorphisms, by exhibiting the two snake composites. For $a=b$, this is the symmetric Frobenius pairing on $A_{aa}$."},{"id":"def-it-finite-dmc-feedback-code","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"For a finite DMC $W:\\mathcal X\\to\\mathcal Y$ as in [[def-discrete-memoryless-channel]], a length-$n$ feedback code has a uniform message $M\\in[M]$, deterministic causal encoders $f_i:[M]\\times\\mathcal Y^{i-1}\\to\\mathcal X$ and a decoder $g:\\mathcal Y^n\\to[M]$. The encoder at time $i$ sees only $Y^{i-1}$, sets $X_i=f_i(M,Y^{i-1})$, and the causal joint law is\n$$\\Pr(M=m,Y^n=y^n)=\\frac1M\\prod_{i=1}^n W(y_i\\mid f_i(m,y^{i-1})).$$\nEquivalently, at each positive-probability message-and-past-output history, $Y_i$ has conditional law $W(\\cdot\\mid f_i(m,y^{i-1}))$. Its average error is $\\Pr[g(Y^n)\\ne M]$, rate is $n^{-1}\\ln M$ nats/use, and the feedback capacity is the closure of rates achievable with error tending to zero. There is no input-cost constraint."},{"id":"def-it-gallager-and-expurgated-exponent-functions","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: Let $W$ be a finite unconstrained DMC from finite nonempty $\\mathcal X$ to $\\mathcal Y$, with rates and logarithms in nats. The one-letter function $E_0(\\rho,P)$ for $\\rho\\ge0$ and $E_{0x}(\\rho,P)$ for $\\rho\\ge1$ are defined in [[def-it-one-letter-gallager-exponent-functions]]. Their maxima over the input simplex are attained and finite by [[lem-it-gallager-input-maxima-attained]]. For every $\\rho\\ge0$, define $E_0(\\rho):=\\max_P E_0(\\rho,P)$; on the random-coding range set\n$$E_r(R):=\\sup_{0\\le\\rho\\le1}\\{E_0(\\rho)-\\rho R\\}.$$\nThe expurgated function and sphere-packing expression are\n$$E_{\\rm ex}(R):=\\sup_{\\rho\\ge1}\\left\\{\\max_P E_{0x}(\\rho,P)-\\rho R\\right\\},\\qquad E_{\\rm sp}(R):=\\sup_{\\rho\\ge0}\\{E_0(\\rho)-\\rho R\\}.$$\nThese functions define lower or upper bounds used on this page; they do no"},{"id":"def-it-one-letter-gallager-exponent-functions","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: Let $W$ be a finite DMC from finite nonempty $\\mathcal X$ to $\\mathcal Y$, with rates and logarithms in nats. For an input law $P$ and $\\rho\\ge0$, define\n$$E_0(\\rho,P):=-\\ln\\sum_{y\\in\\mathcal Y}\\left(\\sum_{x\\in\\mathcal X}P(x)W(y\\mid x)^{1/(1+\\rho)}\\right)^{1+\\rho}.$$\nSeparately, for $\\rho\\ge1$, define $B(x,x'):=\\sum_y\\sqrt{W(y\\mid x)W(y\\mid x')}$ and\n$$E_{0x}(\\rho,P):=-\\rho\\ln\\sum_{x,x'}P(x)P(x')B(x,x')^{1/\\rho}.$$\nFor every $a>0$, $0^a=0$; thus zero channel transitions and zero Bhattacharyya coefficients contribute zero to these sums. These are one-letter functions at a fixed $P$; the global maxima and rate-dependent exponent functions are separate definitions."},{"id":"def-it-point-to-point-joint-source-channel-code","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Let $\\mathcal S,\\mathcal X,\\mathcal Y,\\widehat{\\mathcal S}$ be nonempty finite alphabets, let $P_S$ be a probability vector on $\\mathcal S$, and let $W$ be a finite discrete memoryless channel from $\\mathcal X$ to $\\mathcal Y$ as in [[def-discrete-memoryless-channel]]. For positive integers $k,n$, a deterministic **$(k,n)$ joint source-channel code** is a pair of maps\n$$f_k:\\mathcal S^k\\to\\mathcal X^n,\\qquad g_k:\\mathcal Y^n\\to\\widehat{\\mathcal S}^{\\,k}.$$\nThe source block has law $P_S^{\\otimes k}$, the channel output conditional on input $x^n$ has law $W^n(\\cdot\\mid x^n)$, and the reproduction is $\\widehat S^k=g_k(Y^n)$. The code has no feedback."},{"id":"ex-binary-erasure-channel-capacity","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]]: conditional on $X=x$, the output is $x$ with probability $1-\\epsilon$ and $e$ with probability $\\epsilon$."},{"id":"ex-binary-symmetric-channel-capacity","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]]: the row $W(\\cdot\\mid x)$ assigns probability $1-p$ to $x$ and $p$ to $1-x$."},{"id":"ex-it-dmc-one-shot-error-bound","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F2] [[def-discrete-memoryless-channel]]: a BSC row is a probability vector, and its output law under an input vector is the matrix product $PW$."},{"id":"ex-it-meta-converse-binary-channel","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F3] [[def-discrete-memoryless-channel]]: the BSC has transition probability $1-p$ on $y=x$ and $p$ on $y\\ne x$."},{"id":"ex-it-point-to-point-source-channel-rate-budget","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]]: the BSC is a finite DMC; [[def-discrete-memoryless-channel-information-capacity]] defines $C(W)=\\sup_{P_X}I(X;Y)$ in nats per use."},{"id":"lem-cost-constrained-dmc-achievability","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[A1] [[def-discrete-memoryless-channel]], [[def-finite-dmc-cost-model]], [[def-cost-constrained-dmc-code-and-capacity]], [[def-fixed-length-channel-code]], and [[def-fixed-length-channel-code-errors]]: the product DMC, finite letter cost, deterministic code, uniform-message average error, and constrained information-capacity convention."},{"id":"lem-cost-constrained-dmc-mutual-information-under-average-cost","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F5] [[def-discrete-memoryless-channel]]: conditioned on $X^n$, the output coordinates have product law $\\prod_t W(y_t\\mid X_t)$."},{"id":"lem-discrete-memoryless-channel-block-kernels-are-stochastic","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]]: the block values are $W^n(y^n\\mid x^n)=\\prod_{i=1}^nW(y_i\\mid x_i)$."},{"id":"lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F3] [[def-discrete-memoryless-channel]] and [[def-finite-stochastic-kernel]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: every channel row is a probability vector, and $H(q)=-\\sum_{y:q_y>0}q_y\\ln q_y$ with $0\\ln0=0$."},{"id":"lem-discrete-memoryless-channel-capacity-is-attained","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: For every finite DMC $W$, the supremum $C(W)$ is a maximum: there is an input probability vector $P_X^*$ such that $I(P_X^*;W)=C(W)$."},{"id":"lem-discrete-memoryless-channel-iid-information-density-converges","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: Fix a finite DMC $W$ and input law $P_X$. If $(X_i,Y_i)_{i\\ge1}$ are IID with law $P_X(x)W(y\\mid x)$, then $n^{-1}\\imath_{P_X}(X^n;Y^n)\\to I(P_X;W)$ in probability."},{"id":"lem-discrete-memoryless-channel-information-density-concentration","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F3] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: conditional on a fixed input word, the output law is the product of the corresponding row laws."},{"id":"lem-discrete-memoryless-channel-n-letter-information-bound","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F3] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: $P(Y^n=y^n\\mid X^n=x^n)=\\prod_{i=1}^nW(y_i\\mid x_i)$."},{"id":"lem-finite-relative-mixed-handle-movies-give-marked-kirby-moves","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F3] [[lem-one-handle-surgery-replacement-is-independent-of-the-base-arc]]: Every change of base arc gives finite O2/O3 with its meridian correction and the specified outgoing map."},{"id":"lem-it-channel-resolvability-soft-covering","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]]: $W^n(z^n\\mid u^n)=\\prod_iW(z_i\\mid u_i)$."},{"id":"lem-it-dmc-capacity-output-law-is-unique","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F4] [[def-discrete-memoryless-channel]]: every row $W(\\cdot\\mid x)$ is a probability vector and $PW$ is the induced output law."},{"id":"lem-it-dmc-mutual-information-concave-in-input","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F2] [[def-discrete-memoryless-channel]]: each row $V(\\cdot\\mid x)$ is a probability vector and the output law is $PV$."},{"id":"lem-it-finite-dmc-information-density-concentration","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]]: for the input word $u^n$, the output law is $W^n(y^n\\mid u^n)=\\prod_{i=1}^nW(y_i\\mid u_i)$."},{"id":"lem-it-gallager-input-maxima-attained","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F2] [[def-discrete-memoryless-channel]]: each row $W(\\cdot\\mid x)$ is a probability vector."},{"id":"lem-it-optimized-constant-composition-gallager-identity","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: Let $W$ be a finite DMC. For each $\\rho>0$ and input law $P$, define\n$$E_{0,\\rm cc}(\\rho,P):=\\inf_{V:\\,V(\\cdot\\mid x)\\ll W(\\cdot\\mid x)}\\left\\{\\sum_xP(x)D(V(\\cdot\\mid x)\\|W(\\cdot\\mid x))+\\rho I_P(V)\\right\\},$$\nwhere $V$ ranges over row-stochastic channels on the same alphabets, $I_P(V)$ is the mutual information of $P(x)V(y\\mid x)$, and terms with $P(x)=0$ are omitted. At $\\rho=0$, set $E_{0,\\rm cc}(0,P)=0$. Then\n$$\\max_P E_{0,\\rm cc}(\\rho,P)=\\max_P E_0(\\rho,P),$$\nwith $E_0$ from [[def-it-gallager-and-expurgated-exponent-functions]]. This equality holds for every $\\rho>0$ and is after optimizing over $P$; it is not asserted for each fixed $P$. At $\\rho=0$, both sides are zero under the stated conventions."},{"id":"lem-one-handle-slides-become-relative-kirby-slides-after-trading","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F2] [[lem-one-handle-surgery-replacement-is-independent-of-the-base-arc]]: Arbitrary replacement arc choices are compared with their actual boundary maps by finite O2/O3 moves."},{"id":"lem-qa-37-local-braid-acts-trivially-on-spectators","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: Let $n\\ge1$, $c\\in\\{1,\\tau\\}$, and consider the fixed fusion space\n$V(\\tau^{3n}\\to c)$ with its grouped tree of $n$ consecutive triples and\nouter triple-charge tree. Its orthogonal decomposition is indexed by local\ntriple outputs $a_i\\in\\{1,\\tau\\}$ and has factors\n$$\\left(\\bigotimes_{i=1}^n V(\\tau^3\\to a_i)\\right) \\otimes V(a_1\\otimes\\cdots\\otimes a_n\\to c),$$\nwith zero-dimensional summands omitted. A braid word supported on the\ninternal three strands of the $i$th triple acts on this summand as\n$\\rho_{a_i}(b)$ on $V(\\tau^3\\to a_i)$ and the identity on every other local\ntriple factor and on the outer spectator factor. Reassociating to the fixed\nleft-associated $3n$-leaf tree conjugates this operator by a unitary; its\noperator norm and the stated local-factor action are preserved."},{"id":"thm-cost-constrained-dmc-capacity-formula","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[A1] [[def-discrete-memoryless-channel]], [[def-finite-dmc-cost-model]], and [[def-cost-constrained-dmc-code-and-capacity]]: $C(\\Gamma)$ uses deterministic length-$n$ codes, uniform-message average error and average block cost; $C_I$ is the supremum over input laws with expected letter cost at most $\\Gamma$."},{"id":"thm-discrete-memoryless-channel-alphabet-scoped-strong-converse","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: Let $W$ be a finite DMC with finite nonempty input and output alphabets and no input-cost constraint. For any sequence of length-$n$ codes with $\\liminf_{n\\to\\infty}n^{-1}\\ln M_n>C(W)$, the average success probability tends to zero; hence both average and maximal error tend to one."},{"id":"thm-discrete-memoryless-channel-average-error-converse","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F3] [[def-fixed-length-channel-code]] and [[def-discrete-memoryless-channel]]: $X^n$ is a deterministic function of $J$, and conditional on $J=m$ the output law is $W^n(\\cdot\\mid e(m))$."},{"id":"thm-discrete-memoryless-channel-capacity-formula","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F7] [[def-discrete-memoryless-channel]] and [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: the nonempty input alphabet supplies one input word, and decoding every output to the sole message gives a one-message code with rate zero and zero error."},{"id":"thm-discrete-memoryless-channel-random-coding-achievability","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: For every finite DMC $W$ and every $0\\le R<C(W)$, there are fixed-length codes with $\\liminf_{n\\to\\infty}n^{-1}\\ln M_n\\ge R$ and average error tending to zero."},{"id":"thm-it-error-exponent-zero-above-capacity","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: For every finite unconstrained DMC and every $R>C(W)$,\n$$E^-_{\\rm av}(R)=E^+_{\\rm av}(R)=E^-_{\\rm max}(R)=E^+_{\\rm max}(R)=0.$$\nThese are error-probability exponents; no success-probability exponent is asserted."},{"id":"thm-it-expurgated-error-exponent-lower-bound","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]]: for a block input and output, $W^n(y^n\\mid x^n)=\\prod_iW(y_i\\mid x_i)$."},{"id":"thm-it-normal-approximation-nondegenerate-dmc","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: $W^n(y^n\\mid x^n)=\\prod_iW(y_i\\mid x_i)$ is the DMC block law."},{"id":"thm-it-one-shot-decision-threshold-achievability","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: the block law is $W^n(y^n\\mid x^n)=\\prod_iW(y_i\\mid x_i)$ and is a stochastic kernel."},{"id":"thm-it-one-shot-meta-converse","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F3] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: $W^n(\\cdot\\mid x_m^n)$ is a probability vector for every codeword."},{"id":"thm-it-point-to-point-lossless-source-channel-separation","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: Let $S_1,S_2,\\ldots$ be IID with probability vector $P_S$ on a finite nonempty alphabet $\\mathcal S$, and let $W$ be a finite DMC with capacity $C(W)$ in nats per channel use. Write $H(P_S):=-\\sum_{s:P_S(s)>0}P_S(s)\\ln P_S(s)$ for source entropy in nats. Fix positive integers $n_k$ with $n_k/k\\to\\rho\\in(0,\\infty)$. A deterministic $(k,n_k)$ joint code is as in [[def-it-point-to-point-joint-source-channel-code]]. If $H(P_S)=0$, a zero-error code sequence exists for every such $W$. If $H(P_S)<\\rho C(W)$, there are codes with block error tending to zero. Conversely, every code sequence with block error tending to zero satisfies $H(P_S)\\le\\rho C(W)$. Thus strict violation $H(P_S)>\\rho C(W)$ rules out reliable transmission; the positive-entropy equality boundary is not asserted."},{"id":"thm-it-point-to-point-lossy-source-channel-separation","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Declared dependency; defining/claim use: Let $S_1,S_2,\\ldots$ be IID with probability vector $P_S$ on a finite nonempty alphabet $\\mathcal S$. Let $\\widehat{\\mathcal S}$ be finite nonempty, let $d:\\mathcal S\\times\\widehat{\\mathcal S}\\to[0,d_{\\max}]$ be finite-valued distortion, and let $D_{\\min}:=\\sum_sP_S(s)\\min_{\\hat s}d(s,\\hat s)$. For $D\\ge D_{\\min}$, let $R(D)$ be the finite-alphabet information rate-distortion function in bits from [[def-it-information-rate-distortion-function]] and put $r(D):=(\\ln2)R(D)$ nats per source symbol. Let $W$ be a finite DMC with capacity $C(W)$ nats per channel use, and fix positive integers $n_k$ with $n_k/k\\to\\rho\\in(0,\\infty)$. For either criterion separately—expected distortion $\\limsup_k\\mathbb E d_k\\le D$, or positive-slack excess distortion $\\Pr[d_k>D+\\varepsilon]\\to0$ for every $\\varepsi"},{"id":"thm-it-random-coding-error-exponent","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]] and [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: a length-$n$ code uses the product channel, a deterministic encoder/decoder, and uniform-message average and maximal errors."},{"id":"thm-it-sphere-packing-strict-feasibility-converse","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F1] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: the DMC block law is the product of its row kernels."},{"id":"thm-knowledgeable-frobenius-data-classify-open-closed-sewing","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"[F3] Pairing duality, both snakes, zipper/cozipper transports, cozipper coalgebra preservation, cyclic rotation, and the window/handle/Cardy reductions are proved with every endpoint label retained ([[lem-frobenius-sewing-derived-moves]])."},{"id":"thm-qa-37-arbitrary-n-encoded-circuit","unit":"1","phase":"impact-initial","index":0,"report":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json","dispatch":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.result.json","attempt":"/home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-dispatch/alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.result.json","affected_use":"Assume $\\mathrm{AC}_\\omega$. Fix the inverse-closed Fibonacci SU(2) gate\npackage and its supplied finite base-net certificate\n$(\\mathcal N_0,\\eta_0,L_0)$ from\n[[def-qa-37-fibonacci-braid-gate-set]]. Let $n\\ge1$, let\n$c\\in\\{1,\\tau\\}$ satisfy $V(\\tau^n\\to c)\\ne0$, and let\n$U\\in U(2^n)$ and $\\epsilon>0$. Use the arbitrary-$n$ triple code\n$\\mathcal C_{n,c}$, isometry $J_{n,c}$, and projector $P_{n,c}$ of\n[[def-qa-37-n-triple-fusion-code]]. There exists a finite physical\nFibonacci braid word $b$ and a unit scalar $\\omega$ such that\n$$\\|J_{n,c}^*\\rho(b)J_{n,c} -\\omega(U\\otimes I_{V(\\tau^n\\to c)})\\|_{\\rm op}\\le\\epsilon, \\qquad \\|(I-P_{n,c})\\rho(b)J_{n,c}\\|_{\\rm op}\\le\\epsilon.$$\nThe bounds are uniform over spectator fusion states. The proof composes exact\nQSD, SK approximation of one-qubit SU(2) representatives, and joint B6\ntargets extended safely over spectators. The scalar $\\omega$ is the product\nof braid exponent-sum and one-qubit lift phases; under coherent control it\nmust be retained or corrected. For certified Cauchy target names the B6\ndovetail terminates, but no useful joint-block word-length or search-time\nbound follows. This is a mathematical existence result and does not imply"}]. An earlier initial adjudicator review does not discharge this assignment. Return a genuine current review and repair only confirmed defects.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

This pass retains your own genuine prior reviewer session. Selected same-reviewer obligations for this lane: lem-qc-tqc-fusion-tree-dimension, def-qc-tqc-fixed-charge-encoding, def-qc-tqc-f-symbol, thm-qc-tqc-gauge-covariance, def-qa-37-anyon-task-and-promise, thm-qc-tqc-braid-action-unitary-and-artin, def-qc-tqc-braid-action-from-fusion-data, ex-qc-tqc-fibonacci-data, def-qa-37-phase-reference-cost, lem-qc-tqc-fibonacci-b6-path-projectors-and-artin, alg-qa-37-exhaustive-b6-block-pair-compiler, lem-geometric-dirac-operator-is-well-defined, cex-dirac-on-euclidean-space-is-not-fredholm, lem-discrete-memoryless-channel-block-kernels-are-stochastic, def-discrete-memoryless-channel, lem-discrete-memoryless-channel-capacity-is-attained, def-discrete-memoryless-channel-information-capacity, def-it-point-to-point-joint-source-channel-code, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, def-discrete-memoryless-channel-operational-capacity, lem-discrete-memoryless-channel-n-letter-information-bound, thm-discrete-memoryless-channel-average-error-converse, def-discrete-memoryless-channel-information-density, lem-discrete-memoryless-channel-iid-information-density-converges, thm-discrete-memoryless-channel-random-coding-achievability, thm-discrete-memoryless-channel-capacity-formula, thm-it-point-to-point-lossless-source-channel-separation, cex-it-asymptotic-source-channel-threshold-does-not-give-zero-error-at-finite-blocklength, thm-it-holevo-measurement-bound, cex-it-ensemble-holevo-information-is-not-measured-by-a-fixed-povm, cex-it-expected-random-code-error-does-not-give-maximal-error, cex-qc-tqc-controlled-global-phase, lem-cartan-dieudonne-real-nondegenerate-reflection-factorization, def-real-clifford-group-and-normalized-pin-spin, lem-real-local-spin-lift-by-matrix-logarithm, thm-real-pin-spin-image-kernel-and-compactness, thm-real-pin-spin-topological-double-covers, cex-tangent-bundle-rp2-has-no-spin-structure, lem-euclidean-spin-sphere-bundle-local-sections, lem-real-spin-norm-detects-components, cor-euclidean-spin-is-universal-cover, def-conformal-vertex-algebra, thm-real-complex-clifford-algebra-classification, thm-complex-spin-modules-and-compact-reducibility, lem-spinor-and-clifford-associated-bundles-are-well-defined, def-even-dimensional-spinor-bundle-chirality-and-spin-connection, def-finite-dmc-cost-model, def-finite-dmc-feedback-code, def-formal-star-product-on-a-poisson-manifold, lem-elementary-surface-sewing-relations, lem-frobenius-sewing-derived-moves, def-frobenius-object-and-knowledgeable-sewing-data, def-fusion-two-category, lem-finite-kl-nonnegative-choice-free, def-general-process-information-rate, def-it-classical-quantum-memoryless-channel, def-it-wiretap-channel, def-it-degraded-wiretap-channel, def-it-finite-dmc-feedback-code, def-it-one-letter-gallager-exponent-functions, lem-it-gallager-input-maxima-attained, def-it-gallager-and-expurgated-exponent-functions, def-it-quantum-channel-private-information, lem-it-private-information-is-coherent-information-difference, def-it-quantum-channel-operational-capacities, def-it-weak-and-strong-secrecy, def-it-wiretap-secrecy-capacities, def-modc-relative-deligne-product, def-past-information-density-finite-alphabet, def-qa-37-fusion-input-encoding, def-qa-37-fusion-measurement, def-qa-37-n-triple-fusion-code, thm-qa-37-jrs-leakage-bound, lem-qa-37-total-error-budget, def-qa-37-physical-locality-boundary, def-qc-tqc-six-anyon-encoded-subspace, def-qc-tqc-universality-notions, lem-qkd-abort-aware-ideal-output-is-state, def-qkd-abort-aware-composable-security, def-rational-cherednik-kz-functor-and-finite-hecke-algebra, lem-relative-surface-collars-and-elementary-decomposition, lem-boundary-relative-two-dimensional-surface-normal-form, def-relative-open-closed-surface-normal-form, def-standard-borel-conditional-mutual-information, lem-affine-vacuum-module-pbw-basis, def-universal-affine-vacuum-module, def-virasoro-highest-weight-module, def-weighted-lagrangian-ribbon-bordism, thm-yangian-evaluation-module-well-defined, def-yangian-periodic-fundamental-chain, ex-binary-erasure-channel-capacity, ex-binary-symmetric-channel-capacity, ex-coarsening-conditioning-can-increase-conditional-mutual-information, ex-codimension-typed-defect-composition, ex-countable-input-channel-finite-capacity-supremum-not-attained, thm-it-one-shot-decision-threshold-achievability, ex-it-dmc-one-shot-error-bound, thm-it-one-shot-meta-converse, ex-it-meta-converse-binary-channel, ex-it-point-to-point-source-channel-rate-budget, lem-fixed-vertical-height-relative-morse-handle-normalization, lem-framed-circles-in-four-dimensional-two-handle-traces-move-to-the-base, lem-interior-one-handle-trade-and-framed-circle-surgery-pair, lem-boundary-marked-five-bordisms-give-common-middle-two-handle-traces, lem-continuous-one-handle-surgery-replacement-gives-relative-kirby-moves, lem-cost-constrained-dmc-achievability, lem-cost-constrained-dmc-mutual-information-under-average-cost, lem-decorated-graphs-lift-through-relative-surgery-calculus, lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound, lem-discrete-memoryless-channel-information-density-concentration, lem-relative-one-parameter-morse-path-with-finite-events, lem-parametrized-relative-elementary-handle-comparison, lem-relative-descending-path-with-finite-same-index-passages, lem-parametric-index-grouping-preserves-a-relative-descending-path, lem-index-grouped-relative-descending-paths-give-based-framed-handle-movies, lem-one-handle-surgery-replacement-is-independent-of-the-base-arc, lem-one-handle-slides-become-relative-kirby-slides-after-trading, lem-finite-relative-mixed-handle-movies-give-marked-kirby-moves, lem-it-finite-dmc-information-density-concentration, lem-it-channel-resolvability-soft-covering, lem-it-dmc-capacity-output-law-is-unique, lem-it-dmc-mutual-information-concave-in-input, lem-it-optimized-constant-composition-gallager-identity, lem-qa-37-local-braid-acts-trivially-on-spectators, thm-temperley-lieb-diagram-category-laws, lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness, lem-temperley-lieb-general-theta-net-evaluation, thm-cost-constrained-dmc-capacity-formula, thm-discrete-memoryless-channel-alphabet-scoped-strong-converse, thm-it-error-exponent-zero-above-capacity, thm-it-expurgated-error-exponent-lower-bound, thm-it-normal-approximation-nondegenerate-dmc, thm-it-point-to-point-lossy-source-channel-separation, thm-it-random-coding-error-exponent, thm-it-sphere-packing-strict-feasibility-converse, thm-knowledgeable-frobenius-data-classify-open-closed-sewing, thm-qa-37-arbitrary-n-encoded-circuit. Actually examine each current assigned consumer against your earlier supplier changes. Another reviewer may separately owe the same consumer in a later serialized pass; your review supplies only your own obligation.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-qc-tqc-fusion-tree-dimension",
    "reason": "Proof 1.2 incorrectly resolved the entire tensor identity using only fixed-output d inclusions. Summing first over all simple outputs and observing that maps to d kill the other summands proves completeness; the unit representative now also makes the empty-tree base literal. Statement unchanged. Synchronized its owning contract quotation or derivation with the examined current source.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/0",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-qc-tqc-braid-action-unitary-and-artin",
    "reason": "Replaced Proof 2.1's literal restriction of tensor-object braids to a Hom space by B_b(f)=f composed with b inverse. Its composition identity transports Artin relations and matches the declared pullback R coordinates; generator unitarity and the Statement are preserved. Synchronized its owning contract quotation or derivation with the examined current source.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/5",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-cartan-dieudonne-real-nondegenerate-reflection-factorization",
    "reason": "Corrected the Remarks locator to step 1.3, which proves the simultaneous anisotropic selection by a nonzero real polynomial. Step 1.2 instead treats an anisotropic fixed vector. The reflection bound, determinant parity and real-field hypotheses are unchanged.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/15",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-real-pin-spin-image-kernel-and-compactness",
    "reason": "Qualified F3's normalized-vector generation by positive dimension and retained Pin(0)=Spin_full(0)={1,-1}. The norm-locus kernel proof and explicit finite zero-dimensional compactness branch remain valid; neither exact-extension Statement changes. Synchronized its owning contract quotation or derivation with the examined current source.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/18",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-real-pin-spin-topological-double-covers",
    "reason": "Corrected F3 to restrict normalized-vector products to positive dimension and explicitly preserve the two scalar elements at zero. Proof 3.1 already handles the discrete two-point-to-point covering before using parity; local logarithm sheets and the Statement are unchanged. Synchronized its owning contract quotation or derivation with the examined current source.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/19",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-real-complex-clifford-algebra-classification",
    "reason": "Proof 2.1 now uses q-p=8t+s with 0<=s<8, matching the pure-dimension decomposition in 1.2. The matrix factor 16^t and all negative-signature row exponents then agree with n=8t+s+2m, including (0,9). The classification Statement is unchanged. Synchronized its owning contract quotation or derivation with the examined current source.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/25",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-discrete-memoryless-channel",
    "reason": "Declared n>=1 and the shifted coordinate labels a_i=a^n(i-1) for 1<=i<=n, so every factor in W^n is defined under the library function-power convention. This bijection enumerates all coordinates; nonnegativity and a finite product of row sums give a stochastic kernel, including n=1 and zero transitions. The operational model is preserved.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/34",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-qa-37-n-triple-fusion-code",
    "reason": "Changed the defining construction heading from Statement to Definition, preserving its full text and proof. The actual-unit representative convention gives the same two triple paths and complete spectator tree basis; unitary rebracketing still yields an isometry and JJ* projector for every admissible n,c.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/46",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-rational-cherednik-kz-functor-and-finite-hecke-algebra",
    "reason": "The positive meridian lift uses theta=2pi/e_H, which lies in the corrected lemma's required interval (0,2pi], including e_H=1. Its residue and endpoint convention therefore retain the displayed roots. Added the previously undeclared direct dependency on that explicitly used meridian lemma; the Definition is unchanged.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/54",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-frobenius-sewing-derived-moves",
    "reason": "Corrected the Statement's nonexistent faithful-bending locator 1.5 to 4.1. That step explicitly constructs a left inverse to bending using the snake, including reversed tensor duals, so formal map equalities remain justified without assuming vector-space evaluations detect surfaces.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/56",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-boundary-relative-two-dimensional-surface-normal-form",
    "reason": "Reconciled Proof 7.1 and 9.1 with the candidate Definition: multiplication follows incoming object orientation, reverse to induced surface-boundary traversal, and P restores that order starting at each least slot. The typed first-event identities and closed-spider reductions remain unchanged. The faithful-bending supplier's corrected 4.1 locator refers to the same proved argument. Synchronized its owning contract quotation or derivation with the examined current source.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/59",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-temperley-lieb-diagram-category-laws",
    "reason": "Corrected Proof 4.1 to distinguish the total three-block size from the right block's offset m+m'. Both bracketings now visibly have offsets 0,m,m+m' and equal total size. The stacking and strict monoidal Statement, including object zero, is unchanged. Synchronized its owning contract quotation or derivation with the examined current source.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/69",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness",
    "reason": "Reconciled F1 with the corrected recursion domain r>=1 and its explicit p0,p1 bases. Proof 1.1 now verifies those scalar ranks directly before the rank-two base, avoiding any U0 or unproved low-rank induction assertion. The Statement and its partial-closure formulas are preserved. Synchronized its owning contract quotation or derivation with the examined current source.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/71",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-one-handle-surgery-replacement-is-independent-of-the-base-arc",
    "reason": "Added an oriented stage and orientation-compatible attachment to the Statement and Proof 1.1, discharging the trade and continuous-replacement suppliers' closed-core normal-bundle hypothesis. A base orientation alone allowed a twisted one-handle with no product framing. Both replacement arcs now give framed closed cores; the annulus, meridian correction and actual outgoing maps are retained. Synchronized its owning contract quotation or derivation with the examined current source.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/83",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "alg-qa-37-exhaustive-b6-block-pair-compiler",
    "reason": "Removed the certificate-correctness proof and its now-unused Facts block, set proof provenance to not-applicable, and preserved the operational Definition verbatim. Coordinate error bounds prove soundness in the separately owned termination companion; its exact proof handoff is recorded. The extended resource ledger's circuit and nonoracle coordinates are not applicable to this abstract search. Synchronized its owning contract quotation or derivation with the examined current source.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/84",
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-coarsening-conditioning-can-increase-conditional-mutual-information",
    "reason": "Added the already used AC hypothesis to the Statement; made the constant-W calculation one tagged paragraph and adopted the precheck's phase numbering with matching references. Both calculations use conditioning-first law order: given Z the reference equals the joint law, while given constant W the diagonal ratios are two. The values remain 0 and ln 2.",
    "status": "fixed",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u1.json#/reviews/85",
    "independent_review_of_repair": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "reason": "All 55 direct item consumers are draft frozen-frontier items. No published or outside-frontier item defect or repair was found; no published-ledger mathematical classification or new audit row is appropriate. Five draft page placement/prose uses are recorded separately.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-open-finding",
    "id": "def-countable-dmc-zero-cost-information-capacity",
    "route": "ordinary frontier owner; unassigned source left unchanged",
    "affected_use": "Definition: At blocklength n, W^n(y^n|x^n)=product_{t=1}^n W(y_t|x_t), without its own shifted function-coordinate labels.",
    "reason": "The positive-input-label correction preserves the assigned example, but this separate unassigned defining block-product notation has the same local zero-based function-domain issue. Route to its actual frontier owner; no edit, adjudication or new interface event is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-measure-theoretic-mutual-information",
    "status": "fixed",
    "origin": "owner-confirmed-native-open-finding",
    "reason": "The actual KL Definition assumes AC exactly when P is absolutely continuous with respect to its reference. Exposed that inherited branch premise, preserving arbitrary measurable spaces, marginal product law, nats, and the choice-free singular infinity branch. Original native u5 finding and bound root instructions examined; no new density choice is introduced.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/0",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-law-entropy-as-self-mutual-information",
    "status": "fixed",
    "origin": "owner-confirmed-native-open-finding",
    "reason": "Self-MI uses the repaired MI/KL interface on the diagonal law. Stated AC only on its absolutely continuous branch, with the singular branch still infinity without that premise. The diagonal map is measurable on arbitrary product sigma algebras; no phase-space restriction or entropy subtraction was introduced. Original native u5 finding and bound root instructions examined.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/1",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "def-finite-acyclic-quiver-stability-data",
    "status": "fixed",
    "origin": "owner-confirmed-native-open-finding",
    "reason": "The final groupoid assertion quantified all dimension vectors although the phase predicate covered only nonzero representations. Included zero as semistable without phase, with Rep_0=Spec k, trivial G_0 and rational-point mass one. Nonzero stable objects, HN factors and every nonzero phase inequality are preserved. Original u56 finding and bound root instructions examined.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/2",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-mutual-information-chain-rule",
    "status": "fixed",
    "origin": "assigned-consumer-interface-repair",
    "reason": "The proof and Given/A1 already assume AC for disintegration and KL. Added that actual premise to the Statement; conditioning-first P_ZXY and both common-marginal KL calculations already match the corrected CMI reference. Kept all extended sums nonnegative and removed intermediate tag groups within the same proof paragraphs.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/3",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-null-conditional-kernel-version-does-not-change-information",
    "status": "fixed",
    "origin": "assigned-consumer-interface-repair",
    "reason": "The conditioning-first P_ZXY and null-fiber version argument already match the repaired CMI reference. Added AC to the Statement as required by its Given/A1 and KL suppliers, and cited the existing complete-Lebesgue-measure theorem for countable additivity before normalizing the interval restriction. The infinity at the null fiber still integrates to zero.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/4",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-it-random-cut-ergodic-block-channel-approximation",
    "status": "fixed",
    "origin": "assigned-consumer-interface-repair",
    "reason": "The conditioning-first reference and explicit AC already justify the marker-process CMI chains and coordinate swaps in 4.2. Repaired the separate F4 probability construction by citing countable additivity from the existing complete-Lebesgue-measure theorem before its box normalization. Statement, distortion and information estimates are unchanged.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-it-classical-wiretap-auxiliary-cardinality",
    "status": "fixed",
    "origin": "owner-confirmed-step4-reader-concern",
    "reason": "The changed wiretap coordinates are not used in this single-letter support reduction. Corrected larger to smaller: if both endpoint averages exceeded G(0), affinity would contradict its convex-combination value. Fixing the posterior average and decreasing its F-average increases the objective; compact finite parameter space still gives attainment.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/6",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-it-exponential-cq-spectral-projectors",
    "status": "fixed",
    "origin": "owner-confirmed-step4-reader-concern",
    "reason": "The corrected cq marginal citation preserves the ensemble average used for P_n and finite spectral sampling used for Q_xn. Replaced the overescaped exponential commands in F5 with the actual derivative formula of its supplier. The finite-support Chernoff estimate, constant-variable case and zero-probability-word algebraic bounds remain intact.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/7",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-it-hsw-classical-quantum-channel-capacity",
    "status": "fixed",
    "origin": "owner-confirmed-step4-reader-concern",
    "reason": "The cq marginal and Holevo expression are unchanged by the supplier citation repair. Closed the actual code-interface gap in 2.1 by merging the packing failure effect into message 1; positivity, completeness and every per-codebook error bound are preserved, including a singleton message. Finite lexicographic selection and the existing capacity converse then apply to the stipulated M-outcome codes.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/8",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-qa-37-exhaustive-b6-compiler-terminates",
    "status": "fixed",
    "origin": "bound-proof-companion-relocation",
    "reason": "Moved the existing two coordinate-error certificate arguments into the termination companion and restricted F3 to the operational compiler instructions. Two coordinate approximations total less than 3d*2^-p in Frobenius norm, so the 4d rational margin certifies both operator errors. Joint density and finite dovetailing supply termination under AComega only; the Statement and absence of a search bound are preserved.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/10",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-qc-tqc-toric-cycle-quotient",
    "status": "fixed",
    "origin": "owner-confirmed-step4-reader-concern",
    "reason": "The dual cycle boundary subspace is spanned by dual faces, which are stars about primal vertices. Replaced the incorrect dual vertex terminology in the Statement. The explicit spanning tree, L^2+1 cycle dimension, L^2-1 boundary dimension and two winding representatives prove the same quotient without changing any chain or parity calculation.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/11",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-temperley-lieb-link-state-restriction-filtration",
    "status": "fixed",
    "origin": "owner-confirmed-step4-reader-concern",
    "reason": "Reflection fixes scalars and cannot itself invert q. Read Appendix A, Proposition A.2, equations A.5 and A.8-A.11, including the diagrams on PDF pages 46-47. Step 7.1 now computes the second smoothing branch with its own -v^-1 coefficients, obtaining q^(-s-1), including s=0, before comparing reflected matchings. The scalar sum, exact filtration and noncritical retraction criterion are preserved.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/12",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1204.4505"
    ],
    "familiar": false,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "thm-real-spin-modules-and-real-types",
    "status": "fixed",
    "origin": "assigned-consumer-interface-repair",
    "reason": "F2 incorrectly retained normalized-vector generation at V=0 after the supplier correction. Qualified it to positive dimension and explicitly included Spin(0)={plus/minus1}. The span proof still contains 1 and every even PBW monomial and has the same reverse inclusion, so its Statement, dimensions and real module types are unchanged.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/66",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "ex-rank-four-spin-thom-coefficient-is-ksp",
    "status": "fixed",
    "origin": "assigned-consumer-interface-repair",
    "reason": "The repaired Thom supplier assumes a finite CW base, already present in this example Given but omitted in its public Example. Made that existing base hypothesis explicit. The quaternionic commutant and balanced KSp coefficient argument, including the point in rank four, use exactly the preserved supplier conclusion.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/67",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-fixed-finding",
    "id": "lem-filtered-l-infinity-taylor-map-extends-to-completed-coalgebra",
    "status": "fixed",
    "origin": "assigned-consumer-interface-repair",
    "reason": "Positive-input filtration bounds make F^1W a complete subalgebra, not necessarily an ideal under mixed inputs. Replaced the two inaccurate ideal labels in Statement and 1.1. Every monomial, Q/F partition, exponential and marked-input convergence argument uses only positive inputs and preserves total weight, so all actual completion identities remain unchanged.",
    "evidence": "research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-impact-initial-r1-u2.json#/reviews/68",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review_of_repair": false
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "The seven literal Statement/Definition events have only draft frozen-frontier direct item consumers. Their exact uses and dispositions are inventoried in downstream_review, with page references separately recorded. No published item or outside-frontier consumer was found defective or edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-completed-repairs-and-preserve-native-initial-evidence",
    "path": "research/defect-ledger.jsonl",
    "defect_ids": [
      "nm81-step5-impact-initial-r1-u3-cex-it-expected-random-code-error-does-not-give-maximal-error",
      "nm81-step5-impact-initial-r1-u3-ex-it-dmc-one-shot-error-bound",
      "nm81-step5-impact-initial-r1-u3-ex-it-meta-converse-binary-channel",
      "nm81-step5-impact-initial-r1-u3-cex-temperley-lieb-zero-loop-generator-is-zero",
      "nm81-step5-impact-initial-r1-u3-cex-self-adjoint-part-need-not-be-associative-subalgebra",
      "nm81-step5-impact-initial-r1-u3-lem-it-finite-unitary-averaging-decoupling-bound",
      "nm81-step5-impact-initial-r1-u3-lem-it-flat-spectral-type-information-approximation",
      "nm81-step5-impact-initial-r1-u3-lem-qc-tqc-contractible-disk-lifts-to-plane",
      "nm81-step5-impact-initial-r1-u3-thm-it-schumacher-quantum-source-coding",
      "nm81-step5-impact-initial-r1-u3-lem-it-qudit-erasure-channel-complement-and-degradability",
      "nm81-step5-impact-initial-r1-u3-lem-temperley-lieb-jones-wenzl-recursion-properties",
      "nm81-step5-impact-initial-r1-u3-lem-green-coproduct-products-converge",
      "nm81-step5-impact-initial-r1-u3-lem-state-field-reconstruction-from-local-generators",
      "nm81-step5-impact-initial-r1-u3-def-it-two-user-discrete-memoryless-mac-code",
      "nm81-step5-impact-initial-r1-u3-def-finite-alphabet-conditional-entropy-given-observation",
      "nm81-step5-impact-initial-r1-u3-ex-it-gaussian-distortion-waterline",
      "nm81-step5-impact-initial-r1-u3-ex-d4-helicity-and-continuous-spin-central-parities",
      "nm81-step5-impact-initial-r1-u3-thm-countable-mode-car-has-universal-inductive-limit-norm-union-notation",
      "nm81-step5-impact-initial-r1-u3-thm-countable-mode-car-has-universal-inductive-limit-norm-adjointable-target",
      "nm81-step5-impact-initial-r1-u3-thm-modc-relative-deligne-product-is-algebra-tensor-product",
      "nm81-step5-impact-initial-r1-u3-def-motivic-hall-algebra-of-a-finite-quiver",
      "nm81-step5-impact-initial-r1-u3-thm-lz77-phrase-length-entropy-rate",
      "nm81-step5-impact-initial-r1-u3-rem-preprojective-coha-and-nakajima-action-source-boundaries",
      "nm81-step5-impact-initial-r1-u3-cex-pa36-positive-twist-global-sections-fail",
      "nm81-step5-impact-initial-r1-u3-ex-pa36-integral-line-bundle-translation",
      "nm81-step5-impact-initial-r1-u3-thm-mutual-information-and-conditional-mutual-information-quantization",
      "nm81-step5-impact-initial-r1-u3-lem-root-of-unity-integral-weyl-specialization",
      "nm81-step5-impact-initial-r1-u3-lem-root-of-unity-weyl-quantum-dimensions-and-affine-signs",
      "nm81-step5-impact-initial-r1-u3-ex-rt-genus-two-factorization-dimension",
      "nm81-step5-impact-initial-r1-u3-ex-su2-ell-four-modular-data",
      "nm81-step5-impact-initial-r1-u3-lem-heisenberg-group-lagrangian-splitting-and-dual-orbit",
      "nm81-step5-impact-initial-r1-u3-lem-positive-green-pairing-specializes-the-integral-half-into-the-composition-algebra",
      "nm81-step5-impact-initial-r1-u3-native-initial-thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap",
      "nm81-step5-impact-initial-r1-u3-native-initial-thm-mutual-information-and-conditional-mutual-information-equality-conditions",
      "nm81-step5-impact-initial-r1-u3-native-initial-lem-temperley-lieb-signed-forest-candidates-and-their-composition",
      "nm81-step5-impact-initial-r1-u3-native-initial-cor-rt-torus-and-state-dimension-formula",
      "nm81-step5-impact-initial-r1-u3-native-initial-ex-su2-ell-three-modular-data"
    ],
    "reason": "Recorded actual current repairs separately from five unchanged genuine native initial confirmed-defect repairs. Original native model/context/preimage references are retained without issuing new adjudication decisions."
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "action": "no-update-required",
    "path": "research/published-consumer-supplier-ledger.md",
    "reason": "All discovered direct consumers are draft members of the frozen frontier. No published or outside-frontier defect or repair was found; no published-consumer ledger update is required."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "lem-qc-tqc-fusion-tree-dimension",
  "def-qc-tqc-fixed-charge-encoding",
  "def-qc-tqc-f-symbol",
  "thm-qc-tqc-gauge-covariance",
  "def-qa-37-anyon-task-and-promise",
  "thm-qc-tqc-braid-action-unitary-and-artin",
  "def-qc-tqc-braid-action-from-fusion-data",
  "ex-qc-tqc-fibonacci-data",
  "def-qa-37-phase-reference-cost",
  "lem-qc-tqc-fibonacci-b6-path-projectors-and-artin",
  "alg-qa-37-exhaustive-b6-block-pair-compiler",
  "lem-geometric-dirac-operator-is-well-defined",
  "cex-dirac-on-euclidean-space-is-not-fredholm",
  "lem-discrete-memoryless-channel-block-kernels-are-stochastic",
  "def-discrete-memoryless-channel",
  "lem-discrete-memoryless-channel-capacity-is-attained",
  "def-discrete-memoryless-channel-information-capacity",
  "def-it-point-to-point-joint-source-channel-code",
  "def-fixed-length-channel-code",
  "def-fixed-length-channel-code-errors",
  "def-discrete-memoryless-channel-operational-capacity",
  "lem-discrete-memoryless-channel-n-letter-information-bound",
  "thm-discrete-memoryless-channel-average-error-converse",
  "def-discrete-memoryless-channel-information-density",
  "lem-discrete-memoryless-channel-iid-information-density-converges",
  "thm-discrete-memoryless-channel-random-coding-achievability",
  "thm-discrete-memoryless-channel-capacity-formula",
  "thm-it-point-to-point-lossless-source-channel-separation",
  "cex-it-asymptotic-source-channel-threshold-does-not-give-zero-error-at-finite-blocklength",
  "thm-it-holevo-measurement-bound",
  "cex-it-ensemble-holevo-information-is-not-measured-by-a-fixed-povm",
  "cex-it-expected-random-code-error-does-not-give-maximal-error",
  "cex-qc-tqc-controlled-global-phase",
  "lem-cartan-dieudonne-real-nondegenerate-reflection-factorization",
  "def-real-clifford-group-and-normalized-pin-spin",
  "lem-real-local-spin-lift-by-matrix-logarithm",
  "thm-real-pin-spin-image-kernel-and-compactness",
  "thm-real-pin-spin-topological-double-covers",
  "cex-tangent-bundle-rp2-has-no-spin-structure",
  "lem-euclidean-spin-sphere-bundle-local-sections",
  "lem-real-spin-norm-detects-components",
  "cor-euclidean-spin-is-universal-cover",
  "def-conformal-vertex-algebra",
  "thm-real-complex-clifford-algebra-classification",
  "thm-complex-spin-modules-and-compact-reducibility",
  "lem-spinor-and-clifford-associated-bundles-are-well-defined",
  "def-even-dimensional-spinor-bundle-chirality-and-spin-connection",
  "def-finite-dmc-cost-model",
  "def-finite-dmc-feedback-code",
  "def-formal-star-product-on-a-poisson-manifold",
  "lem-elementary-surface-sewing-relations",
  "lem-frobenius-sewing-derived-moves",
  "def-frobenius-object-and-knowledgeable-sewing-data",
  "def-fusion-two-category",
  "lem-finite-kl-nonnegative-choice-free",
  "def-general-process-information-rate",
  "def-it-classical-quantum-memoryless-channel",
  "def-it-wiretap-channel",
  "def-it-degraded-wiretap-channel",
  "def-it-finite-dmc-feedback-code",
  "def-it-one-letter-gallager-exponent-functions",
  "lem-it-gallager-input-maxima-attained",
  "def-it-gallager-and-expurgated-exponent-functions",
  "def-it-quantum-channel-private-information",
  "lem-it-private-information-is-coherent-information-difference",
  "def-it-quantum-channel-operational-capacities",
  "def-it-weak-and-strong-secrecy",
  "def-it-wiretap-secrecy-capacities",
  "def-modc-relative-deligne-product",
  "def-past-information-density-finite-alphabet",
  "def-qa-37-fusion-input-encoding",
  "def-qa-37-fusion-measurement",
  "def-qa-37-n-triple-fusion-code",
  "thm-qa-37-jrs-leakage-bound",
  "lem-qa-37-total-error-budget",
  "def-qa-37-physical-locality-boundary",
  "def-qc-tqc-six-anyon-encoded-subspace",
  "def-qc-tqc-universality-notions",
  "lem-qkd-abort-aware-ideal-output-is-state",
  "def-qkd-abort-aware-composable-security",
  "def-rational-cherednik-kz-functor-and-finite-hecke-algebra",
  "lem-relative-surface-collars-and-elementary-decomposition",
  "lem-boundary-relative-two-dimensional-surface-normal-form",
  "def-relative-open-closed-surface-normal-form",
  "def-standard-borel-conditional-mutual-information",
  "lem-affine-vacuum-module-pbw-basis",
  "def-universal-affine-vacuum-module",
  "def-virasoro-highest-weight-module",
  "def-weighted-lagrangian-ribbon-bordism",
  "thm-yangian-evaluation-module-well-defined",
  "def-yangian-periodic-fundamental-chain",
  "ex-binary-erasure-channel-capacity",
  "ex-binary-symmetric-channel-capacity",
  "ex-coarsening-conditioning-can-increase-conditional-mutual-information",
  "ex-codimension-typed-defect-composition",
  "ex-countable-input-channel-finite-capacity-supremum-not-attained",
  "thm-it-one-shot-decision-threshold-achievability",
  "ex-it-dmc-one-shot-error-bound",
  "thm-it-one-shot-meta-converse",
  "ex-it-meta-converse-binary-channel",
  "ex-it-point-to-point-source-channel-rate-budget",
  "lem-fixed-vertical-height-relative-morse-handle-normalization",
  "lem-framed-circles-in-four-dimensional-two-handle-traces-move-to-the-base",
  "lem-interior-one-handle-trade-and-framed-circle-surgery-pair",
  "lem-boundary-marked-five-bordisms-give-common-middle-two-handle-traces",
  "lem-continuous-one-handle-surgery-replacement-gives-relative-kirby-moves",
  "lem-cost-constrained-dmc-achievability",
  "lem-cost-constrained-dmc-mutual-information-under-average-cost",
  "lem-decorated-graphs-lift-through-relative-surgery-calculus",
  "lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound",
  "lem-discrete-memoryless-channel-information-density-concentration",
  "lem-relative-one-parameter-morse-path-with-finite-events",
  "lem-parametrized-relative-elementary-handle-comparison",
  "lem-relative-descending-path-with-finite-same-index-passages",
  "lem-parametric-index-grouping-preserves-a-relative-descending-path",
  "lem-index-grouped-relative-descending-paths-give-based-framed-handle-movies",
  "lem-one-handle-surgery-replacement-is-independent-of-the-base-arc",
  "lem-one-handle-slides-become-relative-kirby-slides-after-trading",
  "lem-finite-relative-mixed-handle-movies-give-marked-kirby-moves",
  "lem-it-finite-dmc-information-density-concentration",
  "lem-it-channel-resolvability-soft-covering",
  "lem-it-dmc-capacity-output-law-is-unique",
  "lem-it-dmc-mutual-information-concave-in-input",
  "lem-it-optimized-constant-composition-gallager-identity",
  "lem-qa-37-local-braid-acts-trivially-on-spectators",
  "thm-temperley-lieb-diagram-category-laws",
  "lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness",
  "lem-temperley-lieb-general-theta-net-evaluation",
  "thm-cost-constrained-dmc-capacity-formula",
  "thm-discrete-memoryless-channel-alphabet-scoped-strong-converse",
  "thm-it-error-exponent-zero-above-capacity",
  "thm-it-expurgated-error-exponent-lower-bound",
  "thm-it-normal-approximation-nondegenerate-dmc",
  "thm-it-point-to-point-lossy-source-channel-separation",
  "thm-it-random-coding-error-exponent",
  "thm-it-sphere-packing-strict-feasibility-converse",
  "thm-knowledgeable-frobenius-data-classify-open-closed-sewing",
  "thm-qa-37-arbitrary-n-encoded-circuit"
]


