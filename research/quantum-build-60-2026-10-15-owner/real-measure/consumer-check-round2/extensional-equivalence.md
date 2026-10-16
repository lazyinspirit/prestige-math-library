These are mathematical interface checks for the proposed repairs, not new audit receipts. Let E be the ordered extended real line of `def-extended-reals`. Its reflection exchanges the two infinities and is ordinary negation on real numbers. Its partial addition excludes exactly the two opposite-infinity pairs.

For every a in E, put P(a)=max(a,0), N(a)=max(-a,0), M(a)=max(a,-a). The exhaustive cases give:

| a | P(a) | N(a) | P(a)+(-N(a)) | P(a)+N(a) | M(a) |
|---|---|---|---|---|---|
| -∞ | 0 | +∞ | -∞ | +∞ | +∞ |
| finite a<0 | 0 | -a | a | -a | -a |
| 0 | 0 | 0 | 0 | 0 | 0 |
| finite a>0 | a | 0 | a | a | a |
| +∞ | +∞ | 0 | +∞ | +∞ | +∞ |

Each row follows directly from total order, reflection and the real arithmetic clauses. In the first sum at least one summand is zero, so no excluded pair occurs. In the second both summands are nonnegative, so no excluded pair occurs. Consequently the two identities hold on the entire extended real domain, including infinite values, without integrability, finiteness, a measure, choice, or an almost-everywhere exception. Pointwise composition with any f:X→E proves f=f⁺+(-f⁻) and max(f,-f)=f⁺+f⁻ on every X, including the empty set. This also proves the zero-side assertion, |f|≥0, |f|=0 iff f=0, |f|=f for f≥0, and the familiar part identities (-f)⁺=f⁻, (-f)⁻=f⁺.

There is a precise typing qualification. The old parts definition wrote f⁺−f⁻ and |f| although its scalar supplier explicitly defines no subtraction or absolute value on E. One cannot assert an extensional equality with an undefined scalar expression. The original arithmetic proof explicitly identifies the intended function magnitude with max(f,-f). The proposed parts definition makes that already-used function interpretation explicit, and declares f⁺−f⁻ an abbreviation for the defined sum above. Thus the repair elaborates the intended full-domain function identity; it does not retroactively make undefined scalar subtraction meaningful. On real-valued functions both formulas are exactly ordinary real subtraction and absolute value. Complex moduli, vector norms, total variation, signed-measure Jordan parts, shock traces, return times and superscript labels are different typed objects; this function notation changes none of them.

For the product compare the intended total pointwise operation in the original zero-infinity remark with the proposed ⊙_X. The original partial scalar product supplies real multiplication and the nonzero sign rule at infinite factors; the remark supplies zero at all zero-infinity function-value pairs (its phrase ‘one factor’ is symmetric). Both function operations therefore have this complete case table, with p,q arbitrary positive finite reals:

| first \ second | -∞ | -q | 0 | q | +∞ |
|---|---|---|---|---|---|
| -∞ | +∞ | +∞ | 0 | -∞ | -∞ |
| -p | +∞ | pq | 0 | -pq | -∞ |
| 0 | 0 | 0 | 0 | 0 | 0 |
| p | -∞ | -pq | 0 | pq | +∞ |
| +∞ | -∞ | -∞ | 0 | +∞ | +∞ |

The table is exhaustive because every nonzero extended value is finite of one sign or one of the two infinities. Real-valued zero rows agree with field multiplication. Infinite nonzero rows follow exactly the partial-product sign clauses. The four zero-infinity cells have the original function convention's value zero. Hence for all f,g:X→E the total pointwise values agree everywhere, including when X is empty. The new supplier's domain of all functions extends the planning recipe's restriction to measurable inputs but does not change any output on the original measurable inputs. Its codomain is functions, and no measurability conclusion is part of this definition.

For real c, the constant-function operation c-underlined ⊙_X f has exactly the original scalar-multiple function values: c=0 gives zero for every extended value, c>0 preserves the sign of an infinity and uses field scaling at finite values, and c<0 exchanges infinite signs and uses field scaling at finite values. The four arithmetic-theorem clauses thus retain precisely their original hypotheses and conclusions on arbitrary measurable spaces. The sum clause remains conditional on pointwise definedness. The maximum/minimum/part conclusions remain unchanged. Magnitude remains included, not removed. The product remains total and measurable, not restricted to scalar-defined products.

To verify the signed reconstruction used in the repaired proof, if either input is zero, all four sign products vanish. For nonzero inputs exactly one of f⁺g⁺, f⁻g⁻, f⁺g⁻, f⁻g⁺ can be nonzero; same-sign inputs select one of the first two and opposite-sign inputs select one of the last two. Thus h₊+(-h₋) is always defined, since one side is zero. The surviving magnitude is finite pq or +∞ and its sign is exactly the table entry above. This checks every infinite case without an extended-real distributive law.

Direct consumers may continue using f⁺−f⁻, |f|, cf and fg as the explicitly declared function abbreviations. Replacing a supplier by these same hypotheses/conclusions and values cannot alter a downstream theorem's contract. The focused source checks accompanying this argument inspect actual direct premise uses and a further collection of indirect notational uses; they do not claim that every proof in the logical closure was independently re-audited.
