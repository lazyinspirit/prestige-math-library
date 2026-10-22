from pathlib import Path
import hashlib,json,difflib
D=Path('physics/research/physics-non-fluid-129-2026-10-21-r2-owner-step3-shared-post-reader-parity');p=Path('physics/tools/physics-support/step3-scope.mjs');s=p.read_text();assert hashlib.sha256(s.encode()).hexdigest()=='9cd171d4223acbe4ddb112b1b6dd185557bcbe989737f0963b70db925de88b7f';math=Path('tools/step3-scope.mjs').read_text();a=math.index('          const pageRepair = repairedDecision?.route');b=math.index('          // An owner may amend',a);branch=math[a:b]
prefix='''          // A refuter may independently flag the reader-result carrier that
          // the same-batch owner repairs. Retain both exact obligations for
          // that one defect, without manufacturing a second ledger row.
          const explicitShared = prior && [
            [decision.same_defect_as, prior.obligation, decision.same_defect_evidence],
            [prior.same_defect_as, decision.obligation, prior.same_defect_evidence],
          ].some(([reference, obligation, evidence]) => reference === obligation
            && typeof evidence === 'string' && evidence.trim().length >= 40);
          const currentDecision = { ...decision, target };
          const refuted = decision.route === 'flagged' ? currentDecision : prior?.route === 'flagged' ? prior : null;
          const repairedDecision = refuted === currentDecision ? prior : currentDecision;
          const refuterMatch = /^refuter:([1-9]\\d*):([1-9]\\d*)$/.exec(refuted?.obligation ?? '');
'''
needle="          if (prior && !sharedFinding && !sharedCausalAddition) error('ledger-double-owned', `${defectId} is referenced by incompatible decisions`);";assert s.count(needle)==1;s=s.replace(needle,prefix+branch+needle.replace('!sharedCausalAddition)','!sharedCausalAddition && !sharedPostReaderRepair)'))
needle2='''            historical_delta_unknown: decision.historical_delta_unknown, owner_resolution: decision.owner_resolution,
''';assert s.count(needle2)==1;s=s.replace(needle2,needle2+'''            same_defect_as: decision.same_defect_as, same_defect_evidence: decision.same_defect_evidence,
            repair_confidence: decision.repair_confidence,
''')
(D/'step3-scope.proposed.mjs').write_text(s);(D/'shared-post-reader-branch.txt').write_text(prefix+branch);before=p.read_text();(D/'step3-scope.patch').write_text(''.join(difflib.unified_diff(before.splitlines(True),s.splitlines(True),fromfile='a/physics/tools/physics-support/step3-scope.mjs',tofile='b/physics/tools/physics-support/step3-scope.mjs')))
(D/'guards.json').write_text(json.dumps({'productionPath':str(p),'productionSha256':hashlib.sha256(before.encode()).hexdigest(),'rootMathReferencePath':'tools/step3-scope.mjs','rootMathReferenceSha256':hashlib.sha256(math.encode()).hexdigest(),'proposalPath':str(D/'step3-scope.proposed.mjs'),'proposalSha256':hashlib.sha256(s.encode()).hexdigest(),'rootMathBranchCopiedExactly':True,'productionWrites':False,'authority':'Research proposal only. User permission and root application required for actual shared tool.'},indent=2)+'\n')
